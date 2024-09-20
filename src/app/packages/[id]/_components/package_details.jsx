// Packages
import { CalendarDays, Check, GroupIcon, Languages, X } from "lucide-react";

// Components
import { Separator } from "@/components/ui/separator";
import Faq from "./faq";
import Itinerary from "./itinerary";
import PackageDescription from "./package_description";
import PackageReviews from "./package_reviews";
import PackageSectionTitle from "./package_section_title";
import TourMap from "./tour_map";

const PackageDetails = () => {
  return (
    <div className="w-full ">
      <Specs />
      <PackageDescription />
      <Separator className="my-14" />
      <WhatsInclude />
      <Separator className="my-14" />
      <Itinerary />
      <TourMap />
      <Separator className="my-14" />
      <Faq />
      <Separator className="my-14" />
      <PackageReviews />
    </div>
  );
};

export default PackageDetails;

// Specs
const Specs = () => {
  const data = [
    {
      id: 1,
      title: "Duration",
      description: "3 Days",
      icon: <CalendarDays className="text-gray-500" />,
    },
    {
      id: 2,
      title: "Group Size",
      description: "10 people",
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
    <div className="w-full  h-fit grid grid-cols-2 gap-6 md:flex items-center  gap-x-8 md:gap-x-16">
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

// Whats include
const WhatsInclude = () => {
  const includes = [
    "Bevarages, drinking water, morning tea",
    "Local taxes",
    "Hotel pickup",
  ];
  const excludes = ["Towel", "Tips", "Alcoholic Bevarages"];
  return (
    <div className="space-y-4">
      <PackageSectionTitle title="What's included" />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-y-4">
          {includes.map((text) => (
            <div key={text} className="flex items-center gap-x-2">
              <div className="bg-[#EFF7F1] w-[24px] h-[24px] rounded-full flex justify-center items-center">
                <Check className="w-4 h-4 text-tourHub-green-dark" />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          {excludes.map((text) => (
            <div key={text} className="flex items-center gap-x-2">
              <div className="bg-[#FFE5E5] w-[24px] h-[24px] rounded-full flex justify-center items-center">
                <X className="w-4 h-4 text-rose-500" />
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
