"use client";

import { DataTable } from "@/components/ui/data-table";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";
import { Input } from "@/components/ui/input";
import { TextEffect } from "@/components/ui/text-effect";
import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CircleOff } from "lucide-react";
import { useState } from "react";
import LoaderState from "../../(components)/loader-state";
import { MyBookingsColumn } from "./columns";

const MyBookingTable = ({ userId }) => {
  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    queryKey: ["myBookings", userId],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking/${userId}`
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = <LoaderState />;
  } else if (isError) {
    content = (
      <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
        <CircleOff className="h-7 w-7 text-red-600" />
        <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
          <TextEffect per="char" preset="fade">
            {error.message}
          </TextEffect>
        </p>
      </div>
    );
  } else if (response?.success) {
    const data = response?.data?.result.map((item) => ({
      packageName: item?.packageName,
      createdAt: item?.createdAt,
      transactionId: item?.transactionId,
      amount: item?.amount,
      paymentStatus: item?.paymentStatus,
      invoiceId: item?.invoiceId,
      packageId: item?.packageId?._id,
    }));

    content = <TableContainer data={data} columns={MyBookingsColumn} />;
  }
  return <div>{content}</div>;
};

export default MyBookingTable;

const TableContainer = ({ data, columns }) => {
  const [columnFilters, setColumnFilters] = useState([]); // State for column filters
  const [sorting, setSorting] = useState([]); // State for sorting
  const table = useReactTable({
    data,
    columns: columns,
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
    <>
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Search by name"
          value={table.getColumn("packageName")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("packageName")?.setFilterValue(event.target.value)
          }
          className=" max-w-[300px] focus-visible:ring-[#3a6f54]"
        />
        <DataTableViewOptions table={table} />
      </div>
      <DataTable table={table} columns={columns} />
      {data?.length > 10 && (
        <div className="mt-4">
          <DataTablePagination table={table} />
        </div>
      )}
    </>
  );
};
