import DestinationCard from "../common/destination_card";

const data = [
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
];

const TopDestination = () => {
  return (
    <section className="container">
      <div>
        <h3 className="text-tourHub-green-dark text-16px font-bold leading-28px text-center">
          Top Desinations
        </h3>
        <h1 className="text-tourHub-title text-27px leading-33px font-bold text-center">
          Discover your love
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 mt-8">
        {data.map(({ bannerImage, id, name, price }, index) => (
          <DestinationCard
            key={id}
            bannerImage={bannerImage}
            name={name}
            price={price}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default TopDestination;
