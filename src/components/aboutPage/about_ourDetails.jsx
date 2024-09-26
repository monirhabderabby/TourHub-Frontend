'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";

const AboutOurDetails = () => {
    return (
        <div className='my-28 bg-gradient-to-r from-cyan-100 to-blue-500 py-14'>
            <div className='container flex md:flex-row md:gap-x-5 flex-col gap-y-8 items-center justify-between font-poppins'>
                {/* about Our details left title part */}
                <div className='text-tourHub-black space-y-6'>
                    {/* titile */}
                    <motion.h3
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                        }}
                        className='lg:text-4xl text-3xl md:text-start text-center leading-33px font-bold'>
                        About TourHub.com
                    </motion.h3>
                    {/* details */}
                    <div className='xl:w-[780px] lg:w-[690px] md:w-[400px] md:text-start text-center text-tourHub-title space-y-4'>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6,
                            }}
                            className='lg:text-19px text-16px tracking-wide font-normal leading-28px'>
                            TourHub is your ultimate travel companion, providing seamless booking, exclusive deals, and 24/7 customer support. We specialize in curating unforgettable journeys at unbeatable prices, ensuring every traveler experiences the world effortlessly. Whether you are exploring new destinations or
                            revisiting favorites, we’re here to make your travel dreams a reality.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8,
                            }}
                            className='lg:text-19px text-16px tracking-wide  font-normal leading-28px'>
                            TourHub is your trusted travel partner, offering easy booking, exclusive deals, and 24/7 customer support. We provide unforgettable travel experiences at the best prices, ensuring seamless journeys. Whether you are exploring new destinations or revisiting favorites, we make your travel dreams come true.
                        </motion.p>
                    </div>
                </div>
                {/* about Our details right Image part */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <Image className='rounded-lg ' src={'https://utfs.io/f/cagsdt8RzebY0lTEAA4saMZIdr7ch6oGRYJLQ9KqyTpBXNb8'} width={400} height={490} alt='About details image' />
                </motion.div>
            </div>
        </div>
    );
};

export default AboutOurDetails;