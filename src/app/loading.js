export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="min-h-[80vh] w-full flex justify-center items-center">
      <div className="flex flex-col gap-y-1">
        <span className="loader"></span>
        <p className="text-tourHub-gray">Please wait...</p>
      </div>
    </div>
  );
}
