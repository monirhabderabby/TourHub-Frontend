import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrderAction = ({ data }) => {
  const isPaid = data.paymentStatus.toLowerCase() === "paid";
  return (
    <div>
      {isPaid ? (
        <Link href="/">
          <Button size="sm" variant="outline">
            View
          </Button>
        </Link>
      ) : null}
    </div>
  );
};

export default OrderAction;
