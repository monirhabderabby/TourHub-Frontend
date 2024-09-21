import Image from "next/image";
import Link from "next/link";
import PackagesSorting from "./packages_sorting";

const PackagesData = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <p className="font-inter font-normal text-[14.18px] leading-28px text-tourHub-title2">
          1362 results
        </p>
        <PackagesSorting />
      </div>
      <div className="mt-4 flex flex-col gap-8">
        {arr.map((item) => (
          <div
            key={item}
            className="border-[1px] font-inter border-[#E7E6E6] rounded-12px w-full min-h-[280px] h-full p-4 flex items-center gap-4"
          >
            <div className="relative h-[263px] w-[280px]">
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
              <p className="text-tourHub-title2 text-14px leading-28px font-normal">
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
            <div className="w-[225px] h-[263px] border-l-[1px] border-[#E7E6E6] flex flex-col justify-between items-center">
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
