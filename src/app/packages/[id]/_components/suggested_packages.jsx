"use client";

// Packages
import { useQuery } from "@tanstack/react-query";
import { CircleOff } from "lucide-react";
import { memo, useMemo } from "react";

// Components
import PackageCard from "@/components/common/package_card";
import SkeletonWrapper from "@/components/common/SkeletonWrapper";
import { TextEffect } from "@/components/ui/text-effect";
import PackageSectionTitle from "./package_section_title";

// Suggested Packages Component
const SuggestedPackages = ({ category, packageId }) => {
  const processedCategoryForQuery = useMemo(() => {
    const categories =
      category?.length !== 0 && category.map((item) => item._id);
    return categories.join(",");
  }, [category]);

  const {
    isLoading,
    data: response,
    isError,
    error,
  } = useQuery({
    queryKey: ["suggestedPackages"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package?limit=4&category=${processedCategoryForQuery}`
      ).then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch suggested packages");
        }

        return res.json();
      }),
    refetchOnWindowFocus: false,
  });

  let content;

  if (isLoading) {
    content = (
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10  mt-[30px] lg:mt-[50px]">
        {[1, 2, 3, 4].map((item) => (
          <SkeletonWrapper isLoading={isLoading} key={item}>
            <PackageCard />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <div className="mt-[100px]">
        <PackageSectionTitle title="You might also like..." />
        <div className="min-h-[200px] flex flex-col text-14px text-tourHub-gray justify-center items-center">
          <CircleOff />
          <TextEffect per="char" preset="fade">
            {error.message}
          </TextEffect>
        </div>
      </div>
    );
  } else if (response?.data?.length === 0) {
    return;
  } else if (response?.success) {
    const data = response?.data?.filter((item) => item._id !== packageId);

    if (data.length === 0) {
      return;
    }

    content = (
      <div className="mt-[100px]">
        <PackageSectionTitle title="You might also like..." />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10  mt-[30px] lg:mt-[50px]">
          {data.map((item, index) => (
            <PackageCard
              key={item._id}
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
      </div>
    );
  }
  return;
};

export default memo(SuggestedPackages);
