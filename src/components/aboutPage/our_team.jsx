'use client'
// package
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
// component
import { teams } from '@/lib/aboutData'

const OurTeam = () => {
    return (
        <div className='my-20'>
            <div className='container overflow-hidden font-poppins'>
                {/*--- -our team title ---*/}
                <motion.h3
                    initial={{ opacity: 0, x: 100 }}  //add to animation scroll our team title
                    whileInView={{ opacity: 1, x: 0 }}                  
                    transition={{
                        duration: 0.5,
                        delay: 0.4,
                    }}
                    className='text-28px leading-33px md:text-start text-center text-tourHub-black font-bold'>
                    Our Teams
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: 100 }}   //add to animation scroll our team description
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.7,
                    }}
                    className='text-tourHub-title md:w-[580px] md:text-start py-3 text-center text-19px font-normal leading-28px'>
                    TourHub has dedicated team of travel experts is committed to providing exceptional service and personalized support.
                </motion.p>
                {/* our team member card */}
                <div className='pt-8 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-y-5 gap-x-5'>
                    {
                        teams.map((item) => <motion.div
                            initial={{ opacity: 0, x: 100 }}  //add to animation scroll card right to left
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: item.id * 0.1,
                            }}
                            className='border-2 bg-tourHub-title2 space-y-3 rounded-xl' key={item.id}>
                            <Image className='w-full rounded-md' src={item.img} alt='team member Image' width={200} height={247} />
                            <div className=' text-white p-2 space-y-2'>
                                <h3 className='font-bold text-19px leading-28px'>{item.name}</h3>
                                <p className=' font-normal text-16px leading-28px'>{item.peson}</p>
                            </div>
                        </motion.div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default OurTeam