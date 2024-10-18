"use client";

import { useQuery } from "@tanstack/react-query";
import { CircleOff } from "lucide-react";
import Image from "next/image";
import downImg from "../../assets/testimonial/down.png";
import upImg from "../../assets/testimonial/up.png";
import { Skeleton } from "../ui/skeleton";
import { TextEffect } from "../ui/text-effect";

const Testimonials = () => {
    const {
        isLoading,
        data: feedbackData,
        isError,
        error,
    } = useQuery({
        queryKey: ["feedback"],
        queryFn: () =>
            fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/feedback?limit=8`
            ).then((res) => res.json()),
    });

    let content;

    if (isLoading) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 mt-[30px] lg:mt-[50px]">
                {[1, 2, 3, 4].map((item) => (
                    <div className="flex flex-col space-y-3" key={item}>
                        <Skeleton className="h-[120px] rounded-xl">
                            <div className="p-5 space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </Skeleton>
                    </div>
                ))}
            </div>
        );
    } else if (isError) {
        content = (
            <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[400px] font-inter">
                <CircleOff className="h-7 w-7 text-red-600" />
                <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
                    <TextEffect per="char" preset="fade">
                        {error.message}
                    </TextEffect>
                </p>
            </div>
        );
    } else if (feedbackData?.data?.length === 0) {
        content = (
            <div className="min-h-[400px] flex justify-center items-center">
                <p className="text-tourHub-gray text-14px font-inter">
                    <TextEffect per="char" preset="fade">
                        No testimonial data available at the moment.
                    </TextEffect>
                </p>
            </div>
        );
    } else if (feedbackData?.data?.length > 0) {
        content = (
            <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                {feedbackData?.data?.map((feedback) => (
                    <div
                        key={feedback.id}
                        className="space-y-5 cursor-pointer bg-slate-50 shadow border  text-[#3D3E48] duration-150   hover:text-[#FFFFFF] shadow-[#ffff] hover:bg-[#43B97F] p-4 rounded-xl group"
                    >
                        <div className="flex items-center gap-4">
                            <Image
                                src={feedback.image}
                                width={40}
                                height={40}
                                alt="testimonial man img"
                                className="bg-gray-100 rounded-full"
                            />
                            <h3 className="text-19px font-inter font-semibold text-tourHub-green-dark leading-28px group-hover:text-white transition-colors">
                                {feedback.name}
                            </h3>
                        </div>
                        <div>
                            <p className="font-normal font-inter text-14px ">
                                {feedback.feedback}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <div className="container font-inter">
                {/* testimonial header part*/}
                <div>
                    <h3 className="text-tourHub-green-dark text-16px font-bold leading-28px text-center">
                        Testimonial
                    </h3>
                    <h1 className="text-tourHub-title2 text-23px md:text-[29.41px] font-bold font-inter leading-[45px] text-center ">
                        What they say about us
                    </h1>
                </div>
                {/* testimonial card part */}
                <div className="md:pt-2 pt-7">
                    <Image src={upImg} alt="upImg testimonial" />
                </div>

                {content}

                <div className="flex items-center justify-end pt-6">
                    <Image src={downImg} alt="down img" />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
