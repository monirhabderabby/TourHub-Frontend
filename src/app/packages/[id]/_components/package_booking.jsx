// Packages
import { LocateIcon } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PackageBooking = () => {
  return (
    <div className="w-full  md:w-[280px] lg:w-[360px] sticky top-[80px]  h-auto min-h-[300px] border-[1px] border-[#E7E6E6] rounded-12px px-4 py-8 space-y-8">
      <p className="font-inter font-normal text-14px leading-28px text-tourHub-title2">
        From{" "}
        <span className="text-19px text-tourHub-green-dark font-semibold font-inter">
          $1200
        </span>
      </p>

      <div className="border-[1px] border-[#DDDDDD] rounded-12px p-3">
        <div className="flex items-center gap-x-2">
          <div className="border-[1px] border-[#E7E6E6] w-[50px] h-[50px] rounded-12px flex justify-center items-center">
            <LocateIcon />
          </div>
          <div>
            <h6 className="text-14px font-normal font-inter text-tourHub-title2 leading-24px">
              From
            </h6>
            <p className="text-[13.45px] font-normal font-inter leading-[22.4px] text-[#717171]">
              Febr 05 - Febr 10
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-2" />
      <div>
        <div className="text-tourHub-title2 font-medium font-inter text-[16.88px] leading-33px flex items-center w-full justify-between">
          <h3>Total: </h3>
          <h3>$1200</h3>
        </div>
        <Button className="w-full bg-tourHub-green-dark py-6 mt-2">
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default PackageBooking;
