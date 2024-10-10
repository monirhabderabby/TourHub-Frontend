"use client";

// Packages
import { AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

// Components
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const PaymentStatusAction = ({ initialData }) => {
  const [open, setOpen] = useState(false);
  const { paymentStatus, invoiceId } = initialData || {};
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["paymentStatus"],
    mutationFn: (data) =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking/refund/${invoiceId}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
        }
      ),

    onSuccess: (data) => {
      setOpen((prev) => !prev);
      queryClient.invalidateQueries(["bookings"]);
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  const handleRefund = () => {
    const charge = (initialData?.amount / 100) * 5;
    const data = {
      paymentIntentId: initialData?.transactionId,
      amount: initialData?.amount - charge,
      invoiceId: initialData?.invoiceId,
    };

    mutate(data);
  };
  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "w-fit text-[10px] px-3 rounded-md text-white",
            paymentStatus === "Paid"
              ? "bg-[#28a745]"
              : "bg-orange-400 select-none"
          )}
          disabled={paymentStatus !== "Paid"}
        >
          {paymentStatus}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-[200px]">
        <p className="text-14px font-inter text-tourHub-title2 font-medium outline-tourHub-title">
          Are you sure you want to proceed with the refund?
        </p>

        <div className="flex justify-end">
          <Button
            className={cn(
              "mt-4 bg-tourHub-green-dark hover:bg-tourHub-green-dark/80 text-[12px] text-white flex items-center gap-x-1"
            )}
            size="sm"
            disabled={isPending || paymentStatus !== "Paid"}
            onClick={handleRefund}
          >
            Refund
            <AnimatePresence>
              {isPending && <Loader2 className="h-3 w-3 animate-spin" />}
            </AnimatePresence>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default PaymentStatusAction;
