import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyBookingRowAction = ({ data }) => {
  const packageId = data?.packageId;
  return (
    <div>
      <Link href={`/packages/${packageId}`}>
        <Button size="sm" variant="outline">
          Details
        </Button>
      </Link>
    </div>
  );
};

export default MyBookingRowAction;
