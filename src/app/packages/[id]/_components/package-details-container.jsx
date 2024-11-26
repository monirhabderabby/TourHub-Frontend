"use client";
// Packages
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, Loader2 } from "lucide-react";
import dynamic from "next/dynamic";

// Components
import { TextEffect } from "@/components/ui/text-effect";
import { memo } from "react";
import PackageHeader from "./header";
import PackageBooking from "./package_booking";
import PackageDetails from "./package_details";
import SuggestedPackages from "./suggested_packages";
const PackageCard = dynamic(() => import("@/components/common/package_card"));

const PackageDetailsContainer = ({ packageId }) => {
  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["package", packageId],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package/${packageId}`
      ).then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch package details");
        }
        return res.json();
      }),
    refetchOnWindowFocus: false, // Optimize for fewer unnecessary refetches
  });

  const loading = isLoading;

  let content;

  if (loading) {
    content = <LoadingState />;
  } else if (isError) {
    content = <ErrorState message={error.message} />;
  } else if (response) {
    const {
      name,
      totalAverageRating,
      comments,
      location,
      country,
      cardImage,
      bannerImage,
      price,
      startDate,
      endDate,
      category,
    } = response?.data || {};
    content = (
      <div className="container mt-[80px] pb-[130px]">
        <PackageHeader
          packageName={name}
          averageRating={totalAverageRating}
          comments={comments}
          location={location}
          country={country}
          images={[cardImage, ...bannerImage]}
          packageId={packageId}
        />
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-3 lg:gap-12 relative pt-5">
          <div className="lg:flex-1">
            <PackageDetails packageId={packageId} data={response?.data} />
          </div>
          <div>
            <PackageBooking
              price={price}
              from={startDate}
              to={endDate}
              packageId={packageId}
              packageName={name || ""}
            />
          </div>
        </div>
        {/* suggest packages */}
        <SuggestedPackages category={category} packageId={packageId} />
      </div>
    );
  }
  return content;
};

export default memo(PackageDetailsContainer);

// Loading State Component for better readability
const LoadingState = memo(() => (
  <div className="h-[80vh] md:h-[calc(100vh-25vh)] w-full flex justify-center gap-x-2 items-center">
    <Loader2 className="animate-spin text-tourHub-green-dark h-5 w-5" />
    <p>Please wait...</p>
  </div>
));

LoadingState.displayName = "LoadingState";

// Error State Component for reusability
export const ErrorState = memo(({ message }) => (
  <div className="h-[80vh] md:h-[calc(100vh-25vh)] w-full flex justify-center gap-x-2 items-center">
    <div className="flex flex-col justify-center items-center">
      <AlertCircle className="h-6 w-6 text-red-500" />
      <p className="font-inter text-16px text-red-500">
        <TextEffect per="char" preset="fade">
          {message}
        </TextEffect>
      </p>
    </div>
  </div>
));

ErrorState.displayName = "ErrorState";
