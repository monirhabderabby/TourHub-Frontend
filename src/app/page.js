// Components

import Banner from "@/components/homePage/banner";
import Testimonilas from "@/components/homePage/testimonilas";
import TopDestination from "@/components/homePage/top_destination";
import TravelersPoint from "@/components/homePage/travelers_point";

export default function Home() {
  return (
    <main className="space-y-[200px]">
      <Banner />
      <TravelersPoint />
      <TopDestination />
      <Testimonilas />
    </main>
  );
}
