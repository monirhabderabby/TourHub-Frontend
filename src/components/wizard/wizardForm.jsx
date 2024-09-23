"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { ArrowRight } from "lucide-react";
import FileUpload from "../common/file-upload";

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Please provide a valid email.",
    }),
    image: z.string().min(1, { message: "Please upload a profile image" }),
});

const WizardForm = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "Abdul Hamid",
            email: "hamid@gmail.com",
            image: "",
        },
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div>
            <div className="lg:w-[850px] p-5 rounded-xl shadow-[1px_2px_12px_1px_#00000025]">
                <h3 className="mb-5 md:mb-10">
                    Please provide following information
                </h3>

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
                                                <FileUpload
                                                    apiEndPoint="userProfileImage"
                                                    onChange={field.onChange}
                                                    value={field.value}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>
                            <div className="w-full flex justify-end">
                                <Button type="submit" className="group ">
                                    <span className="mr-2">Continue</span>
                                    <ArrowRight className="h-5" />
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default WizardForm;
