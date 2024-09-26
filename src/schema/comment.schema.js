import { z } from "zod";

export const commentSchema = z.object({
  title: z
    .string({
      message: "Title is required",
    })
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(200, { message: "Title cannot exceed 200 characters" }),
  comment: z
    .string({
      message: "Comment is required",
    })
    .min(20, { message: "Comment must be at least 20 characters long" })
    .max(500, { message: "Comment cannot exceed 500 characters" }),
  images: z.array(z.string()).optional(),
  tourPackageId: z.string(),
  clerkId: z.string(),
});

export const RatingSchema = z.object({
  locationRating: z
    .number({
      message: "Please rate us on your location experience.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." })
    .optional(),
  foodRating: z
    .number({
      message: "Please rate the food quality.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." })
    .optional(),
  roomRating: z
    .number({
      message: "Please rate the comfort and cleanliness of the rooms.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." })
    .optional(),
  priceRating: z
    .number({
      message: "Please rate the value for money.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." })
    .optional(),
  tourOperatorRating: z
    .number({
      message: "Please rate your tour operator experience.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." })
    .optional(),
  amenitiesRating: z
    .number({
      message: "Please rate the amenities provided.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." })
    .optional(),
  clerkId: z.string(),
  tourPackageId: z.string(),
});
