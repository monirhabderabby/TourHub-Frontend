import TopDestination from "@/components/homePage/top_destination";
import TravelersPoint from "@/components/homePage/travelers_point";

export default function Home() {
  return (
    <main className="space-y-[200px] my-[100px]">
      <TravelersPoint />
      <TopDestination />
    </main>
  );
}
