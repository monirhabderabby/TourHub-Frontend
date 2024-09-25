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

const NewsPage = () => {
  let [activeTab, setActiveTab] = useState(newsCategory[0].id);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news`).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    // Scroll to the top of the page with smooth animation on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-280px)]">
        <Loader2Icon className="h-7 w-7 animate-spin text-tourHub-green-dark" />
      </div>
    );
  if (isError) return <div>Error</div>;

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
          <TabsList className="space-x-2 md:space-x-16 grid grid-cols-2 md:grid-cols-6 items-center justify-center mx-auto gap-y-2">
            {newsCategory.map((tab) => (
              <TabsTrigger
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "" : "hover:text-white/60"
                } relative rounded-full px-3 py-1.5 text-sm font-medium text-white  transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 -z-20 bg-tourHub-green-light text-white"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {newsCategory.map((category) => (
            <TabsContent key={category.name} value={category.name}>
              <motion.div
                key={category.name}
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10"
              >
                <AnimatePresence>
                  {data?.data
                    .filter((n) => n.newsCategory == category.name)
                    .map((news) => (
                      <NewsCard key={news._id} news={news} />
                    ))}
                </AnimatePresence>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default NewsPage;
