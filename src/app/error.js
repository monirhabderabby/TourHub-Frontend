"use client"; // Error boundaries must be Client Components

import { TextEffect } from "@/components/ui/text-effect";
import { TriangleAlert } from "lucide-react";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);

    // Scroll down by 20vh when an error occurs
    window.scrollBy({
      top: window.innerHeight * 0.1, // 20% of the viewport height
      behavior: "smooth", // smooth scroll for better UX
    });
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center font-inter">
      <div className="flex items-center gap-x-2 text-rose-600">
        <TriangleAlert className=" h-4 w-4" /> <span>TourHub</span>
      </div>
      <h2 className="mt-4 text-tourHub-title2 text-27px text-center max-w-[400px] ">
        <TextEffect per="char" preset="blur">
          {error?.message}
        </TextEffect>
      </h2>
      <button
        className="mt-8 px-4 py-1 border-[1px] border-tourHub-green-dark rounded-8px font-medium text-tourHub-green-dark hover:bg-tourHub-green-dark hover:text-white transition duration-300"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
