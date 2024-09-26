import PackageDetailsContainer from "./_components/package-details-container";

const Package = ({ params }) => {
  // here the dynamic id
  const packageId = params.id;

  return <PackageDetailsContainer packageId={packageId} />;
};

export default Package;
