import Image from 'next/image';
import React from 'react';

const WhyChoiceSection = () => {
    return (
        <div className="pt-16">
            <div className="container font-poppins">
                {/* why chioce title */}
                <div className="flex flex-col items-center text-tourHub-title space-y-3">
                    <h3 className="text-27px text-center leading-33px font-bold ">Why Choose Us ?</h3>
                    <p className="font-normal text-center text-19px leading-28px">These popular destinations have a lot to offer</p>
                </div>
                {/* why chioce card part */}
                <div className='grid pt-14 lg:grid-cols-3 gap-20 md:grid-cols-2 grid-cols-1'>
                    {/* choice one */}
                    <div className='flex flex-col items-center text-tourHub-title justify-center space-y-4'>
                        <Image src={'https://utfs.io/f/cagsdt8RzebYmO2ZyS6TqVhnpmYU4HfskB3ty2PvKFrXjedJ'} width={128} height={128} alt='choice about img' />
                        <h3 className='text-23px leading-27px font-bold '>Best price guarantee</h3>
                        <p className='w-[350px] text-center text-16px leading-28px'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                    {/* choice who */}
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <Image src={'https://utfs.io/f/cagsdt8RzebYs4NZtBhqbkg1OzrHyt8GBYCufhp2odD4ULeP'} width={128} height={128}  alt='choice about img' />
                        <h3 className='text-2xl font-bold text-[#3D3E48]'>Easy Booking</h3>
                        <p className='w-[350px] text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                    {/* choice three */}
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <Image src={'https://utfs.io/f/cagsdt8RzebY4qIRqDbkG1jcbPnytDE8XURrBHzZMvswIN5Y'} width={128} height={128}  alt='choice about img' />
                        <h3 className='text-2xl font-bold text-[#3D3E48]'>Customer Service 24h</h3>
                        <p className='w-[350px] text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoiceSection;