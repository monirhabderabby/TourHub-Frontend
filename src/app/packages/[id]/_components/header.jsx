"use client";
import SocialShare from "@/components/common/Social-Share";
import { useQuery } from "@tanstack/react-query";
// Packages
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Components
const BannerImages = dynamic(() => import("./bannerImages"), { ssr: false });

const PackageHeader = ({
  packageName = "Package Name",
  averageRating = 0,
  comments = [],
  location = "Location",
  country = "Country",
  images = [],
  packageId,
}) => {
  return (
    <div>
      <div className="space-y-4">
        {/* Badge Section */}
        <BadgeSection />

        {/* Title */}
        <h1 className="max-w-[760px] text-[39.69px] font-inter font-bold leading-[56px]">
          {packageName}
        </h1>

        {/* Stats Section */}
        <StatsSection
          averageRating={averageRating}
          commentCount={comments.length}
          location={location}
          country={country}
          packageName={packageName}
          packageId={packageId}
        />

        {/* Images */}
        <BannerImages images={images} packageId={packageId} />
      </div>
    </div>
  );
};

// Badge Section as a reusable component
const BadgeSection = () => (
  <div className="flex items-center gap-x-3">
    <div className="bg-green-100 rounded-[200px] px-3 py-1 text-green-700 text-14px font-medium leading-28px w-fit">
      Bestseller
    </div>
    <div className="bg-gray-200 rounded-[200px] px-3 py-1 text-tourHub-title text-14px font-medium leading-28px w-fit">
      Free cancellation
    </div>
  </div>
);

// Stats Section as a reusable component
const StatsSection = ({
  averageRating,
  commentCount,
  location,
  country,
  packageName,
  packageId,
}) => {
  const [href, setHref] = useState(null);
  const {
    isLoading,
    data: response,
    isError,
  } = useQuery({
    queryKey: ["total-booked"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/booking/stats/total-booking/${packageId}`
      ).then((res) => res.json()),
  });

  useEffect(() => {
    if (typeof window !== undefined) {
      setHref(window.location.href);
    }
  }, []);

  let content;

  if (isLoading || isError) {
    content = <></>;
  } else if (response?.data?.totalBookings === 0) {
    content = <></>;
  } else {
    content = (
      <p className="font-normal font-inter text-[14.53px] leading-28px">
        {response?.data?.totalBookings} booked
      </p>
    );
  }
  return (
    <div className="flex items-center gap-x-4">
      <p className="font-normal font-inter text-[14.53px] leading-28px">
        {averageRating?.toFixed(1)} ({commentCount})
      </p>
      <p className="font-normal font-inter text-[14.53px] leading-28px">
        {location}, {country}
      </p>
      {content}

      <div className="pl-8">
        {href && (
          <SocialShare
            url={href}
            hashTag="#Travel #CoxBazar #Dhaka"
            quote={`Explore the beauty of ${packageName} with this amazing tour package!`}
          />
        )}
      </div>
    </div>
  );
};

export default PackageHeader;
