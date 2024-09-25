import { Timeline } from "@/components/ui/timeline";

const Itinerary = ({ itineraryData }) => {
  const data = itineraryData?.map((item) => ({
    title: item.day,
    content: (
      <div>
        <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
          {item.title}
        </h3>
        <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
          {item.description}
        </p>
      </div>
    ),
  }));

  return (
    <div className="w-full max-w-[800px] pb-20">
      <Timeline data={data} />
    </div>
  );
};

export default Itinerary;
