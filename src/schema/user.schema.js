import * as z from "zod";

export const UserSchema = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
  clerkId: z.string().optional(),
});
