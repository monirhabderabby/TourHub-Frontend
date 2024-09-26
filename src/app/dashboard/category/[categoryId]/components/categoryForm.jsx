"use client";

import { default as SingleImageUpload } from "@/components/common/single-image-upload-with-edgestore";
import TextField from "@/components/form/textField";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CategorySchema = z.object({
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
    image: z.array(z.string().min(1)),
});

const CategoryForm = () => {
    const form = useForm({
        resolver: zodResolver(CategorySchema),
        defaultValues: {
            name: "",
            categoryDescription: "",
            image: [],
        },
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div>
            <div className="flex items-center">
                <div>
                    <h2 className="text-tourHub-title2 text-[30px] font-bold font-inter">
                        Create Category
                    </h2>
                    <p className="text-tourHub-green-dark text-base mb-1">
                        Add a new category
                    </p>
                </div>
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
                                            // isForClerk={false}
                                            // disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default CategoryForm;
