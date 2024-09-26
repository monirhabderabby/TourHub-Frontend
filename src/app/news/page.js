"use client";

// Packages
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion
import { Loader2Icon } from "lucide-react";

// Components
import NewsCard from "@/components/card/newsCard";
import AllPageBanner from "@/components/common/AllPageBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { newsCategory } from "@/lib/newsCategory";
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
  let [activeTab, setActiveTab] = useState(newsCategory[0].categoryName);

  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news`).then((res) => res.json()),
  });

  useEffect(() => {
    // Scroll to the top of the page with smooth animation on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
            TourHub Articles
          </h3>
          <p className="text-tourHub-gray text-14px font-normal leading-28px text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
          </p>
        </div>
      </div>
      <div>
        {/* title news */}

        <Tabs
          defaultValue="Adventure Travel"
          className="my-5 text-white container "
        >
          <div className="space-x-2 md:space-x-8 grid grid-cols-2 md:grid-cols-6 items-center justify-center mx-auto gap-y-2">
            {newsCategory.map((tab) => (
              <button
                key={tab.categoryName}
                onClick={() => setActiveTab(tab.categoryName)}
                className={`${activeTab === tab.categoryName? " text-white bg-tourHub-green-light" : "text-tourHub-green-light bg-gray-100"
                  } relative rounded-full px-3 py-1.5 text-sm font-medium   transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab == tab.categoryName && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 -z-20 "
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}

                {tab.categoryName}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[58px] w-full bg-transparent mt-10"
          >
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
                  }
                  else if (activeTab == "Art and culture") {
                    return n.newsCategory == "Art and culture";
                  }
                  else if (activeTab == "Hill Travel") {
                    return n.newsCategory == "Hill Travel";
                  }
                })
                .map((news) => (
                  <NewsCard key={news._id} news={news} />
                ))}
            </AnimatePresence>
          </motion.div>
          
        </Tabs>


    
      </div>
    </div>
  );
};

export default NewsPage;
