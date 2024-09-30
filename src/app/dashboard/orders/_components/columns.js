import { cn } from "@/lib/utils";
import OrderAction from "./RowAction";

export const OrderColumns = [
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
      return <OrderAction data={row.original} />;
    },
  },
];
