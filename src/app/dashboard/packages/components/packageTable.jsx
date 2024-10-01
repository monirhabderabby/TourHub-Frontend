"use client";
// Packages
import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { CircleOff, Loader2Icon } from "lucide-react";
import { useState } from "react";

// Components
import { DataTable } from "@/components/ui/data-table";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";
import { Input } from "@/components/ui/input";
import { TextEffect } from "@/components/ui/text-effect";
import { usePackageColumns } from "./columns";

const PackageTable = () => {
  const PackagesColumn = usePackageColumns();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["packages"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package`).then(
        (res) => res.json()
      ),
  });

  // Show loading spinner while data is being fetched
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[400px]">
        <Loader2Icon className="h-6 w-6 animate-spin text-tourHub-green-dark" />
      </div>
    );
  // Handle error state and display message with animation effect
  else if (isError)
    return (
      <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
        <CircleOff className="h-7 w-7 text-red-600" />
        <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
          <TextEffect per="char" preset="fade">
            {error.message}
          </TextEffect>
        </p>
      </div>
    );

  return (
    <div>
      <TableContainer columns={PackagesColumn} data={data?.data} />
    </div>
  );
};

export default PackageTable;

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
          placeholder="Filter by name"
          value={table.getColumn("name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm focus-visible:ring-[#3a6f54]"
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
