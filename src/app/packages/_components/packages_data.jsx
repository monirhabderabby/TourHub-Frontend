"use client";
// Package
import { useQuery } from "@tanstack/react-query";
import { CircleAlert, CircleOff, Loader2 } from "lucide-react";

// Component
import SkeletonWrapper from "@/components/common/SkeletonWrapper";
import { TextEffect } from "@/components/ui/text-effect";
import { useFilterStore } from "@/store/packageFilter";
import MobileDialogFilter from "./MobileDialogFilter";
import PackageFilterCard from "./package-filter-card";
import PackagesSorting from "./packages_sorting";

const PackagesData = () => {
  const { startDate, endDate, min, max, location, country } = useFilterStore();
  const {
    isLoading,
    data: response,
    isError,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["packages", min, max, startDate, endDate, location, country],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package?min=${min}&max=${max}&startDate=${startDate}&endDate=${endDate}&location=${location}&country=${country}`
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="w-full flex gap-x-2 justify-center items-center min-h-[60vh]">
        <Loader2 className="h-5 w-5 animate-spin text-tourHub-green-dark" />
        <p className="text-14px text-tourHub-gray">Loading...</p>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
        <CircleOff className="h-7 w-7 text-red-600" />
        <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
          <TextEffect per="char" preset="fade">
            {error.message}
          </TextEffect>
        </p>
      </div>
    );
  } else if (response?.data?.length === 0) {
    content = (
      <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
        <CircleAlert className="h-5 w-5" />
        <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
          <TextEffect per="char" preset="fade">
            No data available for the selected criteria. Please try different
            filters or check your connection!
          </TextEffect>
        </p>
      </div>
    );
  } else if (response?.data?.length > 0) {
    content = (
      <div className="mt-4 flex flex-col gap-8">
        {response?.data.map((item) => (
          <SkeletonWrapper isLoading={isFetching} key={item._id}>
            <PackageFilterCard key={item} data={item} />
          </SkeletonWrapper>
        ))}
      </div>
    );
  }

  return (
    <div className="p-2">
      <div className="flex flex-col md:flex-row  justify-around md:justify-between md:items-center items-end">
        {response?.data?.length !== 0 && (
          <p className="font-inter font-normal text-[14.18px] leading-28px text-tourHub-title2 order-2">
            {response?.data?.length} results
          </p>
        )}
        <div className="flex items-center flex-1 ">
          <PackagesSorting />
          <div className="lg:hidden flex-1">
            <MobileDialogFilter />
          </div>
        </div>
      </div>
      {content}
    </div>
  );
};

export default PackagesData;
