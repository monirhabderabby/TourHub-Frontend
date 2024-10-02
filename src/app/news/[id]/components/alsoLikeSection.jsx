"use client";

import SingleNewsCard from "@/components/card/singleNewsCard";
import { useQuery } from "@tanstack/react-query";

const AlsoLikeSection = ({ data }) => {
    // news data by category
    const { data: newsByCategory, isPending } = useQuery({
        queryKey: ["news"],
        queryFn: () =>
            fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news?limit=3&newsCategory=${data?.data?.newsCategory}`
            ).then((res) => res.json()),
    });
    return (
        <div className="mt-5 md:mt-10">
            <h4 className="text-tourHub-title text-xl font-bold leading-7 mb-5">
                You might also like
            </h4>
            <div className="grid grid-cols-3 xl:grid-cols-4">
                <div className="col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {!isPending &&
                            newsByCategory?.data.map((news) => (
                                <SingleNewsCard key={news?._id} news={news} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlsoLikeSection;
