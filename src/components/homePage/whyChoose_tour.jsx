import { chooseData } from '@/lib/whyChooseTour';
import React from 'react';

const WhyChooseTour = () => {
    return (
        <div className='container'>
            <div>
                <h1 className="text-tourHub-title2 text-[29.41px] font-bold font-inter leading-[45px]">
                    Why choose Tourz
                </h1>
                {/* choose card section */}
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 gap-5'>
                    {
                        chooseData.map((item, idx) => {
                            return <div key={idx} className='flex font-inter  shadow shadow-slate-50 p-4  flex-col items-start'>
                                <p className='text-6xl text-tourHub-green-light'>{item.img}</p>
                                <h3 className='pt-6 text-19px font-semibold text-tourHub-title2 leading-27px pb-3'>{item.title}</h3>
                                <p className='text-14px text-ellipsis text-tourHub-title2 leading-27px w-[266px] font-normal'>
                                    {item.dec}
                                </p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default WhyChooseTour;