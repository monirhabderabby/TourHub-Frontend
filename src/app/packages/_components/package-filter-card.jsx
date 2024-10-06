"use client";
// Packages
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PackageFilterCard = ({ data }) => {
    const {
        price,
        name,
        country,
        location,
        averageRating,
        cardImage,
        _id,
        tourDuration,
        totalPeople,
        comments,
    } = data || {};
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.5,
                },
            }}
            className="border-[1px] font-inter border-[#E7E6E6] rounded-12px w-full h-full p-4 flex flex-col md:flex-row items-center gap-4"
        >
            <motion.div
                initial={{
                    filter: "blur(2px)",
                    opacity: 0.8,
                }}
                animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                    },
                }}
                className=" relative h-[263px] w-full md:w-[220px] xl:w-[280px]"
            >
                <Image
                    src={cardImage}
                    alt="imag"
                    fill
                    className="object-cover rounded-12px bg-gray-100"
                    priority
                />
            </motion.div>

            <div className="flex flex-1 flex-col justify-start gap-y-2 max-w-[473px] self-start">
                <p className="text-14px leading-28px text-tourHub-title2 font-normal ">
                    {location}, {country}
                </p>
                <h3 className="text-tourHub-title2 text-[18px] leading-[30px] font-medium">
                    {name}
                </h3>
                <p className="text-14px leading-28px text-tourHub-title2 font-normal">
                    <span className="font-medium">
                        {averageRating?.toFixed(1)}
                    </span>{" "}
                    ({comments.length})
                </p>
                <div className="font-inter font-normal text-tourHub-green-dark text-14px flex items-center justify-evenly">
                    <p>Best Price Gurantee</p>
                    <p>Free Cancellation</p>
                </div>
            </div>

            {/* pricing */}
            <div className="w-fit px-6 lg:w-[200px] h-auto md:h-[263px] md:border-l-[1px] md:border-[#E7E6E6] flex flex-row md:flex-col justify-between items-center mt-6 md:mt-0">
                <div>
                    <p className="text-14px font-inter leading-27px text-tourHub-title2">
                        {tourDuration} /
                    </p>
                    <p className="text-14px font-medium font-inter leading-27px text-tourHub-title2 text-center">
                        {totalPeople} person
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <p className="text-[15px] text-tourHub-title2 font-normal leading-[21px]">
                        From <span className="font-medium">${price}</span>
                    </p>
                    <Link
                        href={`/packages/${_id}`}
                        className="border-[1px] border-tourHub-green-dark px-4 py-2 rounded-12px text-[15px] font-medium font-inter leading-28px text-tourHub-green-dark hover:bg-tourHub-green-dark hover:text-white transition-all duration-300"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PackageFilterCard;
