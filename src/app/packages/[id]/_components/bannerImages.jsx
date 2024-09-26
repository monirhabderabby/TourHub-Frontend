"use client";

// Packages
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Components
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { cn } from "@/lib/utils";

const BannerImages = ({ images = [] }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-12 auto-rows-[150px] md:auto-rows-[220px]  overflow-hidden gap-2 md:gap-3 lg:gap-4 grid-flow-row-dense">
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
              <button
                className={cn(
                  "bg-tourHub-title2 text-white font-inter font-medium text-[13.65px] leading-24px px-3 py-1 rounded-[200px] absolute bottom-3 right-4 z-50",
                  (index === 1 || index === 2 || index === 0) && "hidden"
                )}
                onClick={() => setOpen((prev) => !prev)}
              >
                See all photos
              </button>
            </motion.div>
          );
        })}
      </div>
      <ImagesModal setOpen={setOpen} open={open} images={images} />
    </>
  );
};

export default BannerImages;

// Modal for display more images
const ImagesModal = ({ open, setOpen, images }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <ModalTrigger></ModalTrigger>
      <ModalBody>
        <ModalContent>
          <ParallaxScroll images={images} />
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};
