import dynamic from "next/dynamic";
// Components
import Overview from "./(components)/overview_stats";
const NewUserCompare = dynamic(
  () => import("./(components)/(comparison)/new-user-compare-chart"),
  {
    ssr: false,
  }
);
const TotalSellCompare = dynamic(
  () => import("./(components)/(comparison)/total-sell-compare"),
  {
    ssr: false,
  }
);

const DashboardPage = () => {
  return (
    <div>
      <Overview />
      <div className="w-full grid grid-cols-2 gap-6 mt-4">
        <NewUserCompare />
        <TotalSellCompare />
      </div>
    </div>
  );
};

export default DashboardPage;
