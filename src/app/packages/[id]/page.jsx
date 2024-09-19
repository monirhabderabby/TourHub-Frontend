import PackageHeader from "./_components/header";
import PackageBooking from "./_components/package_booking";
import PackageDetails from "./_components/package_details";

const Package = ({ params }) => {
  // here the dynamic id
  const packageId = params.id;

  return (
    <div className="container mt-[80px] pb-[150px]">
      <PackageHeader />
      <div className="flex flex-col lg:flex-row justify-between gap-8 relative">
        <div className="md:flex-1">
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
