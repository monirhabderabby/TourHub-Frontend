import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const NewsCard = ({news}) => {
  return (
    <Card className="w-[300px] pt-5 cursor-pointer md:mt-10 mt-20">
    <CardContent className="mt-1">
    <div>
    <Image
        src={
         news.images
        }
        width={300}
        height={100}
        alt="news"
        className="rounded-lg"
      />
    </div>
      <div className="">
        <h2 className="font-semibold">
          {(news.title).slice(0,50)}
        </h2>
        <p className="text-sm text-gray-500">{news.newsCategory}</p>
        <p className="text-sm text-gray-500">{(news.createdAt).slice(0,10)}</p>
      </div>
    </CardContent>
  </Card>
  )
}

export default NewsCard