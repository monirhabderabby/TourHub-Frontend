import dynamic from "next/dynamic";

const GalleryContainer = dynamic(
  () => import("./_components/gallery-container"),
  {
    ssr: false,
  }
);

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
