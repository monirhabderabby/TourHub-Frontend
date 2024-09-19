import { Timeline } from "@/components/ui/timeline";

const Itinerary = () => {
  const data = [
    {
      title: "Day 1",
      content: (
        <div>
          <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
            Day 1: Airport Pick Up
          </h3>
          <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
            Welcome to the beautiful city of Dubai! Upon arrival, our
            representative will meet you at the airport and transfer you to your
            hotel. Check-in and relax after your journey. In the evening, enjoy
            a traditional Arabic dinner at a local restaurant.
          </p>
        </div>
      ),
    },
    {
      title: "Day 2",
      content: (
        <div>
          <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
            Day 2: Temples & River Cruise
          </h3>
          <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
            Visit the famous temples of Angkor Wat and Ta Prohm, and enjoy a
            relaxing river cruise through the scenic Tonle Sap Lake.
          </p>
        </div>
      ),
    },
    {
      title: "Day 3",
      content: (
        <div>
          <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
            Day 3: Massage & Overnight Train
          </h3>
          <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
            Like on all of our trips, we can collect you from the airport when
            you land and take you directly to your hotel. The first Day is just
            a check-in Day so you have this freedom to explore the city and get
            settled in.
          </p>
        </div>
      ),
    },
    {
      title: "Day 4",
      content: (
        <div>
          <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
            Day 4: Khao Sok National Park
          </h3>
          <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
            Embark on a thrilling adventure in Khao Sok National Park, where
            you'll explore the lush rainforest, trek through the jungle, and
            even take a ride on a traditional longtail boat.
          </p>
        </div>
      ),
    },
    {
      title: "Day 5",
      content: (
        <div>
          <h3 className="text-tourHub-title2 font-inter font-medium text-16px leading-[30px]">
            Day 5: Travel to Koh Phangan
          </h3>
          <p className="text-tourHub-title2 font-normal text-14px leading-28px max-w-[580px]">
            Embark on a thrilling adventure in Khao Sok National Park, where
            you'll explore the lush rainforest, trek through the jungle, and
            even take a ride on a traditional longtail boat.
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
