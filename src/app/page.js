// Components

import Banner from "@/components/homePage/banner";
import PopulerTours from "@/components/homePage/populer_tours";
import Testimonilas from "@/components/homePage/testimonilas";
import TopDestination from "@/components/homePage/top_destination";
import TravelersPoint from "@/components/homePage/travelers_point";

export default function Home() {
  return (
    <main className="space-y-[200px]">
      <Banner />
      <TravelersPoint />
      <PopulerTours />
      <TopDestination />
      <Testimonilas />
    </main>
  );
}
