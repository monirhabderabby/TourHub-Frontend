"use client";
// Components
import Image from "next/image";
import Link from "next/link";

// Images
import bg from "@/assets/bg.png";
import RichTextViewer from "@/components/richTextEditor/richTextViewer";
import { TextEffect } from "@/components/ui/text-effect";
import { newsCategory } from "@/lib/newsCategory";
import { useQuery } from "@tanstack/react-query";
import { CircleOff, Loader2Icon } from "lucide-react";
import AlsoLikeSection from "./components/alsoLikeSection";

const newsDetailspage = ({ params }) => {
    const newsId = params.id;
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["news", newsId],
        queryFn: () =>
            fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news/${newsId}`
            ).then((res) => res.json()),
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[calc(100vh-280px)]">
                <Loader2Icon className="h-7 w-7 animate-spin text-tourHub-green-dark" />
            </div>
        );
    } else if (isError) {
        return (
            <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
                <CircleOff className="h-7 w-7 text-red-600" />
                <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
                    <TextEffect per="char" preset="fade">
                        {error.message}
                    </TextEffect>
                </p>
            </div>
        );
    }

    return (
        <div>
            {/* page banner */}
            <div
                className="mt-[60px] h-[200px] md:h-[400px] flex justify-center items-center bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${bg.src})` }}
            >
                <h4 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold">
                    TourHub News
                </h4>
            </div>

            {/* page content */}
            <div className="w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3 mx-auto border-[1px] border-[#E7E6E6] px-5 py-5 md:px-10 md:py-8 lg:mt-10 rounded-xl">
                <div className="grid grid-cols-4 gap-10">
                    <div className="col-span-4 md:col-span-3">
                        <div className="mt-3 relative overflow-hidden h-[200px] md:h-[500px] w-full">
                            <Image
                                src={data?.data?.images}
                                alt="blog image"
                                layout="fill"
                                className="object-cover rounded-xl"
                            />
                            <p className="text-sm md:text-base absolute left-0 bottom-0 bg-white italic font-light text-tourHub-title px-5 py-3">
                                {data?.data?.newsCategory}
                            </p>
                        </div>

                        <div className="mt-5 md:mt-10">
                            <h2 className="text-19px md:text-27px md:leading-10 mb-5 text-tourHub-title font-bold">
                                {data?.data.title}
                            </h2>

                            <RichTextViewer content={data?.data?.description} />
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <div>
                            <h4 className="text-tourHub-title text-xl font-bold leading-7 mb-5">
                                About author
                            </h4>
                            <Image
                                src={data?.data?.user?.image}
                                alt="author image"
                                width={140}
                                height={100}
                                className=" h-[140px] object-cover rounded-lg"
                            />
                            <p className="my-5 text-tourHub-title">
                                {data?.data?.user?.name}
                            </p>
                        </div>
                        <div className="my-10">
                            <h4 className="text-tourHub-title text-19px font-bold leading-7 mb-5">
                                All Categories Here
                            </h4>

                            <div className="flex flex-col gap-3">
                                {newsCategory.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/news?category=${category.categoryName}`}
                                        className="text-tourHub-green-light underline text-14px text-base font-normal hover:opacity-80 transition duration-300"
                                    >
                                        {category.categoryName}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Suggestions */}
                <AlsoLikeSection data={data} />
            </div>
        </div>
    );
};

export default newsDetailspage;
