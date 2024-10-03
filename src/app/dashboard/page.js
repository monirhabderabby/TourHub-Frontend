import dynamic from "next/dynamic";
// Components
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
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

const DashboardPage = async () => {
  const { publicMetadata } = await currentUser();
  const admin = publicMetadata?.role === "admin";

  if (!admin) {
    redirect("/dashboard/profile");
  }

  return (
    <div>
      <Overview />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <NewUserCompare />
        <TotalSellCompare />
      </div>
    </div>
  );
};

export default DashboardPage;
