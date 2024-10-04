"use client";
import { ErrorState } from "@/app/packages/[id]/_components/package-details-container";
import { DataTable } from "@/components/ui/data-table";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { MyBookingsColumn } from "./columns";

const MyBookingsTable = () => {
  const { isLoaded, user } = useUser();
  if (!isLoaded) return null;
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-bookings", user?.id],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking/${user?.id}`
      ).then((res) => res.json()),
  });

  let content;

  // Show loading spinner while data is being fetched
  if (isLoading || !isLoaded) {
    content = (
      <div className="h-[80vh] md:h-[calc(100vh-25vh)]  w-full flex justify-center gap-x-2 items-center">
        <Loader2 className="animate-spin text-tourHub-green-dark h-5 w-5" />
      </div>
    );
  }
  // Show loading spinner while data is being fetched
  else if (isError) {
    content = <ErrorState message={error.message} />;
  } else if (response) {
    // Memoizing the processed transactions
    const processedBookings = response?.data?.result.map(
      ({
        createdAt,
        transactionId,
        paymentStatus,
        packageId,
        amount,
        _id,
        invoiceId,
      }) => ({
        createdAt,
        transactionId,
        paymentStatus,
        packageId: packageId?._id,
        name: packageId?.name,
        amount,
        _id,
        invoiceId,
      })
    );

    content = (
      <TableContainer data={processedBookings} columns={MyBookingsColumn} />
    );
  }

  return <div>{content}</div>;
};

export default MyBookingsTable;

const TableContainer = ({ data, columns }) => {
  const [columnFilters, setColumnFilters] = useState([]); // State for column filters
  const [sorting, setSorting] = useState([]); // State for sorting

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      columnFilters,
      sorting,
    },
  });
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Search by name"
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className=" max-w-[300px] focus-visible:ring-[#3a6f54]"
        />

        <DataTableViewOptions table={table} />
      </div>
      <DataTable columns={columns} table={table} />
      {data?.length > 10 && (
        <div className="mt-4">
          <DataTablePagination table={table} />
        </div>
      )}
    </div>
  );
};
