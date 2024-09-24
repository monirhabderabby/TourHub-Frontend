// Components

import Banner from "@/components/homePage/banner";
import PopulerTours from "@/components/homePage/populer_tours";
import Testimonilas from "@/components/homePage/testimonilas";
import TopDestination from "@/components/homePage/top_destination";
import TravelersPoint from "@/components/homePage/travelers_point";
import TrendingDestinations from "@/components/homePage/trending_destinations";
import WhyChooseTour from "@/components/homePage/whyChoose_tour";

export default function Home() {
  return (
    <main className="space-y-[200px]">
      <Banner />
      <WhyChooseTour/>
      <TrendingDestinations/>
      <TravelersPoint />
      <PopulerTours />
      <TopDestination />
      <Testimonilas />
    </main>
  );
}
