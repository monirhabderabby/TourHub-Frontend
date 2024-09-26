"use client";
// Packages
import dynamic from "next/dynamic";

// Components
import { demoPackageData } from "@/components/homePage/populer_tours";
import { TextEffect } from "@/components/ui/text-effect";
import { useQuery } from "@tanstack/react-query";
import { AlertCircle, Loader2 } from "lucide-react";
import PackageHeader from "./header";
import PackageBooking from "./package_booking";
import PackageDetails from "./package_details";
import PackageSectionTitle from "./package_section_title";
const PackageCard = dynamic(() => import("@/components/common/package_card"));

const PackageDetailsContainer = ({ packageId }) => {
  const {
    data: response,
    isLoading,
    isFetching,
    isRefetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["package", packageId],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package/${packageId}`
      ).then((res) => res.json()),
  });

  const loading = isLoading || isFetching || isRefetching;

  let content;

  if (loading) {
    content = (
      <div className="h-[80vh] md:h-[calc(100vh-25vh)] w-full flex justify-center gap-x-2 items-center">
        <Loader2 className="animate-spin text-tourHub-green-dark h-5 w-5" />
        <p>Please wait...</p>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="h-[80vh] md:h-[calc(100vh-25vh)] w-full flex justify-center gap-x-2 items-center">
        <div className="flex flex-col justify-center items-center">
          <AlertCircle className="h-6 w-6 text-red-500" />
          <p className="font-inter text-16px text-red-500">
            <TextEffect per="char" preset="fade">
              {error.message}
            </TextEffect>
          </p>
        </div>
      </div>
    );
  } else if (response) {
    const {
      name,
      averageRating,
      comments,
      location,
      country,
      cardImage,
      bannerImage,
      price,
      startDate,
      endDate,
    } = response?.data || {};
    content = (
      <div className="container mt-[80px] pb-[130px]">
        <PackageHeader
          packageName={name}
          averageRating={averageRating}
          comments={comments}
          location={location}
          country={country}
          images={[cardImage, ...bannerImage]}
        />
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-3 lg:gap-12 relative pt-5">
          <div className="lg:flex-1">
            <PackageDetails packageId={packageId} data={response?.data} />
          </div>
          <div>
            <PackageBooking price={price} from={startDate} to={endDate} />
          </div>
        </div>
        {/* suggest packages */}
        <div className="mt-[100px]">
          <PackageSectionTitle title="You might also like..." />
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10  mt-[30px] lg:mt-[50px]">
            {demoPackageData.slice(0, 4).map((item) => (
              <PackageCard
                key={item.id}
                bannerImage={item.bannerImage}
                price={item.price}
                name={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  return content;
};

export default PackageDetailsContainer;
