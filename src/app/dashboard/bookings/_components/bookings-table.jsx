"use client";
import { ErrorState } from "@/app/packages/[id]/_components/package-details-container";
import { DataTable } from "@/components/ui/data-table";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { BookingsColumn } from "./bookings-column";

const BookingsTable = () => {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking`).then(
        (res) => res.json()
      ),
  });

  let content;

  if (isLoading) {
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
        filterField="transactionId"
        filterPlaceholder="Search by transaction ID"
        columns={BookingsColumn}
        data={processedBookings}
      />
    );
  }

  return <div>{content}</div>;
};

export default BookingsTable;
