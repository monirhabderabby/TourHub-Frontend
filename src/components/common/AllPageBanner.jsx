import Image from 'next/image';
import React from 'react';


const AllPageBanner = ({img, title}) => {
    return (
        <div className='overflow-hidden relative'>
            <Image src={img} alt='About-Img'  width={100}
                height={200}  className='h-[200px] md:h-[270px] bg-cover bg-no-repeat'
                sizes="(min-height: 808px) 50vw, 100vw"
                style={{
                    width: '100%'
                }} />
            <div>
                <h4 className='lg:text-5xl md:text-4xl text-2xl text-white font-bold absolute top-1/2 -translate-x-1/2  -translate-y-1/2  left-1/2'>{title}</h4>
            </div>
        </div>
    );
};

export default AllPageBanner;