import { cn } from "@/lib/utils";
import moment from "moment";
import MyBookingRowAction from "./MyBookingRowAction";

export const MyBookingsColumn = [
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
    header: "Amount",
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
      return <MyBookingRowAction data={row.original} />;
    },
  },
];
