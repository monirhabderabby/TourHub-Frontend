import GalleryContainer from "./_components/gallery-container";

const Page = ({ params }) => {
  // here the dynamic id
  const packageId = params.id;
  return (
    <div>
      <GalleryContainer packageId={packageId} />
    </div>
  );
};

export default Page;
