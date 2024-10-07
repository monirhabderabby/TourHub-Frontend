import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import MyBookingTable from "./_components/my-booking-table";

const Page = async () => {
  const auth = await currentUser();

  if (!auth) redirect("/sign-in");
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-tourHub-title2 text-23px md:text-[30px] font-bold font-inter">
            My Tours
          </h2>
          <p className="text-tourHub-gray text-14px pt-1 mb-1">
            Tour Packages You Have Booked with Us
          </p>
        </div>
        <Link href={"/packages"} className="hidden md:block">
          <Button className="text-sm bg-tourHub-green-light text-white rounded-md px-3 py-2 ">
            Discover More
          </Button>
        </Link>
      </div>
      <Separator className="mb-4" />
      <MyBookingTable userId={auth?.id} />
    </div>
  );
};

export default Page;
