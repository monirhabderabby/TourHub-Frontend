"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ParallaxScroll = ({ images, className }) => {
    const gridRef = useRef(null);
    const { scrollYProgress } = useScroll({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);

    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div
            className={cn(
                "h-[40rem] items-start overflow-y-auto w-full",
                className
            )}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2  items-start  max-w-5xl mx-auto gap-10 py-20  px-10"
                ref={gridRef}
            >
                <div className="grid gap-10">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            // Apply the translateY motion value here
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}
                        >
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 bg-gray-100"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={"grid-2" + idx}
                        >
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 bg-gray-100"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={"grid-3" + idx}
                        >
                            <Image
                                src={el}
                                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0 bg-gray-100"
                                height="400"
                                width="400"
                                alt="thumbnail"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
