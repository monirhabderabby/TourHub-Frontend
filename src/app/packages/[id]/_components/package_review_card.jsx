// Packages
import moment from "moment";
import Image from "next/image";

const PackageReviewCard = ({ user, comments }) => {
  return (
    <div className="">
      {/* profile */}
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-x-3">
          <Image
            src={user?.image}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full border-[1px] border-gray-200"
          />
          <p className="font-inter font-medium text-[15.38px] leading-[30px]">
            {user?.name}
          </p>
        </div>
        <p className="text-tourHub-title2">
          {moment(comments?.createdAt).format("ll")}
        </p>
      </div>

      {/* comments */}
      <div className="pl-[60px] pt-[20px] text-tourHub-title2 font-inter">
        <h3 className="font-medium text-[15.63px] leading-[30px]">
          {comments?.title}
        </h3>
        <p className="font-normal text-14px leading-28px">
          Great for 4-5 hours to explore. Really a lot to see and tons of photo
          spots. Even have a passport for you to collect all the stamps as a
          souvenir. Must see for a Harry Potter fan.
        </p>
      </div>

      {/* images */}
      <div className="flex items-center gap-3 mt-2 pl-[60px]">
        {comments.images.map((imgSrc, index) => (
          <div
            key={index}
            className="w-[130px] h-[130px] rounded-12px relative"
          >
            <Image
              src={imgSrc}
              fill
              alt="img"
              className="object-cover rounded-12px shadow-sm"
            />
          </div>
        ))}
      </div>

      {/* actions */}
      <div className="text-tourHub-title2 font-normal text-14px leading-28px font-inter flex items-center gap-x-6 pl-[60px] pt-2">
        <button className="hover:font-medium transition-all duration-300">
          Helpful
        </button>
        <button className="hover:font-medium transition-all duration-300">
          Not helpful
        </button>
      </div>
    </div>
  );
};

export default PackageReviewCard;
