// Components
import Image from "next/image";
import Link from "next/link";

// Images
import bg from "@/assets/bg.png";
import blogAuthor from "@/assets/blog-author.png";
import blogImg from "@/assets/blog-img.jpg";

const NewsDetailsPage = () => {
    const categories = [
        { id: 1, name: "Adventure" },
        { id: 2, name: "Beach" },
        { id: 3, name: "City" },
        { id: 4, name: "Mountain" },
        { id: 5, name: "Nature" },
        { id: 6, name: "Cruises" },
        { id: 7, name: "Cultural" },
    ];

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
            <div className="w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3 mx-auto lg:shadow-[1px_2px_12px_1px_#00000025] p-5 md:p-10 lg:mt-10 rounded-xl">
                <div className="grid grid-cols-4 gap-10">
                    <div className="col-span-4 md:col-span-3">
                        <div className="relative">
                            <Image src={blogImg} alt="blog image" />
                            <p className="text-sm md:text-base absolute left-0 bottom-0 bg-white italic font-light text-tourHub-title px-5 py-3">
                                Mountain
                            </p>
                        </div>

                        <div className="mt-5 md:mt-10">
                            <h2 className="text-3xl md:text-4xl mb-5 text-tourHub-title font-bold">
                                Beautiful view of Indonesia&apos;s natural hills
                            </h2>

                            <p className="text-base font-normal leading-7 text-tourHub-title">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus laborum et voluptas
                                nostrum inventore? Distinctio architecto facere
                                quasi voluptatem alias reiciendis minus incidunt
                                non, ut dolores! Sapiente, quis voluptas.
                                Ducimus perferendis necessitatibus ab obcaecati
                                ipsum vero quibusdam exercitationem mollitia
                                praesentium accusantium non pariatur, quaerat
                                aspernatur doloribus nam odio. Aspernatur, id.
                                Totam ullam voluptatum praesentium officiis
                                voluptatibus modi ducimus, molestiae dolorem
                                iure cumque repellendus ex eum autem temporibus
                                quo dolor expedita veniam blanditiis illum
                                eveniet incidunt. Nulla delectus tenetur quia!
                                Animi illo cum necessitatibus eos quod fugiat
                                sit, quaerat, officia itaque nostrum nulla iure
                                recusandae! Error ad voluptates quae. Dicta,
                                tenetur!
                            </p>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-1">
                        <div>
                            <h4 className="text-tourHub-title text-xl font-bold leading-7 mb-5">
                                About author
                            </h4>
                            <Image src={blogAuthor} alt="author image" />
                            <p className="my-5 text-tourHub-title">
                                Brandon King
                            </p>
                        </div>
                        <div className="my-10">
                            <h4 className="text-tourHub-title text-xl font-bold leading-7 mb-5">
                                Categories
                            </h4>

                            <div className="flex flex-col gap-3">
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/news`}
                                        className="text-tourHub-title text-base font-medium hover:opacity-80 transition duration-300"
                                    >
                                        {category.name}
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
    );
};

export default NewsDetailsPage;
