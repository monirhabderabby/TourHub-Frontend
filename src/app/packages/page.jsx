import PackagesData from "./_components/packages_data";

const Packages = () => {
  return (
    <section className="container my-[100px] relative ">
      <h1 className="text-[40px] font-inter font-bold text-tourHub-title2 leading-[60px]">
        Explore all packages
      </h1>

      <div className="flex items-start justify-start mt-6 gap-x-6 w-full">
        <div className="w-[300px]  rounded-12px bg-orange-600 min-h-[500px] sticky top-[80px]">
          Filter will be sticky on the top from 100px
        </div>
        <div className="flex-1">
          <PackagesData />
        </div>
      </div>
    </section>
  );
};

export default Packages;
