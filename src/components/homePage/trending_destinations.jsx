import { destinationData } from '@/lib/trendingDestinations';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';

const TrendingDestinations = () => {
    return (
        <div className='container'>
            {/* Trending destinations header title */}
            <div className="w-full flex justify-between items-center">
                <h1 className="text-tourHub-title2 text-16px md:text-[29.41px] font-bold font-inter leading-[45px]">
                    Trending destinations
                </h1>
                <Link
                    href="/"
                    className="text-tourHub-title2 font-normal text-14px leading-28px hover:underline"
                >
                    See all
                </Link>
            </div>
            {/* Trending destinations card  */}
            <div>
                <Marquee  pauseOnHover>
                    <div className='mt-16 flex items-center pl-16 gap-x-20'>

                        {
                            destinationData.map((item, idx) => {
                                return <div key={idx}  className='flex shadow  hover:bg-tourHub-title2 hover:text-tourHub-white p-4 transition-all duration-300 rounded-xl shadow-slate-50  font-inter text-tourHub-title2 items-center flex-col'>
                                    <Image src={item.img} width={130} height={130} alt='image for destination' />
                                    <h3 className='text-16px pt-5 pb-2 font-medium leading-24px'>{item.country}</h3>
                                    <p className='text-14px font-normal leading-27px'>{item.tour}</p>
                                </div>
                            })
                        }

                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default TrendingDestinations;