"use client";

// Packages
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion

// Components
import SingleNewsCard from "@/components/card/singleNewsCard";
import AllPageBanner from "@/components/common/AllPageBanner";
import { Tabs } from "@/components/ui/tabs";
import { TextEffect } from "@/components/ui/text-effect";
import { newsCategory } from "@/lib/newsCategory";
import { CircleAlert, CircleOff, Loader2Icon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// Animation variants
const tabContentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: { opacity: 0 },
};
//
const NewsPage = () => {
    const [activeTab, setActiveTab] = useState(newsCategory[0].categoryName);

    const searchParams = useSearchParams();

    const category = searchParams.get("category");

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["news"],
        queryFn: () =>
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news`).then(
                (res) => res.json()
            ),
    });

    let content;

    if (isLoading) {
        content = (
            <div className="flex justify-center items-center h-[calc(100vh-280px)]">
                <Loader2Icon className="h-7 w-7 animate-spin text-tourHub-green-dark" />
            </div>
        );
    } else if (isError) {
        content = (
            <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
                <CircleOff className="h-7 w-7 text-red-600" />
                <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
                    <TextEffect per="char" preset="fade">
                        {error.message}
                    </TextEffect>
                </p>
            </div>
        );
    } else if (data?.data?.length === 0) {
        content = (
            <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
                <CircleAlert className="h-5 w-5" />
                <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
                    <TextEffect per="char" preset="fade">
                        No news available for this news category.
                    </TextEffect>
                </p>
            </div>
        );
    } else if (data?.data?.length > 0) {
        content = (
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 w-full bg-transparent mt-10">
                <AnimatePresence>
                    {data?.data
                        .filter((n) => {
                            if (activeTab == "Adventure Travel") {
                                return n.newsCategory == "Adventure Travel";
                            } else if (activeTab == "Beach") {
                                return n.newsCategory == "Beach";
                            } else if (activeTab == "Explore World") {
                                return n.newsCategory == "Explore World";
                            } else if (activeTab == "Family Holidays") {
                                return n.newsCategory == "Family Holidays";
                            } else if (activeTab == "Art and culture") {
                                return n.newsCategory == "Art and culture";
                            } else if (activeTab == "Hill Travel") {
                                return n.newsCategory == "Hill Travel";
                            }
                        })
                        .map((news) => (
                            <SingleNewsCard key={news._id} news={news} />
                        ))}
                </AnimatePresence>
            </div>
        );
    }

    useEffect(() => {
        // Only change the activeTab if the category from URL matches any category in newsCategory
        if (
            category &&
            newsCategory.some((tab) => tab.categoryName === category)
        ) {
            setActiveTab(category);
        }

        // Scroll to top when the category changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [category]);

    return (
        <div className="mt-8 font-inter">
            {/* News banner section */}
            <AllPageBanner
                title="Our News"
                img={
                    "https://utfs.io/f/cagsdt8RzebYqTZw1r0hGyIJApn8CWOxUd0cNQbSPtw35XLV"
                }
            />
            {/*  news title or filler and card section */}
            <div className="container mt-20">
                {/* title news */}
                <div className="flex text-tourHub-title flex-col items-center justify-center space-y-3">
                    <h3 className="text-tourHub-title2 text-23px md:text-[29.41px] font-bold font-inter leading-[45px] text-center ">
                        TourHub Explorer
                    </h3>
                    <p className="text-tourHub-gray text-14px font-normal leading-28px text-center">
                        Discover expert advice, travel stories, and news to fuel
                        your wanderlust
                    </p>
                </div>
            </div>
            <div>
                {/* title news */}
                <Tabs
                    defaultValue="Adventure Travel"
                    className="my-5 text-white container "
                >
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 lg:gap-4">
                        {newsCategory.map((tab) => (
                            <button
                                key={tab.categoryName}
                                onClick={() => setActiveTab(tab.categoryName)}
                                className={`${
                                    activeTab === tab.categoryName
                                        ? " text-white bg-tourHub-green-light"
                                        : "text-tourHub-green-light bg-gray-100"
                                } relative rounded-full  py-1.5 text-sm font-medium transition focus-visible:outline-2`}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                {activeTab === tab.categoryName && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 -z-20 "
                                        style={{ borderRadius: 9999 }}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.2,
                                            duration: 0.3,
                                        }}
                                    />
                                )}

                                {tab.categoryName}
                            </button>
                        ))}
                    </div>

                    {content}
                </Tabs>
            </div>
        </div>
    );
};

export default NewsPage;
