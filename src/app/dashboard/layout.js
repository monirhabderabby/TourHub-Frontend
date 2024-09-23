import DashboardContent from "./(components)/dashboardContent";
import DashboardSideBar from "./(components)/dashboardSideBar";

export default async function DashboardLayout({ children }) {
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
