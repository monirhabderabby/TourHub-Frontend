import { cn } from "@/lib/utils";
import moment from "moment";
import MyBookingRowAction from "./MyBookingRowAction";
import InvoiceTrigger from "./invoiceTrigger";

export const MyBookingsColumn = [
  {
    accessorKey: "packageName",
    header: "Package",
  },
  {
    accessorKey: "createdAt",
    header: "Payment Time",
    cell: ({ row }) => <p>{moment(row.getValue("createdAt")).format("lll")}</p>,
  },
  {
    accessorKey: "transactionId",
    header: "Transaction ID",
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
    id: "invoice",
    header: "Invoice",
    cell: ({ row }) => {
      return <InvoiceTrigger data={row.original} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <MyBookingRowAction data={row.original} />;
    },
  },
];
