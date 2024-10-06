import { Loader2 } from "lucide-react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Loader2 className="h-5 w-5 animate-spin text-tourHub-green-dark" />
    </div>
  );
}
