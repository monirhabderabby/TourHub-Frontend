"use client";

import ImageUpload from "@/components/common/single-image-upload-with-edgestore";
import TextField from "@/components/form/textField";
import RichTextEditor from "@/components/richTextEditor/richTextEditor";
import AlertModal from "@/components/ui/alert-modal";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { newsCategory } from "@/lib/newsCategory";
import { NewsSchema } from "@/schema/news.schema";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const NewsForm = ({ news }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { user } = useUser();

    const formTitle = news ? "Update News" : "Create News";
    const description = news ? "Update the news" : "Add a new news";
    const btnText = news ? "Update" : "Submit";
    const toastMessage = news
        ? "News updated successfully."
        : "News created successfully.";

    const form = useForm({
        resolver: zodResolver(NewsSchema),
        defaultValues: {
            title: news ? news.title : "",
            description: news ? news.description : "",
            newsCategory: news ? news.newsCategory : "",
            images: news ? news.images : "",
        },
    });

    // category create & update api connection
    const { mutate, isPending } = useMutation({
        mutationKey: ["news", news?._id],
        mutationFn: async (data) => {
            // Determine whether to use POST or PATCH
            const method = news ? "PATCH" : "POST";
            const url = news
                ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news/${news._id}`
                : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news/create-news`;

            const response = await fetch(url, {
                method: method,
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorResponse = await response.json(); // Get the error response
                toast.error(errorResponse.message || "An error occured");
            }

            return response.json();
        },
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            toast.success(toastMessage);
            router.push("/dashboard/news");
        },
    });

    const onSubmit = (data) => {
        data.clerkId = user?.id;
        mutate(data);
    };

    // category delete api
    const { mutate: deleteMutate, isPending: deletePending } = useMutation({
        mutationKey: ["news", news?._id],
        mutationFn: async () => {
            const method = "DELETE";
            const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/news/${news._id}`;

            const response = await fetch(url, {
                method: method,
            });

            if (!response.ok) {
                const errorResponse = await response.json(); // Get the error response
                toast.error(errorResponse.message || "An error occured");
            }

            return response.json();
        },
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: () => {
            toast.success("News deleted successfully.");
            setOpen(false);
            router.push("/dashboard/news");
        },
    });

    const onDelete = () => {
        deleteMutate();
    };

    return (
        <div>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                loading={deletePending}
                onConfirm={onDelete}
            />
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-tourHub-title2 text-[30px] font-bold font-inter mb-1">
                        {formTitle}
                    </h2>
                    <p className="text-tourHub-green-dark text-base mb-1">
                        {description}
                    </p>
                </div>
                {news && (
                    <Button
                        disabled={isPending}
                        variant="destructive"
                        size="sm"
                        onClick={() => setOpen(true)}
                    >
                        <Trash className="h-4 w-4" />
                    </Button>
                )}
            </div>
            <Separator className="mb-4" />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-6"
                >
                    <div className="grid grid-cols-2 gap-5">
                        <TextField
                            control={form.control}
                            fieldName={"title"}
                            type={"text"}
                            label={"News title"}
                            placeholder={"News title"}
                        />

                        {/* Select new category field */}

                        <FormField
                            control={form.control}
                            name="newsCategory"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>News Category</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {newsCategory.map((n) => (
                                                <SelectItem
                                                    value={n.categoryName}
                                                    key={n.id}
                                                >
                                                    {n.categoryName}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Description - text editor */}
                    <FormField
                        control={form.control}
                        name={"description"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>News Description</FormLabel>
                                <FormControl>
                                    <RichTextEditor
                                        content={field.value}
                                        onChange={(value) =>
                                            field.onChange(value)
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* News image */}

                    <FormField
                        control={form.control}
                        name="images"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>News Image</FormLabel>
                                <FormControl>
                                    <ImageUpload
                                        onChange={(imageUrls) => {
                                            field.onChange(imageUrls[0]);
                                        }}
                                        value={[field.value]}
                                        disabled={isPending}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Please wait
                            </>
                        ) : (
                            btnText
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default NewsForm;
