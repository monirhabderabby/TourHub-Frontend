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
import { useMemo, useState } from "react";

// Components
import { DataTable } from "@/components/ui/data-table";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";
import { Input } from "@/components/ui/input";
import { TextEffect } from "@/components/ui/text-effect";
import { useNewsColumns } from "./columns";

const NewsTable = () => {
  const NewsColumns = useNewsColumns();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news`).then((res) =>
        res.json()
      ),
  });

  // Show loading spinner while data is being fetched
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-280px)]">
        <Loader2Icon className="h-7 w-7 animate-spin text-tourHub-green-dark" />
      </div>
    );
  // Handle error state and display message with animation effect
  if (isError)
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
      <TableContainer data={data?.data} columns={NewsColumns} />
    </div>
  );
};

export default NewsTable;

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
    state: useMemo(
      () => ({ columnFilters, sorting }),
      [columnFilters, sorting]
    ),
  });
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <Input
          placeholder="Filter by title"
          value={table.getColumn("title")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm focus-visible:ring-[#3a6f54]"
        />

        <DataTableViewOptions table={table} />
      </div>
      <DataTable columns={columns} table={table} />
      <div className="mt-4">
        <DataTablePagination table={table} />
      </div>
    </div>
  );
};
