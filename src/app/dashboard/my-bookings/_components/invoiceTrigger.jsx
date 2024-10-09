import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InvoiceTrigger({ data }) {
  return (
    <Link href={`/dashboard/my-bookings/invoice/${data?.invoiceId}`}>
      <Button variant="outline" size="sm">
        Invoice
      </Button>
    </Link>
  );
}
