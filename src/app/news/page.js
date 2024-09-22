import AllPageBanner from '@/components/common/AllPageBanner';
import React from 'react'

const NewsPage = () => {
    return (
        <div className='mt-8 font-poppins'>
            {/* News banner section */}
            <AllPageBanner title='Our News' img={'https://utfs.io/f/cagsdt8RzebYOLh9iUk0KGkEqzs9p8OBxtwNVmaMuPI63nj4'} />
            {/*  news titile or filler and cardsection */}
            <div className='container mt-24'>
                {/* title news */}
                <div className='flex text-tourHub-title flex-col items-center justify-center space-y-3'>
                    <h3 className='text-27px leading-33px font-bold'>TourHub Articles</h3>
                    <p className='text-16px leading-28px text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
                </div>
            </div>
        </div>
    )
}
export default NewsPage;
