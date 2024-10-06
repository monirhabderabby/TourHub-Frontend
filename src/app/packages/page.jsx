import PackageFilter from "./_components/package_filter";
import PackagesData from "./_components/packages_data";

const Packages = () => {
  return (
    <section className="container my-[80px] relative ">
      <h1 className="text-[27px] lg:text-[40px] font-inter font-bold text-tourHub-title2 leading-[60px]">
        Explore all packages
      </h1>

      <div className="flex  items-start justify-start mt-3 md:mt-6  w-full gap-x-6">
        <div className=" hidden lg:block w-[300px]  rounded-12px  min-h-[500px] sticky top-[80px]">
          <PackageFilter />
        </div>
        <div className="flex-1">
          <PackagesData />
        </div>
      </div>
    </section>
  );
};

export default Packages;
