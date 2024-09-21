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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum et in feugiat. Platea in
                            diam, est congue. Posuere sapien morbi augue ultrices. Et facilisi orci sollicitudin placerat
                            lacus lacus nibh. Egestas semper massa viverra massa proin in morbi placerat. Pharetra nec, est non integer nisi, ut faucibus. Non, in nam sollicitudin vitae
                            volutpat ac molestie. Turpis pellentesque sit pellentesque id cras lobortis tortor, blandit.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.8,
                            }}
                            className='lg:text-19px text-16px tracking-wide  font-normal leading-28px'>
                            Id ac non, semper turpis maecenas. Convallis tempor fringilla quisque arcu, dictum. Vitae cursus
                            vel netus tincidunt vitae. Malesuada velit, at mattis adipiscing quisque tristique id magna. Blandit porta sit nam magna sit. Turpis vestibulum facilisis placerat
                            habitant gravida eget. Lacus pretium, arcu non adipiscing sed faucibus semper eget tempor.
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