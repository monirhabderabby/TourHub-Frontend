"use client";
// Package
import { useQuery } from "@tanstack/react-query";
import { CircleAlert, CircleOff, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Component
import SkeletonWrapper from "@/components/common/SkeletonWrapper";
import { TextEffect } from "@/components/ui/text-effect";
import { useFilterStore } from "@/store/packageFilter";
import MobileDialogFilter from "./MobileDialogFilter";
import PackagesSorting from "./packages_sorting";

const PackagesData = () => {
  const { submit, setAction, startDate, endDate, min, max } = useFilterStore();
  const {
    isLoading,
    data: response,
    isError,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["packages", min, max, startDate, endDate],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package?startDate=${startDate}&endDate=${endDate}&min=${min}&max=${max}`
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
            <PackageCard key={item} data={item} />
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

const PackageCard = ({ data }) => {
  const { price, description, name, country, location, averageRating } =
    data || {};
  return (
    <div className="border-[1px] font-inter border-[#E7E6E6] rounded-12px w-full min-h-[280px] h-full p-4 flex flex-col md:flex-row items-center gap-4">
      <div className=" relative h-[263px] w-full md:w-[280px]">
        <Image
          src="https://utfs.io/f/0H3br7tpgSGKDtwA6zNOW8AST3ik5uqPHxO6wf0Gmd1LycXn"
          alt="imag"
          fill
          className="object-cover rounded-12px"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col gap-y-2 max-w-[473px]">
        <p className="text-14px leading-28px text-tourHub-title2 font-normal ">
          {location}, {country}
        </p>
        <h3 className="text-tourHub-title2 text-[18px] leading-[30px] font-medium">
          {name}
        </h3>
        <p className=" hidden lg:block text-tourHub-title2 text-14px leading-28px font-normal">
          {description?.slice(0, 300)}
        </p>
        <p className="text-14px leading-28px text-tourHub-title2 font-normal">
          <span className="font-medium">{averageRating}</span> (269)
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
            From <span className="font-medium">${price}</span>
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
  );
};
