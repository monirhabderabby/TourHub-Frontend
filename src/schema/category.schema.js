import * as z from "zod";

export const CategorySchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    categoryDescription: z
        .string()
        .min(10, {
            message: "Description must be at least 10 characters.",
        })
        .max(160, {
            message: "Description must not be longer than 160 characters.",
        }),
    image: z.string(),
});
