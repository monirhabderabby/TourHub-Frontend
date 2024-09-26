"use client";

import DateField from "@/components/form/dateField";
import TextField from "@/components/form/textField";
import RichTextEditor from "@/components/richTextEditor/richTextEditor";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PackageSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    location: z.string().min(3, {
        message: "Location must be at least 3 characters.",
    }),
    startDate: z.date({
        required_error: "Start date is required.",
    }),
    endDate: z.date({
        required_error: "End date is required.",
    }),
    price: z.number().min(1, {
        message: "Price is required.",
    }),
    totalPeople: z.string().min(1, {
        message: "Total people is required.",
    }),
    description: z.string().min(3, {
        message: "Description is required.",
    }),
});

const PackageForm = () => {
    const form = useForm({
        resolver: zodResolver(PackageSchema),
        defaultValues: {
            name: "",
            startDate: "",
            endDate: "",
            location: "",
            price: "",
            totalPeople: "",
            description: "",
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
                        Create Package
                    </h2>
                    <p className="text-tourHub-green-dark text-base mb-1">
                        Add a new package
                    </p>
                </div>
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
                            fieldName={"name"}
                            type={"text"}
                            label={"Package Name"}
                            placeholder={"Package name"}
                        />
                        <TextField
                            control={form.control}
                            fieldName={"location"}
                            type={"text"}
                            label={"Location"}
                            placeholder={"Location"}
                        />

                        <DateField
                            label={"Start Date"}
                            fieldName={"startDate"}
                            control={form.control}
                        />
                        <DateField
                            label={"End Date"}
                            fieldName={"endDate"}
                            control={form.control}
                        />
                        <TextField
                            control={form.control}
                            fieldName={"price"}
                            type={"number"}
                            label={"Price"}
                            placeholder={"Price"}
                        />
                        <TextField
                            control={form.control}
                            fieldName={"totalPeople"}
                            type={"text"}
                            label={"Total People"}
                            placeholder={"Number of total people"}
                        />
                    </div>

                    {/* Description - text editor */}
                    <div>
                        <FormField
                            control={form.control}
                            name={"description"}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Package Description</FormLabel>
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
                    </div>

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default PackageForm;
