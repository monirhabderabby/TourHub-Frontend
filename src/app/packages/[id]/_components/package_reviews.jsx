// Packages
import { useInfiniteQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Loader2, MessageSquareX } from "lucide-react";

// Components
import { TextEffect } from "@/components/ui/text-effect";
import { transformRatings } from "@/lib/reviews";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import PackageReviewCard from "./package_review_card";
import PackageSectionTitle from "./package_section_title";

const PackageReviews = ({
  totalAverageRating,
  averageLocationRating,
  averageFoodRating,
  averageAmenitiesRating,
  averagePriceRating,
  averageRoomRating,
  averageTourOperatorRating,
  packageId,
}) => {
  // Using Tanstack Query's useInfiniteQuery for infinite scrolling / pagination
  const {
    data: response,
    isError,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["comments", packageId], // Query key, unique to the package ID
    queryFn: ({ pageParam = 1 }) =>
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/comment/${packageId}?sortBy=averageRating&page=${pageParam}&limit=5`
      ).then((res) => res.json()), // Fetching the comments with pagination
    getNextPageParam: (lastPage) => {
      // Check if there are more pages
      if (lastPage.success && lastPage.meta.totalPage > lastPage.meta.page) {
        return lastPage.meta.page + 1; // Return the next page number
      }
      return undefined; // No more pages
    },
  });

  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  // Render comments if response contains data
  let content;

  if (isLoading) {
    // Loading state, shown when the initial query is loading
    content = (
      <div className="w-full h-[300px] flex justify-center items-center gap-x-2">
        <Loader2 className="animate-spin h-5 w-5 text-tourHub-green-dark" />
        <span>Loading comments...</span>
      </div>
    );
  } else if (isError) {
    // Error state, shown when there is an error fetching data
    content = (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        exit={{ opacity: 0 }}
        className="w-full h-[300px] flex flex-col gap-y-2 justify-center items-center"
      >
        <MessageSquareX className="text-red-500 h-7 w-7" />
        <p className="text-red-500 text-14px font-inter text-center max-w-[300px]">
          <TextEffect per="char" preset="fade">
            {error.message ||
              "Something went wrong. Unable to load comments at the moment."}
          </TextEffect>
        </p>
      </motion.div>
    );
  } else if (response?.pages?.length > 0) {
    // Success state, rendering the comments from all pages
    const comments = response.pages.flatMap((page) => page.data); // Flatten the pages to access all comments

    content = (
      <div className="flex flex-col gap-y-8">
        {comments.map(
          ({
            _id,
            userId,
            comment,
            title,
            images,
            createdAt,
            helpful = [],
            notHelpful = [],
          }) => {
            return (
              <PackageReviewCard
                key={_id} // Unique key for React rendering optimization
                author={{ name: userId?.name, profileImage: userId?.image }}
                comment={comment}
                title={title || ""} // Fallback for missing title
                images={images}
                createdAt={createdAt}
                commentId={_id}
                clerkId={user?.id}
                helpful={helpful || []}
                notHelpful={notHelpful || []}
              />
            );
          }
        )}
      </div>
    );
  }

  return (
    <div>
      {/* Section displaying the overall stats */}
      <PackageSectionTitle title="Customer Reviews" />
      <Stats
        totalAverageRating={totalAverageRating}
        averageLocationRating={averageLocationRating}
        averageFoodRating={averageFoodRating}
        averageAmenitiesRating={averageAmenitiesRating}
        averagePriceRating={averagePriceRating}
        averageRoomRating={averageRoomRating}
        averageTourOperatorRating={averageTourOperatorRating}
      />

      {/* Rendering content based on query status (loading, error, success) */}
      {content}

      {/* Conditional rendering of the "Load More" button if there's more data to load */}
      {hasNextPage && (
        <div className="my-24 flex items-center justify-center">
          <button
            type="button"
            onClick={() => fetchNextPage()} // Fetch next page on button click
            className="flex items-center rounded-full border border-gray-300 bg-secondary-50 px-3 py-2 text-sm font-medium text-tourHub-title2 hover:bg-gray-100"
            disabled={isFetchingNextPage || !hasNextPage}
          >
            {isFetchingNextPage ? (
              <Loader2 className="animate-spin h-4 w-4 text-tourHub-gray" /> // Spinner when fetching next page
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-1 h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
                {!hasNextPage
                  ? "End"
                  : isFetchingNextPage
                  ? "Loading.."
                  : "Load More"}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default PackageReviews;

// Stats
const Stats = ({
  totalAverageRating,
  averageLocationRating,
  averageFoodRating,
  averageAmenitiesRating,
  averagePriceRating,
  averageRoomRating,
  averageTourOperatorRating,
}) => {
  // demo data
  const ratingsData = {
    Overall: totalAverageRating,
    Location: averageLocationRating,
    Amenities: averageAmenitiesRating,
    Food: averageFoodRating,
    Price: averagePriceRating,
    Rooms: averageRoomRating,
    "Tour Operator": averageTourOperatorRating,
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
