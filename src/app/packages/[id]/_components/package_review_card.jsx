// Packages
import { useMutation } from "@tanstack/react-query";
import moment from "moment";
import Image from "next/image";
import { memo, useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const PackageReviewCard = ({
  comment,
  title,
  images,
  author,
  createdAt,
  commentId,
  clerkId,
  helpful, // Array of user IDs who found the comment helpful
  notHelpful, // Array of user IDs who found the comment not helpful
}) => {
  // State to manage visibility of the helpful/not helpful buttons
  const [isHelpFullOpenButton, setHelpFullOpenButton] = useState(true);
  const [isNotHelp, setNotHelp] = useState(true);

  // Effect to check if the logged-in user has already clicked on helpful or not helpful
  useEffect(() => {
    // If the clerkId exists in either array, hide both buttons
    if (helpful.includes(clerkId) || notHelpful.includes(clerkId)) {
      setHelpFullOpenButton(false);
      setNotHelp(false);
    }
  }, [clerkId, helpful, notHelpful]);

  // Mutation for marking a comment as helpful
  const { mutate: helpFullMutate, isPending: isHelpFullMutationLoading } =
    useMutation({
      mutationKey: ["comments"], // Key for identifying the mutation
      mutationFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/comment/${commentId}/helpful`,
          {
            method: "PATCH", // Use PATCH method for updating data
            headers: {
              "content-type": "application/json", // Specify content type
            },
            body: JSON.stringify({
              clerkId: clerkId, // Send the clerkId in the request body
            }),
          }
        ),

      // On successful mutation, update the state to hide the buttons
      onSuccess: () => {
        setHelpFullOpenButton(false);
        setNotHelp(false);
      },
      // Handle errors by displaying a toast message
      onError: (error) => {
        toast.error(error.message);
      },
    });

  // Mutation for marking a comment as not helpful
  const { mutate: NotHelpFullMutate, isPending: isNotHelpfullMutationLoading } =
    useMutation({
      mutationKey: ["comments"], // Key for identifying the mutation
      mutationFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/comment/${commentId}/not-helpful`,
          {
            method: "PATCH", // Use PATCH method for updating data
            headers: {
              "content-type": "application/json", // Specify content type
            },
            body: JSON.stringify({
              clerkId: clerkId, // Send the clerkId in the request body
            }),
          }
        ),

      // On successful mutation, update the state to hide the buttons
      onSuccess: () => {
        setHelpFullOpenButton(false);
        setNotHelp(false);
      },
      // Handle errors by displaying a toast message
      onError: (error) => {
        toast.error(error.message);
      },
    });

  // Handlers for button clicks
  const onHelpFullButtonHandler = useCallback(() => {
    helpFullMutate();
  }, [helpFullMutate]);

  const onNotHelpFullHandler = useCallback(() => {
    NotHelpFullMutate();
  }, [NotHelpFullMutate]);

  return (
    <div className="">
      {/* Profile section */}
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-x-3">
          <Image
            src={author?.profileImage} // Display author's profile image
            alt="profile"
            width={40} // Fixed width for profile image
            height={40} // Fixed height for profile image
            className="rounded-full border-[1px] border-gray-200 bg-gray-100"
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

      {/* Comments section */}
      <div className="pl-[60px] pt-[20px] text-tourHub-title2 font-inter">
        <h3 className="font-medium text-[15.63px] leading-[30px]">{title}</h3>{" "}
        <p className="font-normal text-14px leading-28px">{comment}</p>
      </div>

      {/* Images section */}
      <div className="flex items-center gap-3 mt-2 pl-[60px]">
        {images?.map((imgSrc, index) => (
          <div
            key={index} // Unique key for each image
            className="w-[130px] h-[130px] rounded-12px relative"
          >
            <Image
              src={imgSrc} // Display image
              fill
              alt="img"
              className="object-cover rounded-12px shadow-sm bg-gray-100"
            />
          </div>
        ))}
      </div>

      {/* Actions section */}
      <div className="text-tourHub-title2 font-normal text-14px leading-28px font-inter flex items-center gap-x-6 pl-[60px] pt-2">
        {isHelpFullOpenButton && (
          <button
            className="hover:font-medium transition-all duration-300 disabled:text-gray-400"
            disabled={
              isHelpFullMutationLoading || !isHelpFullOpenButton || !clerkId // Disable button if loading or already clicked
            }
            onClick={onHelpFullButtonHandler} // Trigger helpful mutation on click
          >
            Helpful
          </button>
        )}
        {isNotHelp && (
          <button
            className="hover:font-medium transition-all duration-300 disabled:text-gray-400"
            disabled={isNotHelpfullMutationLoading || !isNotHelp || !clerkId} // Disable button if loading or already clicked
            onClick={onNotHelpFullHandler} // Trigger not helpful mutation on click
          >
            Not helpful
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(PackageReviewCard); // Memoize component to prevent unnecessary re-renders
