"use client";
import { useQuery } from "@tanstack/react-query";
import { CircleOff } from "lucide-react";
import Link from "next/link";
import PackageCard from "../common/package_card";
import SkeletonWrapper from "../common/SkeletonWrapper";
import { TextEffect } from "../ui/text-effect";

export const demoPackageData = [
  {
    id: 1,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKSoojHlw3hwnPNegHjTXMQ0pG3uV2rFZDtEly",
    name: "Taman Nasional Bunaken",
    price: "90",
  },
  {
    id: 2,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKXAZdaT4yepSa8gLVb9wNn1YyRhEiml62FzMk",
    name: "Taman Nasional Komodo",
    price: "120",
  },
  {
    id: 3,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKV52Jrw6lQMjC368YtNcwdpsn5KrxfUiv9oHB",
    name: "Taman Nasional Bunaken",
    price: "200",
  },
  {
    id: 4,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKPi1B1Y2r58eAG92HmgYxOkVcsaDCdX4lSE6t",
    name: "Burj Al Khalifa",
    price: "250",
  },
  {
    id: 5,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKq3S299MQ17cOQJCl5YR62TVaBGrp9UZNmwo8",
    name: "Modina",
    price: "100",
  },
  {
    id: 6,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKDtwA6zNOW8AST3ik5uqPHxO6wf0Gmd1LycXn",
    name: "Cox's Bazar",
    price: "400",
  },
  {
    id: 7,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKq3S299MQ17cOQJCl5YR62TVaBGrp9UZNmwo8",
    name: "Modina",
    price: "100",
  },
  {
    id: 8,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKDtwA6zNOW8AST3ik5uqPHxO6wf0Gmd1LycXn",
    name: "Cox's Bazar",
    price: "400",
  },
];

const PopulerTours = () => {
  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    queryKey: ["packages"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package?starRating=5,4,3,2,1&limit=8`
      ).then((res) => res.json()),
  });

  const packages = response?.data || [];

  let content;

  if (isLoading) {
    content = (
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-14 gap-y-10  mt-[30px] lg:mt-[50px]">
        {[1, 2, 3, 4].map((item) => (
          <SkeletonWrapper key={item} isLoading={isLoading}>
            <PackageCard />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[400px] font-inter">
        <CircleOff className="h-7 w-7 text-red-600" />
        <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
          <TextEffect per="char" preset="fade">
            {error.message}
          </TextEffect>
        </p>
      </div>
    );
  } else if (packages.length === 0) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        <p className="text-tourHub-gray text-14px font-inter">
          <TextEffect per="char" preset="fade">
            No popular tours available at the moment.
          </TextEffect>
        </p>
      </div>
    );
  } else if (packages.length > 0) {
    content = (
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-14 gap-y-10  mt-[30px] lg:mt-[50px]">
        {packages.map((item, index) => (
          <PackageCard
            key={item.id}
            bannerImage={item.cardImage || ""}
            price={item.price || ""}
            name={item.name || ""}
            duration={item.tourDuration || ""}
            averageRatings={item.totalAverageRating?.toFixed(1) || ""}
            location={item?.location || ""}
            country={item?.country || ""}
            totalComments={item?.comments.length || ""}
            index={index}
            packageId={item._id || ""}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-tourHub-title2 text-23px md:text-[29.41px] font-bold font-inter leading-[45px]">
          Find Popular Tours
        </h1>
        <Link
          href="/packages"
          className="text-tourHub-title2 font-normal text-14px leading-28px hover:underline"
        >
          See all
        </Link>
      </div>
      {content}
    </div>
  );
};

export default PopulerTours;
