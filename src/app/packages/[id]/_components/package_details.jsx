// Packages
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Check, GroupIcon, Languages, X } from "lucide-react";
import dynamic from "next/dynamic";
import PackageDescription from "./package_description";
import PackageSectionTitle from "./package_section_title";

// Dynamic Imports
const PackageCommentBox = dynamic(() => import("./package_comment_box"), {
  ssr: false,
});
const Faq = dynamic(() => import("./faq"), { ssr: false });
const Itinerary = dynamic(() => import("./itinerary"), { ssr: false });
const PackageReviews = dynamic(() => import("./package_reviews"), {
  ssr: false,
});
const TourMap = dynamic(() => import("./tour_map"), { ssr: false });

// Main Component
const PackageDetails = ({ data = {}, packageId }) => {
  const { tourDuration, totalPeople, description, features, itinerary } = data;

  return (
    <div className="w-full">
      {/* Specs Section */}
      <Specs duration={tourDuration} groupSize={totalPeople} />

      {/* Description */}
      <PackageDescription description={description} />
      <Separator className="my-14" />

      {/* What's Included */}
      <WhatsInclude
        includes={features?.include || []}
        excludes={features?.exclude || []}
      />
      <Separator className="my-14" />

      {/* Itinerary */}
      <Itinerary itineraryData={itinerary} />
      <TourMap />
      <Separator className="my-14" />

      {/* FAQ and Reviews */}
      <Faq />
      <Separator className="my-14" />
      <PackageReviews
        totalAverageRating={data?.totalAverageRating || ""}
        averageLocationRating={data?.averageLocationRating || ""}
        averageFoodRating={data?.averageFoodRating || ""}
        averageAmenitiesRating={data?.averageAmenitiesRating || ""}
        averagePriceRating={data?.averagePriceRating || ""}
        averageRoomRating={data?.averageRoomRating || ""}
        averageTourOperatorRating={data?.averageTourOperatorRating || ""}
        packageId={packageId}
      />

      {/* Comments */}
      <PackageCommentBox packageId={packageId} />
    </div>
  );
};

export default PackageDetails;

/* Specs Component */
const Specs = ({ duration, groupSize }) => {
  const data = [
    {
      id: 1,
      title: "Duration",
      description: duration || "N/A",
      icon: <CalendarDays className="text-gray-500" />,
    },
    {
      id: 2,
      title: "Group Size",
      description: `${groupSize || "N/A"} person`,
      icon: <GroupIcon className="text-gray-500" />,
    },
    {
      id: 3,
      title: "Languages",
      description: "English, Bangla",
      icon: <Languages className="text-gray-500" />,
    },
  ];

  return (
    <div className="w-full h-fit grid grid-cols-2 gap-6 md:flex items-center gap-x-8 md:gap-x-16">
      {data.map(({ description, icon, id, title }) => (
        <div key={id} className="flex items-center gap-x-2">
          <div className="border-[1px] border-[#E7E6E6] w-[50px] h-[50px] rounded-12px flex justify-center items-center">
            {icon}
          </div>
          <div>
            <h6 className="text-14px font-normal font-inter text-tourHub-title2 leading-24px">
              {title}
            </h6>
            <p className="text-[13.45px] font-normal font-inter leading-[22.4px] text-[#717171]">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

/* What's Included Component */
const WhatsInclude = ({ includes = [], excludes = [] }) => {
  return (
    <div className="space-y-4">
      <PackageSectionTitle title="What's included" />
      <div className="grid grid-cols-2 gap-4">
        {/* Included Features */}
        <div className="flex flex-col gap-y-4">
          {includes.length > 0 ? (
            includes.map((text) => (
              <IncludeExcludeItem key={text} text={text} included />
            ))
          ) : (
            <p>No features included.</p>
          )}
        </div>

        {/* Excluded Features */}
        <div className="flex flex-col gap-y-4">
          {excludes.length > 0 ? (
            excludes.map((text) => (
              <IncludeExcludeItem key={text} text={text} included={false} />
            ))
          ) : (
            <p>No features excluded.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable component for include/exclude items
const IncludeExcludeItem = ({ text, included }) => (
  <div className="flex items-center gap-x-2">
    <div
      className={`${
        included ? "bg-[#EFF7F1]" : "bg-[#FFE5E5]"
      } w-[24px] h-[24px] rounded-full flex justify-center items-center`}
    >
      {included ? (
        <Check className="w-4 h-4 text-tourHub-green-dark" />
      ) : (
        <X className="w-4 h-4 text-rose-500" />
      )}
    </div>
    <p>{text}</p>
  </div>
);
