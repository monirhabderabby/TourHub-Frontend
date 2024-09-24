import PackageCard from "@/components/common/package_card";
import { demoPackageData } from "@/components/homePage/populer_tours";
import PackageHeader from "./_components/header";
import PackageBooking from "./_components/package_booking";
import PackageDetails from "./_components/package_details";
import PackageSectionTitle from "./_components/package_section_title";

const Package = ({ params }) => {
  // here the dynamic id
  const packageId = params.id;

  return (
    <div className="container mt-[80px] pb-[130px]">
      <PackageHeader />
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-3 lg:gap-12 relative">
        <div className="lg:flex-1">
          <PackageDetails />
        </div>
        <div>
          <PackageBooking />
        </div>
      </div>
      {/* suggest packages */}
      <div className="mt-[100px]">
        <PackageSectionTitle title="You might also like..." />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10  mt-[30px] lg:mt-[50px]">
          {demoPackageData.slice(0, 4).map((item) => (
            <PackageCard
              key={item.id}
              bannerImage={item.bannerImage}
              price={item.price}
              name={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
