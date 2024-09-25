// Packages
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const destinationData = [
  {
    id: 1,
    img: "https://utfs.io/f/oI7Ou0bdQ6rjlZHMfYmaQ098VDA2tLKWJNRdsycxG4XBzjYF",
    country: "Paris",
    tour: "200+ Tours",
  },
  {
    id: 2,
    img: "https://utfs.io/f/oI7Ou0bdQ6rjPN3ODnMs67djalBxyKHiFnAqV82LcIeN5vUg",
    country: "Singapore",
    tour: "160+ Tours",
  },
  {
    id: 3,
    img: "https://utfs.io/f/oI7Ou0bdQ6rjlyaSftmaQ098VDA2tLKWJNRdsycxG4XBzjYF",
    country: "Roma",
    tour: "120+ Tours",
  },
  {
    id: 4,
    img: "https://utfs.io/f/oI7Ou0bdQ6rjcgPA2OrjrOIFJ8lsUy6kQb7vASLMHfZWP5mg",
    country: "Bangkok",
    tour: "300+ Tours",
  },
  {
    id: 5,
    img: "https://utfs.io/f/oI7Ou0bdQ6rjvbUvQm3f4twkaxNP6gHoBp1yXvJKmI93GjbM",
    country: "Bali",
    tour: "500+ Tours",
  },
  {
    id: 6,
    img: "https://utfs.io/f/oI7Ou0bdQ6rjY0FLijPVgoqDshSiVxC6IWeyk5aTJ1jQGwuR",
    country: "Phuket",
    tour: "400+ Tours",
  },
  {
    id: 7,
    img: "https://utfs.io/f/oI7Ou0bdQ6rjjmuGplgXzpqTGeFtKS5PWw0YiasdfxM94nkE",
    country: "Tokyo",
    tour: "600+ Tours",
  },
  {
    id: 8,
    img: "https://utfs.io/f/oI7Ou0bdQ6rjdXriEMwxMR0IL2qXsetDo8jl5QGuhvCyaJ7d",
    country: "Cappadocia",
    tour: "700+ Tours",
  },
];

const TrendingDestinations = () => {
  return (
    <div className="container">
      {/* Trending destinations header title */}
      <div className="w-full flex justify-between items-center">
        <h1 className="text-tourHub-title2 text-23px md:text-[29.41px] font-bold font-inter leading-[45px]">
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
        <Marquee pauseOnHover>
          <div className="mt-16 flex items-center pl-16 gap-x-20">
            {destinationData.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="flex shadow  hover:bg-[#3a6f54] hover:text-tourHub-white p-4 transition-all duration-300 rounded-xl shadow-slate-50  font-inter text-tourHub-title2 items-center flex-col cursor-pointer group"
                >
                  <Image
                    src={item.img}
                    width={130}
                    height={130}
                    alt="image for destination"
                    priority
                  />
                  <h3 className="text-16px font-inter pt-5 pb-1 font-medium leading-24px">
                    {item.country}
                  </h3>
                  <p className="text-14px font-inter font-normal leading-27px text-tourHub-gray group-hover:text-white">
                    {item.tour}
                  </p>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TrendingDestinations;
