// Packages
import dynamic from "next/dynamic";

// Components
const BannerImages = dynamic(() => import("./bannerImages"), { ssr: false });

const PackageHeader = ({
  packageName,
  averageRating,
  comments,
  location,
  country,
  images,
}) => {
  return (
    <div>
      <div className="space-y-4">
        {/* Badge */}
        <div className="flex items-center gap-x-3">
          <div className="bg-green-100 rounded-[200px] px-3 py-1 text-green-700 text-14px font-medium leading-28px w-fit">
            Bestseller
          </div>
          <div className="bg-gray-200 rounded-[200px] px-3 py-1 text-tourHub-title text-14px font-medium leading-28px w-fit">
            Free cancellation
          </div>
        </div>

        {/* Title */}
        <div>
          <h1 className="max-w-[760px] text-[39.69px] font-inter font-bold leading-[56px]">
            {packageName}
          </h1>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-x-4">
          <p className="font-normal font-inter text-[14.53px] leading-28px">
            {averageRating.toFixed(1)}({comments.length})
          </p>
          <p className="font-normal font-inter text-[14.53px] leading-28px">
            {location}, {country}
          </p>
          <p className="font-normal font-inter text-[14.53px] leading-28px">
            30k+ booked
          </p>
        </div>

        {/* Images */}
        <BannerImages images={images} />
      </div>
    </div>
  );
};

export default PackageHeader;
