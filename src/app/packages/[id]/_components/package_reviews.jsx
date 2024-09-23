// Components
import { transformRatings } from "@/lib/reviews";
import { cn } from "@/lib/utils";
import PackageReviewCard from "./package_review_card";
import PackageSectionTitle from "./package_section_title";

const PackageReviews = () => {
  // demo data
  const data = [
    {
      id: 1,
      user: {
        name: "Monir Hossain",
        image:
          "https://utfs.io/f/0H3br7tpgSGK3ksO0CsRN7fyjPtZTL192rOVexYdnqpuUmoR",
      },
      comments: {
        comment:
          "Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.",
        title: "Take this tour! Its fantastic!",
        createdAt: 1706745600,
        images: [
          "https://utfs.io/f/0H3br7tpgSGKOIIWz0VC6US9HLiJlhaqyd5mEf3s12XeZKFk",
          "https://utfs.io/f/0H3br7tpgSGKbJF38yT5k1js5zOTcyVRmKwpMDUd0Witn63F",
        ],
      },
    },
    {
      id: 2,
      user: {
        name: "Mobashirul Islam seam",
        image:
          "https://utfs.io/f/0H3br7tpgSGK3ksO0CsRN7fyjPtZTL192rOVexYdnqpuUmoR",
      },
      comments: {
        comment:
          "Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.",
        title: "Take this tour! Its fantastic!",
        createdAt: 1706745600,
        images: [
          "https://utfs.io/f/0H3br7tpgSGKOIIWz0VC6US9HLiJlhaqyd5mEf3s12XeZKFk",
          "https://utfs.io/f/0H3br7tpgSGKbJF38yT5k1js5zOTcyVRmKwpMDUd0Witn63F",
        ],
      },
    },
  ];
  return (
    <div>
      <PackageSectionTitle title="Customer Reviews" />
      <Stats />
      <div className="flex flex-col gap-y-8">
        {data.map(({ id, user, comments }) => (
          <PackageReviewCard key={id} user={user} comments={comments} />
        ))}
      </div>
    </div>
  );
};

export default PackageReviews;

// Stats
const Stats = () => {
  // demo data
  const ratingsData = {
    Overall: 5.0,
    Location: 5.0,
    Amenities: 4.0,
    Food: 3.0,
    Price: 4.3,
    Rooms: 5.0,
    "Tour Operator": 4.8,
  };

  const transformedRatings = transformRatings(ratingsData);

  return (
    <div className="my-5 w-full">
      <div className="w-full grid grid-cols-2 gap-2">
        {/* Overall ratings */}
        {transformedRatings.map(({ id, review, tag, title }) => (
          <div
            className={cn(
              "  p-4 px-5 md:px-12 rounded-8px flex justify-between items-center",
              id === 1
                ? "col-span-2 bg-[#EB662B]/10"
                : "col-span-1 bg-[#EB662B]/5"
            )}
            key={id}
          >
            <div className="text-tourHub-title2 font-inter">
              <h3 className="font-medium text-[15.5px] leading-24px">
                {title}
              </h3>
              <p className="font-normal text-[14.65px] leading-[22.5px]">
                {tag}
              </p>
            </div>
            <p className="text-tourHub-title2 font-medium text-[15.88px] leading-[30px]">
              {review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
