"use client";

import { default as SingleImageUpload } from "@/components/common/single-image-upload-with-edgestore";
import TextField from "@/components/form/textField";
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
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CategorySchema } from "@/schema/category.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CategoryForm = ({ category }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const formTitle = category ? "Update Category" : "Create Category";
    const description = category ? "Update the category" : "Add a new category";
    const btnText = category ? "Update" : "Submit";
    const toastMessage = category
        ? "Category updated successfully."
        : "Category created successfully.";

    const form = useForm({
        resolver: zodResolver(CategorySchema),
        defaultValues: {
            name: category ? category.name : "",
            categoryDescription: category ? category.categoryDescription : "",
            image: category ? category.image : "",
        },
    });

    // category create & update api connection
    const { mutate, isPending } = useMutation({
        mutationKey: ["categories", category?._id],
        mutationFn: async (data) => {
            // Determine whether to use POST or PATCH
            const method = category ? "PATCH" : "POST";
            const url = category
                ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/category/${category._id}`
                : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/category`;

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
            router.push("/dashboard/category");
        },
    });

    const onSubmit = (data) => {
        mutate(data);
    };

    // category delete api
    const { mutate: deleteMutate, isPending: deletePending } = useMutation({
        mutationKey: ["categories", category?._id],
        mutationFn: async () => {
            const method = "DELETE";
            const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/category/${category._id}`;

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
            toast.success("Category deleted successfully.");
            setOpen(false);
            router.push("/dashboard/category");
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
                {category && (
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
                    <div className="grid grid-cols-2">
                        <TextField
                            control={form.control}
                            fieldName={"name"}
                            type={"text"}
                            label={"Category Name"}
                            placeholder={"Category name"}
                        />
                    </div>
                    <div className="grid grid-cols-2">
                        <FormField
                            control={form.control}
                            name="categoryDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself"
                                            className="resize-none h-24"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Category image */}
                    <div className="grid grid-cols-2">
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category Image</FormLabel>
                                    <FormControl>
                                        <SingleImageUpload
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
                    </div>

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

export default CategoryForm;
