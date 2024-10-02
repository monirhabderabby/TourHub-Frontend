// Packages
import dynamic from "next/dynamic";

// Components
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardSideBar from "./(components)/dashboardSideBar";
const DashboardContent = dynamic(
  () => import("./(components)/dashboardContent"),
  {
    ssr: false,
  }
);

export default async function DashboardLayout({ children, params }) {
  const user = await currentUser();

  // If the user is not authenticated, redirect them to the sign-in page
  // The `redirect_url` parameter is set to the current page's URL so that
  // after a successful login, the user can be returned to their original destination.
  if (!user) {
    redirect(
      `/sign-in?redirect_url=${
        process.env.NEXT_PUBLIC_APP_URL
      }/${encodeURIComponent(params.slug)}`
    );
  }
  return (
    <div className="container grid min-h-screen grid-cols-6 mt-20 md:mt-24 lg:mt-[108px]">
      <div className="hidden md:block md:col-span-1">
        <DashboardSideBar />
      </div>
      <div className="col-span-6 md:col-span-5 md:px-4 lg:px-6">
        <DashboardContent>{children}</DashboardContent>
      </div>
    </div>
  );
}
