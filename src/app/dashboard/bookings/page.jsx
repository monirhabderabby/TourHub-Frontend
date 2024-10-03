// Packages
import dynamic from "next/dynamic";

// Components
import { Separator } from "@/components/ui/separator";
const BookingsTable = dynamic(() => import("./_components/bookings-table"), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-tourHub-title2 text-23px md:text-[30px] font-bold font-inter">
            All Bookings
          </h2>
          <p className="text-tourHub-gray text-14px pt-1 mb-1">
            Tour Packages Booked by Users
          </p>
        </div>
      </div>
      <Separator className="mb-4" />
      <BookingsTable />
    </div>
  );
};

export default Page;
