import AllPageBanner from '@/components/common/AllPageBanner';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import Image from "next/image";

const NewsPage = async() => {
    const res = await fetch(
        `http://localhost:5000/api/v1/news/find-all-news`,
        { next: { revalidate: 10000 } }
      );
    
      const data = await res.json();
    
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
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
                <div className="container mt-24">
        {/* title news */}
        <Tabs defaultValue="Adventure Travel" className="my-5 text-white">
          <TabsList className="  space-x-2 md:space-x-16  grid grid-cols-2 md:grid-cols-6  items-center justify-center mx-auto  gap-y-2">
            <TabsTrigger
              value="Adventure Travel"
              className="bg-tourHub-green-light text-white  text-16px"
            >
              Adventure Travel
            </TabsTrigger>
            <TabsTrigger value="Beach" className="bg-tourHub-green-light text-white px-2">Beach</TabsTrigger>
            <TabsTrigger value="Explore World" className="bg-tourHub-green-light text-white px-2">Explore World</TabsTrigger>
            <TabsTrigger value="Family Holidays" className="bg-tourHub-green-light text-white px-2">Family Holidays</TabsTrigger>
            <TabsTrigger value="Art and culture" className="bg-tourHub-green-light text-white px-6">Art and culture</TabsTrigger>
          </TabsList>
          {/* <TabsContent value="Adventure Travel" >
            {data.map((news) => (
              <Card key={news._id} news={news} />
            ))}

          </TabsContent> */}
          <TabsContent value="Adventure Travel" >
            <Card className="w-[300px] pt-5 cursor-pointer md:mt-10 mt-20">
              <CardContent className="mt-1">
                <Image
                  src={
                    "https://utfs.io/f/soyLwyt7O15DgLYwA5Ezi0abUmLZy98RFXQBs5eIvApkNwH3"
                  }
                  width={300}
                  height={100}
                  alt="news"
                />
                <div className="space-y-1 mt-2 ">
                  <h2 className="font-semibold">
                    where can i go? 5 amazing countries that are open right now
                  </h2>
                  <p className="text-sm text-gray-500">September 19, 2022</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Beach" >
            <Card className="w-[300px] pt-5 cursor-pointer md:mt-10 mt-20">
              <CardContent className="mt-1">
                <Image
                  src={
                    "https://utfs.io/f/soyLwyt7O15DgLYwA5Ezi0abUmLZy98RFXQBs5eIvApkNwH3"
                  }
                  width={300}
                  height={100}
                  alt="news"
                />
                <div className="space-y-1 mt-2 ">
                  <h2 className="font-semibold">
                    where can i go? 5 amazing countries that are open right now
                  </h2>
                  <p className="text-sm text-gray-500">September 19, 2022</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Explore World" >
            <Card className="md:w-[300px] pt-5 cursor-pointer md:mt-10 mt-20">
              <CardContent className="mt-1">
                <Image
                  src={
                    "https://utfs.io/f/soyLwyt7O15DjPKzQH7LtscUq3OwXiE0ZVDPQ8vnkHWSCbry"
                  }
                  width={300}
                  height={100}
                  alt="news"
                />
                <div className="space-y-1 mt-2 ">
                  <h2 className="font-semibold">
                    where can i go? 5 amazing countries that are open right now
                  </h2>
                  <p className="text-sm text-gray-500">September 19, 2022</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Family Holidays" >
            <Card className="md:w-[300px] pt-5 cursor-pointer md:mt-10 mt-20">
              <CardContent className="mt-1">
                <Image
                  src={
                    "https://utfs.io/f/soyLwyt7O15DK8hcjfCAr0wjgQ2izRVf6P3pcmxFYXaboELt"
                  }
                  width={300}
                  height={100}
                  alt="news"
                />
                <div className="space-y-1 mt-2 ">
                  <h2 className="font-semibold">
                    where can i go? 5 amazing countries that are open right now
                  </h2>
                  <p className="text-sm text-gray-500">September 19, 2022</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Art and culture" >
            <Card className="md:w-[300px] pt-5 cursor-pointer md:mt-10 mt-20">
              <CardContent className="mt-1">
                <Image
                  src={
                    "https://utfs.io/f/soyLwyt7O15DvQ2CNI0q0osJvF6W4yAlneRVYBphbrEkat2M"
                  }
                  width={300}
                  height={100}
                  alt="news"
                />
                <div className="space-y-1 mt-2 ">
                  <h2 className="font-semibold">
                    where can i go? 5 amazing countries that are open right now
                  </h2>
                  <p className="text-sm text-gray-500">September 19, 2022</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
            </div>
        </div>
    )
}
export default NewsPage;
