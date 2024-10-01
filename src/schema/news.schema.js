import * as z from "zod";

export const NewsSchema = z.object({
    title: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    description: z.string().min(3, {
        message: "Description is required.",
    }),
    newsCategory: z.string().min(1, {
        message: "Category is required",
    }),
    images: z.string().min(1, {
        message: "Image is required",
    }),
});
