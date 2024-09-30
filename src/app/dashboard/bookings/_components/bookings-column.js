// Packages
import moment from "moment";

// Components
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { cn } from "@/lib/utils";
import BookingsRowAction from "./BookingsRowAction";

export const BookingsColumn = [
  {
    accessorKey: "name",
    header: "Package",
    cell: ({ row }) => (
      <p className="font-inter text-14px text-tourHub-green-dark font-medium">
        {row.getValue("name")}
      </p>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Payment Time",
    cell: ({ row }) => {
      return (
        <p className="text-14px font-normal text-tourHub-gray">
          {moment(row.getValue("createdAt")).format("lll")}
        </p>
      );
    },
  },
  {
    accessorKey: "transactionId",
    header: "Transaction ID",
    cell: ({ row }) => (
      <p className="font-inter text-14px text-tourHub-green-dark font-medium">
        {" "}
        {row.getValue("transactionId")}
      </p>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => (
      <p className="font-medium font-inter text-tourHub-title2">
        ${row.getValue("amount")}
      </p>
    ),
  },
  {
    accessorKey: "paymentStatus",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("paymentStatus");
      const isPaid = status.toLowerCase() === "paid";

      return (
        <div
          className={cn(
            isPaid ? "bg-[#28a745] " : "bg-[#dc3545]",
            "w-fit text-[10px] px-3  rounded-md  text-white"
          )}
        >
          {status}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <BookingsRowAction data={row.original} />;
    },
  },
];
