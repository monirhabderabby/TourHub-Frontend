"use client";

import SingleNewsCard from "@/components/card/singleNewsCard";
import { Skeleton } from "@/components/ui/skeleton";
import { TextEffect } from "@/components/ui/text-effect";
import { useQuery } from "@tanstack/react-query";
import { CircleOff } from "lucide-react";

const AlsoLikeSection = ({ data, newsId }) => {
    // news data by category
    const {
        data: newsByCategory,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["news"],
        queryFn: () =>
            fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news?limit=4&newsCategory=${data?.data?.newsCategory}`
            ).then((res) => res.json()),
    });

    console.log(newsByCategory);

    let content;

    if (isLoading) {
        content = (
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mt-[30px] lg:mt-[50px] gap-10">
                {[1, 2, 3].map((item) => (
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
            <div>
                <h4 className="text-tourHub-title text-xl font-bold leading-7 mb-5">
                    You might also like
                </h4>
                <div className="min-h-[200px] flex flex-col text-14px text-tourHub-gray justify-center items-center">
                    <CircleOff />
                    <TextEffect per="char" preset="fade">
                        {error.message}
                    </TextEffect>
                </div>
            </div>
        );
    } else if (newsByCategory?.data?.length === 0) {
        return;
    } else if (newsByCategory?.data?.length > 0) {
        const data = newsByCategory?.data?.filter(
            (news) => news._id !== newsId
        );

        if (data.length === 0) {
            return;
        }

        content = (
            <div className="mt-5 md:mt-10">
                <h4 className="text-tourHub-title text-xl font-bold leading-7 mb-5">
                    You might also like
                </h4>
                <div className="grid grid-cols-3 xl:grid-cols-4">
                    <div className="col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {!isPending &&
                                newsByCategory?.data.map((news) => (
                                    <SingleNewsCard
                                        key={news?._id}
                                        news={news}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return content;
};

export default AlsoLikeSection;
