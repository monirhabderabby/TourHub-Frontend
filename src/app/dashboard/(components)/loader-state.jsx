import { Loader2 } from "lucide-react";

const LoaderState = () => {
  return (
    <div className="flex justify-center items-center h-[400px]">
      <Loader2 className="h-5 w-5 animate-spin text-tourHub-green-dark/80" />
    </div>
  );
};

export default LoaderState;
