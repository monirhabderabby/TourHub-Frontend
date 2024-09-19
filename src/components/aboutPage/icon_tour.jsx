'use client'
import { tours } from '@/lib/aboutData';
import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";

const IconTourSec = () => {
    return (

        <div className='my-32'>
            <div className='container'>
                <div className='flex items-center flex-wrap justify-between  gap-y-6'>
                    {
                        tours.map((item) => <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.4,
                            }}
                            className='flex shadow p-2 shadow-slate-100  flex-col items-center space-y-2' key={item.id}>
                            <Image src={item.img} alt='icon tour image' width={120} height={120} />
                            <h3 className='font-poppins leading-33px font-bold text-19px text-tourHub-gray'>{item.title}</h3>
                        </motion.div>)
                    }
                </div>
            </div>
        </div>

    )
}

export default IconTourSec;