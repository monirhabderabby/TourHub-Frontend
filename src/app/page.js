// Components

import Banner from "@/components/homePage/banner";
import PopulerTours from "@/components/homePage/populer_tours";
import Testimonilas from "@/components/homePage/testimonilas";
import TopNews from "@/components/homePage/top_news";
import TravelersPoint from "@/components/homePage/travelers_point";
import TrendingDestinations from "@/components/homePage/trending_destinations";
import WhyChooseTour from "@/components/homePage/whyChoose_tour";

export default function Home() {
    return (
        <main className="space-y-[80px] md:space-y-[100px] lg:space-y-[200px]">
            <Banner />
            <WhyChooseTour />
            <TrendingDestinations />
            <TravelersPoint />
            <PopulerTours />
            <TopNews />
            <Testimonilas />
        </main>
    );
}
