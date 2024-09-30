import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import OrderTable from "./_components/order-table";

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-tourHub-title2 text-[30px] font-bold font-inter">
            Orders
          </h2>
          <p className="text-tourHub-gray text-14px pt-1 mb-1">
            Tour Packages You Have Booked with Us
          </p>
        </div>
        <Link href={"/packages"}>
          <Button className="text-sm bg-tourHub-green-light text-white rounded-md px-3 py-2 ">
            Discover More
          </Button>
        </Link>
      </div>
      <Separator className="mb-4" />
      <OrderTable />
    </div>
  );
};

export default Page;