import * as z from "zod";
export const FeedbackSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Please provide a valid email.",
    }),
    image: z.string().min(1, { message: "Please upload a profile image" }),
    feedback: z.string().min(3, {
        message: "Please provide a valid feedback",
    }),
});
