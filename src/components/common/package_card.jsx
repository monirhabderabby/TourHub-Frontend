"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PackageCard = ({ bannerImage, price, name }) => {
  return (
    <section className="w-full md:w-[330px] lg:w-[300px] mx-auto h-auto rounded-12px border-[1px] border-[#E7E6E6] p-3 hover:border-[#877f7f75] cursor-pointer transition duration-300 group">
      <motion.div
        initial={{ opacity: 0.6, filter: "blur(3px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 0.7, delay: 0.1 },
        }}
        className="relative w-full h-[198px] rounded-12px"
      >
        <Image src={bannerImage} fill alt="img" className="rounded-12px" />
      </motion.div>

      <div className="pt-3 pl-2 space-y-2">
        <p className="text-[#717171] text-[11.98px] font-normal">
          New York, USA
        </p>
        <h2 className="text-[#05073C] font-medium text-16px leading-24px">
          {name}
        </h2>
        <p className="text-[#05073C] text-[12.49px] leading-24px font-normal">
          4.8(243)
        </p>
      </div>
      <div className="flex items-center justify-between mt-4 border-t-[1px] border-[#E7E6E6] pt-3 pb-2 group-hover:border-[#877f7f75] transition-all duration-300">
        <p className="text-[12.59px] font-normal leading-24px text-[#05073C]">
          4 days
        </p>
        <p className="text-[14px] font-normal leading-24px text-[#05073C]">
          From <span className="font-semibold text-16px">${price}</span>
        </p>
      </div>
    </section>
  );
};

export default PackageCard;
