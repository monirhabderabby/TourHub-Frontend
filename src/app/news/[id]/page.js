"use client";
// Components
import Image from "next/image";
import Link from "next/link";

// Images
import bg from "@/assets/bg.png";
import blogAuthor from "@/assets/blog-author.png";
import { useQuery } from "@tanstack/react-query";
import { newsCategory } from "@/lib/newsCategory";


const newsDetailspage = ({ params }) => {

    const newsId = params.id
    const { data } = useQuery({
        queryKey: ["news", newsId],
        queryFn: () =>
            fetch(`http://localhost:5000/api/v1/news/${newsId}`).then((res) =>
              res.json()
            ),
    });

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
            <div className="w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3 mx-auto border-[1px] border-[#E7E6E6] p-5 md:p-10 lg:mt-10 rounded-xl">
                <div className="grid grid-cols-4 gap-10">
                    <div className="col-span-4 md:col-span-3">
                        <div className="mt-3">
                            <Image src={data?.data?.images} alt="blog image" width={690} height={100}/>
                            <p className="text-sm md:text-base absolute left-0 bottom-0 bg-white italic font-light text-tourHub-title px-5 py-3">

                            </p>
                        </div>

                        <div className="mt-5 md:mt-10">
                            <h2 className="text-19px md:text-27px mb-5 text-tourHub-title font-bold">
                            {data?.data.title}
                            </h2>

                            <p className="text-base font-normal leading-7 text-tourHub-title text-16px">
                              {data?.data.description}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <div>
                            <h4 className="text-tourHub-title text-xl font-bold leading-7 mb-5">
                                About author
                            </h4>
                            <Image src={blogAuthor} alt="author image" />
                            <p className="my-5 text-tourHub-title">Brandon King</p>
                        </div>
                        <div className="my-10">
                            <h4 className="text-tourHub-title text-19px font-bold leading-7 mb-5">
                               All Categories Here
                            </h4>

                            <div className="flex flex-col gap-3">
                                {newsCategory.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/news`}
                                        className="text-tourHub-green-light underline text-14px text-base font-normal hover:opacity-80 transition duration-300"
                                    >
                                        {category.categoryName}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5 md:my-10">
                    <h4 className="text-tourHub-title text-xl font-bold leading-7 mb-5">
                        You might also like
                    </h4>

                    {/* TODO: render 3 news card of this category */}
                </div>
            </div>
        </div>
    )
}

export default newsDetailspage