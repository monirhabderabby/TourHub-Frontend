"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

const PackageCard = ({
  bannerImage,
  price,
  name,
  duration,
  averageRatings,
  location,
  country,
  totalComments,
  index = 1,
  packageId,
}) => {
  return (
    <Link href={`/packages/${packageId}`}>
      <motion.section
        initial={{
          opacity: 0.7,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: index * 0.075, // Stagger effect based on index
            ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
          },
        }}
        className="w-full  md:w-[330px] lg:w-[300px]  h-auto rounded-12px border-[1px] border-[#E7E6E6] p-3 hover:border-[#877f7f75] cursor-pointer transition duration-300 group"
      >
        <motion.div
          initial={{ opacity: 0.6, filter: "blur(3px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.7, delay: 0.1 },
          }}
          className="relative w-full h-[198px] rounded-12px overflow-hidden"
        >
          <Image
            src={bannerImage}
            fill
            alt="img"
            className="rounded-12px hover:scale-105 transition duration-300"
          />
        </motion.div>

        <div className="pt-3 pl-2 space-y-2">
          <p className="text-[#717171] text-[11.98px] font-normal">
            {location}, {country}
          </p>
          <h2 className="text-[#05073C] font-medium text-16px leading-24px">
            {name}
          </h2>
          <p className="text-[#05073C] text-[12.49px] leading-24px font-normal">
            {averageRatings} {totalComments && <span>({totalComments})</span>}
          </p>
        </div>
        <div className="flex items-center justify-between mt-4 border-t-[1px] border-[#E7E6E6] pt-3 pb-2 group-hover:border-[#877f7f75] transition-all duration-300">
          <p className="text-[12.59px] font-normal leading-24px text-[#05073C]">
            {duration}
          </p>
          <p className="text-[14px] font-normal leading-24px text-[#05073C]">
            From <span className="font-semibold text-16px">${price}</span>
          </p>
        </div>
      </motion.section>
    </Link>
  );
};

export default memo(PackageCard);
