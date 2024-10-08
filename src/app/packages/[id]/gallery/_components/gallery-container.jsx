"use client";

import SkeletonWrapper from "@/components/common/SkeletonWrapper";
import { TextEffect } from "@/components/ui/text-effect";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const GalleryContainer = ({ packageId }) => {
  const {
    data: response,
    isLoading,
    isFetching,
    isRefetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["gallery", packageId],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package/${packageId}?fields=bannerImage,name`
      ).then((res) => res.json()),
  });

  const loading = isLoading || isFetching || isRefetching;

  console.log(response);

  let content;

  if (loading) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <SkeletonWrapper isLoading={loading} key={item}>
            <div className="w-full md:w-[300px] h-[300px] rounded-12px"></div>
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <div className="h-[80vh] md:h-[calc(100vh-50vh)] w-full flex justify-center gap-x-2 items-center">
        <div className="flex flex-col justify-center items-center">
          <AlertCircle className="h-6 w-6 text-red-500" />
          <p className="font-inter text-16px text-red-500">
            <TextEffect per="char" preset="fade">
              {error.message}
            </TextEffect>
          </p>
        </div>
      </div>
    );
  } else if (!response?.success) {
    const message =
      response?.message === "Data not found"
        ? "No Images found at the moment"
        : "Something went wrong!";
    content = (
      <div className="h-[400px] w-full flex justify-center items-center">
        <TextEffect per="word" preset="blur">
          {message}
        </TextEffect>
      </div>
    );
  } else if (response?.data?.bannerImage?.length > 0) {
    const { bannerImage } = response?.data || {};
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {bannerImage.map((src, index) => (
          <GalleryImage key={index} index={index} src={src} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <GalleryHeader name={response?.data?.name || ""} />
      <div className="container mt-[50px]">{content}</div>
    </div>
  );
};

export default GalleryContainer;

const GalleryHeader = React.memo(({ name }) => {
  return (
    <div className="bg-gray-100 h-[200px] mt-[60px]">
      <div className="container flex gap-y-4 flex-col h-full justify-center items-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className="text-tourHub-green-dark text-23px max-w-[650px] text-center"
        >
          {name}
        </motion.h3>
        <p className="border-r-[1px] text-tourHub-title2 font-inter border-l-[1px] border-[#E7E6E6] text-23px px-4">
          Gallery
        </p>
      </div>
    </div>
  );
});

GalleryHeader.displayName = "GalleryHeader";

const GalleryImage = React.memo(({ index, src }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.075, // Stagger effect based on index
          ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
        },
      }}
      className="relative w-full    rounded-12px h-[300px] overflow-hidden"
    >
      <Image
        src={src}
        alt="image"
        fill
        sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
        className="rounded-12px hover:scale-110 transition-transform duration-300 bg-gray-100"
      />
    </motion.div>
  );
});

GalleryImage.displayName = "GalleryImage";
