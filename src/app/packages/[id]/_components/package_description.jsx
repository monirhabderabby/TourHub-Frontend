import PackageSectionTitle from "./package_section_title";

const PackageDescription = ({ description }) => {
  return (
    <div className="mt-12">
      <PackageSectionTitle title="Tour Overview" />
      <p className="text-tourHub-title2 font-normal font-inter text-14px leading-28px max-w-[844px]">
        {description}
      </p>
    </div>
  );
};

export default PackageDescription;
