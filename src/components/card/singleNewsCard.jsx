import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";

const SingleNewsCard = ({ news }) => {
    return (
        <div className="shadow-lg rounded-xl">
            <div className="flex flex-col space-y-3">
                {/* Container for maintaining aspect ratio and filling image */}
                <div className="relative rounded-t-xl overflow-hidden h-[200px] w-full">
                    <Image
                        src={news.images}
                        alt="news"
                        layout="fill" // Ensures the image fills the container
                        className="hover:scale-105 transition-all duration-500 object-cover" // Crops the image to cover the full space
                    />
                </div>
                <div className="py-2 px-5 space-y-2">
                    <Badge variant={"secondary"} className={"mb-2"}>
                        {news.newsCategory}
                    </Badge>
                    <Link href={`/news/${news._id}`}>
                        <h3 className="leading-[26px] text-tourHub-title2 hover:opacity-75 duration-300 line-clamp-2">
                            {news.title}
                        </h3>
                    </Link>
                    <p className="pt-2 text-[12px] text-tourHub-gray mb-2">
                        Published:{" "}
                        {format(new Date(news.createdAt), "dd MMMM yyyy")}
                    </p>

                    <div className="flex items-center gap-x-2 pb-2">
                        <Avatar className="w-7 h-7">
                            <AvatarImage src={news?.user?.image} />
                            <AvatarFallback>TH</AvatarFallback>
                        </Avatar>
                        <p className="text-[12px] text-tourHub-title2 font-medium">
                            {news?.user?.name}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleNewsCard;
