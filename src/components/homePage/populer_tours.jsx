import Link from "next/link";
import PackageCard from "../common/package_card";

export const demoPackageData = [
  {
    id: 1,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKSoojHlw3hwnPNegHjTXMQ0pG3uV2rFZDtEly",
    name: "Taman Nasional Bunaken",
    price: "90",
  },
  {
    id: 2,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKXAZdaT4yepSa8gLVb9wNn1YyRhEiml62FzMk",
    name: "Taman Nasional Komodo",
    price: "120",
  },
  {
    id: 3,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKV52Jrw6lQMjC368YtNcwdpsn5KrxfUiv9oHB",
    name: "Taman Nasional Bunaken",
    price: "200",
  },
  {
    id: 4,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKPi1B1Y2r58eAG92HmgYxOkVcsaDCdX4lSE6t",
    name: "Burj Al Khalifa",
    price: "250",
  },
  {
    id: 5,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKq3S299MQ17cOQJCl5YR62TVaBGrp9UZNmwo8",
    name: "Modina",
    price: "100",
  },
  {
    id: 6,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKDtwA6zNOW8AST3ik5uqPHxO6wf0Gmd1LycXn",
    name: "Cox's Bazar",
    price: "400",
  },
  {
    id: 7,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKq3S299MQ17cOQJCl5YR62TVaBGrp9UZNmwo8",
    name: "Modina",
    price: "100",
  },
  {
    id: 8,
    bannerImage:
      "https://utfs.io/f/0H3br7tpgSGKDtwA6zNOW8AST3ik5uqPHxO6wf0Gmd1LycXn",
    name: "Cox's Bazar",
    price: "400",
  },
];
const PopulerTours = () => {
  return (
    <div className="container">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-tourHub-title2 text-23px md:text-[29.41px] font-bold font-inter leading-[45px]">
          Find Populer Tours
        </h1>
        <Link
          href="/"
          className="text-tourHub-title2 font-normal text-14px leading-28px hover:underline"
        >
          See all
        </Link>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10  mt-[30px] lg:mt-[50px]">
        {demoPackageData.map((item) => (
          <PackageCard
            key={item.id}
            bannerImage={item.bannerImage}
            price={item.price}
            name={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default PopulerTours;
