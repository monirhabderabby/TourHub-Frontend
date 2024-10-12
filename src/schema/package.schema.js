import { parse } from "date-fns";
import * as z from "zod";

export const itineraryItemSchema = z.object({
    day: z.string().min(1, "Day is required"),
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
});

export const PackageSchema = z
    .object({
        name: z.string().min(3, {
            message: "Name must be at least 3 characters.",
        }),
        location: z.string().min(3, {
            message: "Location must be at least 3 characters.",
        }),
        startDate: z
            .string({
                message: "Start date is required.",
            })
            .refine(
                (value) => {
                    const date = parse(value, "yyyy-MM-dd", new Date());
                    return !isNaN(date.getTime());
                },
                {
                    message: `Invalid date format. Expected "yyyy-MM-dd" format.`,
                }
            ),
        endDate: z
            .string({
                message: "End date is required.",
            })
            .refine(
                (value) => {
                    const date = parse(value, "yyyy-MM-dd", new Date());
                    return !isNaN(date.getTime());
                },
                {
                    message: `Invalid date format. Expected "yyyy-MM-dd" format.`,
                }
            ),
        price: z
            .number({
                message: "Price is required",
            })
            .min(1, "Price must be greater than 0"),
        totalPeople: z.string().min(1, {
            message: "Total people is required.",
        }),
        description: z.string().min(3, {
            message: "Description is required.",
        }),
        tourDuration: z.string().min(1, {
            message: "Tour duration is required.",
        }),
        mapLocation: z.string().min(1, {
            message: "Map location is required.",
        }),
        country: z.string().min(1, {
            message: "Please select a country.",
        }),
        cardImage: z.string().min(1, {
            message: "Image is required",
        }),
        bannerImage: z.array(z.string().min(1)).min(1, {
            message: "Banner image is required.",
        }),
        category: z.array(z.string().min(1)).min(1, {
            message: "Please select at least one category.",
        }),
        include: z.array(z.string().min(1)).min(1, {
            message: "Please add include features.",
        }),
        exclude: z.array(z.string().min(1)).min(1, {
            message: "Please add exclude features.",
        }),
        guideName: z.string({ message: "Guide name is required." }),
        guideContact: z.string({ message: "Guide contact is required." }),
        pickUpLocation: z.string({ message: "Pickup location is required." }),
        pickUpTime: z.string({ message: "Pickup Time is required" }),
        itinerary: z
            .array(itineraryItemSchema)
            .min(1, "At least one itinerary item is required"),
        published: z.boolean().default(false),
    })
    .refine((data) => data.endDate > data.startDate, {
        message: "End date must be after start date.",
        path: ["endDate"], // Point the error at endDate
    });
