import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const NewsCard = ({ news }) => {
  return (
    <Card className="w-[300px] h-auto pt-5 cursor-pointer ">
      <CardContent className="mt-1">
        <motion.div className="relative w-full h-[200px] rounded-12px">
          <Image
            src={news.images}
            fill
            alt="news"
            className="bg-cover rounded-12px"
          />
        </motion.div>
        <div className="font-inter mt-3 space-y-2">
          <h2 className="text-16px font-medium ">{news.title.slice(0, 50)}</h2>
          <p className="text-14px font-normal text-gray-500">
            {news.newsCategory}
          </p>
          <p className="text-[12px] font-normal text-gray-500">
            {news.createdAt.slice(0, 10)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
