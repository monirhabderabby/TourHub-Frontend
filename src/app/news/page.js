// import NewsCard from "@/components/card/newsCard";
// import AllPageBanner from "@/components/common/AllPageBanner";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { newsCategory } from "@/lib/newsCategory";

// const NewsPage = async () => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news/find-all-news`
//   );
//   const data = await res.json();
//   const results = data.data;

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return (
//     <div className="mt-8 font-poppins">
//       {/* News banner section */}
//       <AllPageBanner
//         title="Our News"
//         img={
//           "https://utfs.io/f/cagsdt8RzebYqTZw1r0hGyIJApn8CWOxUd0cNQbSPtw35XLV"
//         }
//       />
//       {/*  news titile or filler and cardsection */}
//       <div className="container mt-24">
//         {/* title news */}
//         <div className="flex text-tourHub-title flex-col items-center justify-center space-y-3">
//           <h3 className="text-27px leading-33px font-bold">TourHub Articles</h3>
//           <p className="text-16px leading-28px text-center">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
//           </p>
//         </div>
//       </div>
//       <div>
//         {/* title news */}
//         <Tabs defaultValue="Adventure Travel" className="my-5 text-white">
//           <TabsList className="  space-x-2 md:space-x-16  grid grid-cols-2 md:grid-cols-6  items-center justify-center mx-auto  gap-y-2">
//             {newsCategory.map((n) => (
//               <>
//                 {" "}
//                 <TabsTrigger
//                   value={n.name}
//                   className="bg-tourHub-green-light text-white px-2"
//                 >
//                   {n.name}
//                 </TabsTrigger>{" "}
//               </>
//             ))}
//           </TabsList>
//           <TabsContent
//             value="Adventure Travel"
//             className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//           >
//             {results
//               .filter((n) => n.newsCategory === "Adventure Travel")
//               .map((news) => (
//                 <NewsCard key={news._id} news={news} />
//               ))}
//           </TabsContent>
//           <TabsContent
//             value="Beach"
//             className="grid grid-cols-1 gap-8    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//           >
//             {results
//               .filter((n) => n.newsCategory === "Beach")
//               .map((news) => (
//                 <NewsCard key={news._id} news={news} />
//               ))}
//           </TabsContent>
//           <TabsContent
//             value="Explore World"
//             className="grid grid-cols-1 gap-8    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//           >
//             {results
//               .filter((n) => n.newsCategory === "Explore World")
//               .map((news) => (
//                 <NewsCard key={news._id} news={news} />
//               ))}
//           </TabsContent>
//           <TabsContent
//             value="Family Holidays"
//             className="grid grid-cols-1 gap-8    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//           >
//             {results
//               .filter((n) => n.newsCategory === "Family Holidays")
//               .map((news) => (
//                 <NewsCard key={news._id} news={news} />
//               ))}
//           </TabsContent>
//           <TabsContent
//             value="Art and culture"
//             className="grid grid-cols-1 gap-8    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//           >
//             {results
//               .filter((n) => n.newsCategory === "Art and culture")
//               .map((news) => (
//                 <NewsCard key={news._id} news={news} />
//               ))}
//           </TabsContent>
//           <TabsContent
//             value="Hill Travel"
//             className="grid grid-cols-1 gap-8    md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//           >
//             {results
//               .filter((n) => n.newsCategory === "Hill Travel")
//               .map((news) => (
//                 <NewsCard key={news._id} news={news} />
//               ))}
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };
// export default NewsPage;

const page = () => {
  return <div>page</div>;
};

export default page;
