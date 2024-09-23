import Image from "next/image";
import Link from "next/link";
import MobileDialogFilter from "./MobileDialogFilter";
import PackagesSorting from "./packages_sorting";

const PackagesData = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className="p-2">
      <div className="flex flex-col md:flex-row  justify-around md:justify-between md:items-center items-end">
        <p className="font-inter font-normal text-[14.18px] leading-28px text-tourHub-title2 order-2">
          1362 results
        </p>
        <div className="flex items-center flex-1 ">
          <PackagesSorting />
          <div className="lg:hidden flex-1">
            <MobileDialogFilter />
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-8">
        {arr.map((item) => (
          <div
            key={item}
            className="border-[1px] font-inter border-[#E7E6E6] rounded-12px w-full min-h-[280px] h-full p-4 flex flex-col md:flex-row items-center gap-4"
          >
            <div className=" relative h-[263px] w-full md:w-[280px]">
              <Image
                src="https://utfs.io/f/0H3br7tpgSGKDtwA6zNOW8AST3ik5uqPHxO6wf0Gmd1LycXn"
                alt="imag"
                fill
                className="object-cover rounded-12px"
              />
            </div>
            <div className="flex flex-1 flex-col gap-y-2 max-w-[473px]">
              <p className="text-14px leading-28px text-tourHub-title2 font-normal ">
                Paris, France
              </p>
              <h3 className="text-tourHub-title2 text-[18px] leading-[30px] font-medium">
                Phi Phi Islands Adventure Day Trip with Seaview Lunch by V.
                Marine Tour
              </h3>
              <p className=" hidden lg:block text-tourHub-title2 text-14px leading-28px font-normal">
                The Phi Phi archipelago is a must-visit while in Phuket, and
                this speedboat trip.
              </p>
              <p className="text-14px leading-28px text-tourHub-title2 font-normal">
                <span className="font-medium">4.8</span> (269)
              </p>
              <div className="font-inter font-normal text-tourHub-green-dark text-14px flex items-center justify-evenly">
                <p>Best Price Gurantee</p>
                <p>Free Cancellation</p>
              </div>
            </div>
            {/* pricing */}
            <div className="w-full md:w-[225px] h-auto md:h-[263px] md:border-l-[1px] md:border-[#E7E6E6] flex flex-row md:flex-col justify-between items-center mt-6 md:mt-0">
              <p className="text-14px font-inter leading-27px text-tourHub-title2">
                2 Days 1 Nights
              </p>
              <div className="flex flex-col justify-center items-center gap-y-4">
                <p className="text-[15px] text-tourHub-title2 font-normal leading-[21px]">
                  From <span className="font-medium">$144</span>
                </p>
                <Link
                  href="/packages/dynamicId"
                  className="border-[1px] border-tourHub-green-dark px-4 py-2 rounded-12px text-[15px] font-medium font-inter leading-28px text-tourHub-green-dark hover:bg-tourHub-green-dark hover:text-white transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesData;
