"use client";
import { DataTable } from "@/components/ui/data-table";
import { OrderColumns } from "./columns";

export const data = [
  {
    name: "Cox's Bazar Beach Tour",
    createdAt: "2024-09-01 10:30:00",
    transactionId: "TXN123456789",
    paymentStatus: "Paid",
  },
  {
    name: "Dhaka to Sylhet Adventure",
    createdAt: "2024-09-02 14:20:00",
    transactionId: "TXN987654321",
    paymentStatus: "Paid",
  },
  {
    name: "Sundarbans Wildlife Expedition",
    createdAt: "2024-09-03 08:45:00",
    transactionId: "TXN234567890",
    paymentStatus: "Unpaid",
  },
  {
    name: "St. Martin's Island Getaway",
    createdAt: "2024-09-04 11:10:00",
    transactionId: "TXN345678901",
    paymentStatus: "Paid",
  },
  {
    name: "Bandarban Hill Tracks Trek",
    createdAt: "2024-09-05 13:55:00",
    transactionId: "TXN456789012",
    paymentStatus: "Paid",
  },
  {
    name: "Rangamati Boat Cruise",
    createdAt: "2024-09-06 16:30:00",
    transactionId: "TXN567890123",
    paymentStatus: "Unpaid",
  },
  {
    name: "Sylhet Tea Garden Retreat",
    createdAt: "2024-09-07 09:15:00",
    transactionId: "TXN678901234",
    paymentStatus: "Paid",
  },
  {
    name: "Kuakata Beach Serenity",
    createdAt: "2024-09-08 12:45:00",
    transactionId: "TXN789012345",
    paymentStatus: "Unpaid",
  },
  {
    name: "Mymensingh River Cruise",
    createdAt: "2024-09-09 15:20:00",
    transactionId: "TXN890123456",
    paymentStatus: "Paid",
  },
  {
    name: "Srimangal Eco Adventure",
    createdAt: "2024-09-10 18:00:00",
    transactionId: "TXN901234567",
    paymentStatus: "Unpaid",
  },
];

const OrderTable = () => {
  return (
    <div>
      <DataTable columns={OrderColumns} data={data} />
    </div>
  );
};

export default OrderTable;
