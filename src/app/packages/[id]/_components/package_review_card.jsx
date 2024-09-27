// Packages
import moment from "moment";
import Image from "next/image";
import { memo } from "react";

const PackageReviewCard = ({ comment, title, images, author, createdAt }) => {
  return (
    <div className="">
      {/* profile */}
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-x-3">
          <Image
            src={author?.profileImage}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full border-[1px] border-gray-200"
          />
          <p className="font-inter font-medium text-[15.38px] leading-[30px]">
            {author?.name}
          </p>
        </div>
        {createdAt && (
          <p className="text-tourHub-title2">
            {moment(createdAt).format("ll")}
          </p>
        )}
      </div>

      {/* comments */}
      <div className="pl-[60px] pt-[20px] text-tourHub-title2 font-inter">
        <h3 className="font-medium text-[15.63px] leading-[30px]">{title}</h3>
        <p className="font-normal text-14px leading-28px">{comment}</p>
      </div>

      {/* images */}
      <div className="flex items-center gap-3 mt-2 pl-[60px]">
        {images?.map((imgSrc, index) => (
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

export default memo(PackageReviewCard);
