// Packages
import moment from "moment";

// Components
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import InvoiceTrigger from "../../my-bookings/_components/invoiceTrigger";
import BookingsRowAction from "./BookingsRowAction";
import PaymentStatusAction from "./PaymentStatusAction";

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
    cell: ({ row }) => <PaymentStatusAction initialData={row.original} />,
  },
  {
    id: "invoice",
    header: "Invoice",
    cell: ({ row }) => <InvoiceTrigger data={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <BookingsRowAction data={row.original} />;
    },
  },
];
