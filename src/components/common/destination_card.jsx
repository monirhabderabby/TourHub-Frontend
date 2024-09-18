"use client";
// Packages
import { motion } from "framer-motion";
import Image from "next/image";
import { BiSolidNavigation } from "react-icons/bi";

const DestinationCard = async ({ bannerImage, name, price, index }) => {
  return (
    <div
      className="mx-auto w-full md:w-[380px] h-auto rounded-10px bg-white shadow-[1px_2px_12px_1px_#00000025] hover:shadow-[1px_2px_12px_1px_#00000040] p-3 cursor-pointer transition-all duration-300"
      onClick={() => {}}
    >
      <motion.div
        initial={{ opacity: 0.6, filter: "blur(3px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 0.7, delay: index * 0.1 },
        }}
        className="relative w-full h-[227px] rounded-10px"
      >
        <Image src={bannerImage} fill alt="img" className="rounded-10px" />
      </motion.div>

      <div className="mt-6 space-y-4">
        <h2 className="text-tourHub-title text-19px leading-34px font-bold">
          {name}
        </h2>

        <div className="flex items-center justify-between">
          <p className="flex items-center gap-x-2 text-tourHub-green-dark text-[16px] leading-28px font-bold">
            $ {price}
          </p>

          <p className="flex items-center gap-2">
            <BiSolidNavigation className="h-5 w-5 text-tourHub-green-dark" />{" "}
            <span className="text-tourHub-title text-[14px] leading-[25.2px] font-normal">
              14 days left
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
