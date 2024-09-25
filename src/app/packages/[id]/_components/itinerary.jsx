import { Timeline } from "@/components/ui/timeline";

const Itinerary = () => {
  const data = [
    {
      title: "Day 1",
      content: (
        <div>
          <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
            Day 1: Dhaka to Cox's Bazar (AC Bus)
          </h3>
          <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
            Begin your journey from Dhaka to Cox's Bazar in a comfortable
            air-conditioned bus. Upon arrival, check in to your hotel and relax
            by the beach. In the evening, take a peaceful stroll along the
            longest sea beach in the world.
          </p>
        </div>
      ),
    },
    {
      title: "Day 2",
      content: (
        <div>
          <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
            Day 2: Explore Cox's Bazar & Local Attractions
          </h3>
          <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
            Start your day with a visit to Himchari Waterfall and Inani Beach,
            known for its clear waters and peaceful surroundings. Spend the
            afternoon shopping at local markets or enjoying fresh seafood by the
            sea.
          </p>
        </div>
      ),
    },
    {
      title: "Day 3",
      content: (
        <div>
          <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
            Day 3: Visit St. Martin's Island
          </h3>
          <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
            Take a boat trip to St. Martin's Island, a small coral island famous
            for its natural beauty and crystal-clear waters. Enjoy a day of
            island exploration, snorkeling, and sunbathing.
          </p>
        </div>
      ),
    },
    {
      title: "Day 4",
      content: (
        <div>
          <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
            Day 4: Relax & Return to Dhaka
          </h3>
          <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
            Spend the morning at leisure, relaxing on the beach or enjoying a
            last-minute shopping spree. In the afternoon, board the AC bus back
            to Dhaka, concluding your memorable trip.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full max-w-[800px] pb-20">
      <Timeline data={data} />
    </div>
  );
};

export default Itinerary;
