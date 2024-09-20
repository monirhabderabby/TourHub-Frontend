import PackageHeader from "./_components/header";
import PackageBooking from "./_components/package_booking";
import PackageDetails from "./_components/package_details";

const Package = ({ params }) => {
  // here the dynamic id
  const packageId = params.id;

  return (
    <div className="container mt-[80px] pb-[150px]">
      <PackageHeader />
      <div className="flex justify-between gap-3 lg:gap-8 relative">
        <div className="lg:flex-1">
          <PackageDetails />
        </div>
        <div>
          <PackageBooking />
        </div>
      </div>
    </div>
  );
};

export default Package;
