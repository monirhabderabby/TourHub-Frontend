"use client";

// Packages
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// Components

import SingleImageUpload from "@/components/common/single-image-upload-with-edgestore";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TextEffect } from "@/components/ui/text-effect";
import { Textarea } from "@/components/ui/textarea";
import { FeedbackSchema } from "@/schema/feedback.schema";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

const FeedbackForm = () => {
    const { user, isLoaded, isSignedIn } = useUser(); // Destructure user authentication state
    const router = useRouter();

    // Check if user authentication data has loaded
    if (!isLoaded) {
        return null; // Return nothing while loading
    }

    const { mutate, isPending, error, isSuccess, data } = useMutation({
        mutationKey: ["user"],
        mutationFn: (data) =>
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/feedback`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((res) => res.json()),
    });

    const form = useForm({
        resolver: zodResolver(FeedbackSchema),
        defaultValues: {
            name: user?.fullName || "",
            email: user?.emailAddresses?.[0]?.emailAddress || "",
            image: user?.imageUrl?.toString() || "",
            feedback: "",
        },
    });

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            router.push("/sign-in");
        }

        if (error) {
            toast.error(error.message, {
                className: "text-red-600",
            });
        }

        if (isSuccess && data) {
            toast.success(data.message);
        }
    }, [error, isSuccess, data, isLoaded, isSignedIn, router]);

    async function onSubmit(data) {
        mutate(data);
    }

    if (data?.success) {
        return (
            <div className="w-full max-w-xl mx-auto text-center mt-10">
                <h1 className="text-2xl md:text-3xl font-bold mb-5">
                    Thank You! <br /> {data?.data?.name}
                </h1>
                <p>Your feedback has been submitted successfully.</p>
                <p>We appreciate your time and effort in helping us improve.</p>

                <Button onClick={() => router.push("/")} className="mt-5">
                    Return Home
                </Button>
            </div>
        );
    }

    return (
        <div>
            <div className="lg:w-[850px] p-5 rounded-xl border-[1px] border-[#E7E6E6]">
                <h1 className="text-23px font-medium font-inter text-tourHub-title2">
                    Hi,{" "}
                    <motion.span
                        initial={{
                            filter: "blur(1px)",
                        }}
                        animate={{
                            filter: "blur(0px)",
                            transition: {
                                duration: 0.5,
                                delay: 0.5,
                            },
                        }}
                        className="font-bold text-tourHub-green-dark"
                    >
                        Give Us Your Feedback
                    </motion.span>{" "}
                    🤚
                </h1>
                <div className="mb-5 md:mb-8">
                    <TextEffect per="char" preset="fade">
                        Let us know how we can improve your TourHub experience.
                    </TextEffect>
                </div>

                {/* Form fields */}
                <div className="w-full">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full space-y-6"
                        >
                            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="w-full"
                                                    placeholder="Your name"
                                                    {...field}
                                                    disabled={isPending}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="Your email"
                                                    {...field}
                                                    disabled={true}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div>
                                <FormField
                                    control={form.control}
                                    name="feedback"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Feedback</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="We'd love to hear your thoughts on TourHub..."
                                                    className="min-h-28"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div>
                                <FormField
                                    control={form.control}
                                    name="image"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Profile Image</FormLabel>
                                            <FormControl>
                                                <SingleImageUpload
                                                    onChange={(imageUrls) => {
                                                        field.onChange(
                                                            imageUrls[0]
                                                        );
                                                    }}
                                                    value={[field.value]}
                                                    isForClerk={true}
                                                    disabled={isPending}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>
                            <div className="w-full flex justify-end">
                                <Button
                                    type="submit"
                                    className="bg-tourHub-green-dark hover:bg-[#3a6f54] group "
                                    disabled={isPending}
                                >
                                    <span className="mr-2">
                                        Share Experience
                                    </span>
                                    {isPending ? (
                                        <Loader2 className="animate-spin h-4 w-4" />
                                    ) : (
                                        ""
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;
