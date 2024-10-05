"use client";
// Packages
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
import { DataTableFacetedFilter } from "@/components/ui/data-table-faceted-filter";
import { DataTablePagination } from "@/components/ui/data-table-pagination";
import { DataTableViewOptions } from "@/components/ui/data-table-view-options";
import { Input } from "@/components/ui/input";
import { TextEffect } from "@/components/ui/text-effect";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import BulkDeleteButton from "./BulkDeleteButton";
import { usePackageColumns } from "./columns";

const fetchData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package`
  );

  if (!res.ok) {
    console.log("Network response was not ok");
  }
  return res.json();
};

const PackageTable = () => {
  const PackagesColumn = usePackageColumns();
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["packages"],
    queryFn: fetchData,
  });

  // Show loading spinner while data is being fetched
  if (isLoading || isFetching)
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
  const [columnVisibility, setColumnVisibility] = useState({
    category: false,
    description: false,
  });
  const [open, setOpen] = useState(false);
  const [sorting, setSorting] = useState([]); // State for sorting
  const queryClient = useQueryClient();

  const router = useRouter();

  const { isPending, mutate: bulkDeleteMutation } = useMutation({
    mutationKey: ["packageBulkDelete"],
    mutationFn: (data) =>
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package/bulk`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries(["packages"]);
        toast.success("Selected packages deleted successfully");
        setOpen(false);
      }
    },
    onError: (error) => {
      console.log("error", error.message);
      toast.error(error?.message);
    },
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnFilters,
      sorting,
      columnVisibility,
    },
  });

  const categoriesOptions = useMemo(() => {
    const categoriesMap = new Map();

    data?.forEach((item) => {
      item?.category?.forEach((category) => {
        categoriesMap.set(category?.name, {
          value: category?._id,
          label: category?.name,
        });
      });
    });

    const uniqueCategories = new Set(categoriesMap.values());

    return Array.from(uniqueCategories);
  }, [data]);

  const onBulkDelete = () => {
    // selected rows >> Arrays of Ids
    const selectedRowIds = table
      .getFilteredSelectedRowModel()
      .rows.map((item) => item.original._id);

    bulkDeleteMutation({
      ids: selectedRowIds,
    });
  };

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

        <div className="flex items-center gap-x-2">
          <DataTableFacetedFilter
            title="Tour Type"
            column={table.getColumn("category")}
            options={categoriesOptions}
          />
          <DataTableViewOptions table={table} />
          <BulkDeleteButton
            loading={
              table.getFilteredSelectedRowModel().rows.length === 0 || isPending
            }
            onDelete={onBulkDelete}
            open={open}
            setOpen={setOpen}
            isPending={isPending}
          />
        </div>
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
