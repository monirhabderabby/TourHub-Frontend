"use client";

// Packages
import { motion } from "framer-motion";
import Image from "next/image";

// Components
import { cn } from "@/lib/utils";
import Link from "next/link";

const BannerImages = ({ images = [], packageId }) => {
  return (
    <>
      <div className="grid grid-cols-12 auto-rows-[150px] md:auto-rows-[220px]  overflow-hidden gap-2 md:gap-3 lg:gap-4 grid-flow-row-dense ">
        {images.slice(0, 4).map(async (src, index) => {
          return (
            <motion.div
              key={src}
              className={cn(
                "relative h-full",
                index === 0 &&
                  "col-span-full md:col-span-6 lg:col-span-8 row-span-1 md:row-span-2",
                index === 1 &&
                  "col-span-6 md:col-span-6 lg:col-span-4 row-span-2 md:row-span-1",
                index === 2 && "col-span-6 md:col-span-3 lg:col-span-2",
                index === 3 &&
                  "col-span-6 md:col-span-3 lg:col-span-2 row-auto-span-2 "
              )}
              initial={{
                opacity: 1,
                filter: "blur(5px)",
                transitionDuration: 0.5,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.5,
                  delay: index * 0.2,
                },
              }}
            >
              <Image
                src={src}
                alt="populer location"
                fill
                className="object-cover rounded-5px"
                priority
                fetchPriority="high"
              />
              <Link
                className={cn(
                  "bg-tourHub-title2 text-white font-inter font-medium text-[13.65px] leading-24px px-3 py-1 rounded-[200px] absolute bottom-3 right-4 z-50",
                  (index === 1 || index === 2 || index === 0) && "hidden"
                )}
                href={`/packages/${packageId}/gallery`}
              >
                See all photos
              </Link>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default BannerImages;
