"use client";
import { ErrorState } from "@/app/packages/[id]/_components/package-details-container";
import { DataTable } from "@/components/ui/data-table";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { MyBookingsColumn } from "./columns";

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

const MyBookingsTable = () => {
  const { isLoaded, user } = useUser();
  if (!isLoaded) return null;
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-bookings", user?.id],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking/${user?.id}`
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading || !isLoaded) {
    content = (
      <div className="h-[80vh] md:h-[calc(100vh-25vh)]  w-full flex justify-center gap-x-2 items-center">
        <Loader2 className="animate-spin text-tourHub-green-dark h-5 w-5" />
      </div>
    );
  } else if (isError) {
    content = <ErrorState message={error.message} />;
  } else if (response) {
    // Memoizing the processed transactions
    const processedBookings = response?.data?.result.map(
      ({ createdAt, transactionId, paymentStatus, packageId, amount }) => ({
        createdAt,
        transactionId,
        paymentStatus,
        packageId: packageId?._id,
        name: packageId?.name,
        amount,
      })
    );

    content = (
      <DataTable
        filterField="name"
        filterPlaceholder="Search by name"
        columns={MyBookingsColumn}
        data={processedBookings}
      />
    );
  }

  return <div>{content}</div>;
};

export default MyBookingsTable;
