import { z } from "zod";

export const commentSchema = z.object({
  name: z
    .string({
      message: "Name is required",
    })
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  email: z
    .string({
      message: "Email is required",
    })
    .email({ message: "Please enter a valid email address" }),
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
});

export const ratingSchema = z.object({
  location: z
    .number({
      message: "Please rate us on your location experience.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." }),

  amenities: z
    .number({
      message: "Please rate the amenities provided.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." }),

  food: z
    .number({
      message: "Please rate the food quality.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." }),

  price: z
    .number({
      message: "Please rate the value for money.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." }),

  rooms: z
    .number({
      message: "Please rate the comfort and cleanliness of the rooms.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." }),

  tourOperator: z
    .number({
      message: "Please rate your tour operator experience.",
    })
    .min(1, { message: "Rating must be at least 1." })
    .max(5, { message: "Rating must be at most 5." }),
});
