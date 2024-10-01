"use client";

import { useQuery } from "@tanstack/react-query";
import { CircleOff } from "lucide-react";
import SingleNewsCard from "../card/singleNewsCard";
import { Skeleton } from "../ui/skeleton";
import { TextEffect } from "../ui/text-effect";

const TopNews = () => {
    const {
        isLoading,
        data: topNewsData,
        isError,
        error,
    } = useQuery({
        queryKey: ["news"],
        queryFn: () =>
            fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news?limit=8`
            ).then((res) => res.json()),
    });

    const topNews = topNewsData?.data || [];

    let content;

    if (isLoading) {
        content = (
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-[30px] lg:mt-[50px] gap-x-14 gap-y-10">
                {[1, 2, 3, 4].map((item) => (
                    <div className="flex flex-col space-y-3" key={item}>
                        <Skeleton className="h-[180px] rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
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
    } else if (topNews.length === 0) {
        content = (
            <div className="min-h-[400px] flex justify-center items-center">
                <p className="text-tourHub-gray text-14px font-inter">
                    <TextEffect per="char" preset="fade">
                        No news available at the moment.
                    </TextEffect>
                </p>
            </div>
        );
    } else if (topNews.length > 0) {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 mt-[30px] lg:mt-[50px]">
                {topNews.map((news) => (
                    <SingleNewsCard key={news._id} news={news} />
                ))}
            </div>
        );
    }

    return (
        <div className="container">
            <div>
                <h3 className="text-tourHub-green-dark text-16px font-bold leading-28px text-center mb-2 md:mb-1">
                    Explore, Dream, Discover
                </h3>
                <h1 className="text-tourHub-title2 text-23px md:text-[29.41px] font-bold font-inter md:leading-[45px] text-center ">
                    Read our top blogs and travel updates
                </h1>
            </div>

            <div>{content}</div>
        </div>
    );
};

export default TopNews;
