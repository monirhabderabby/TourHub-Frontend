"use client";

import DateField from "@/components/form/dateField";
import TextField from "@/components/form/textField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PackageSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    startDate: z.date({
        required_error: "Start date is required.",
    }),
    // endDate: z.date({
    //     required_error: "End date is required.",
    // }),
});

const PackageForm = () => {
    const form = useForm({
        resolver: zodResolver(PackageSchema),
        defaultValues: {
            name: "",
            startDate: "",
            // endDate: "",
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
                    <div className="grid grid-cols-2 gap-x-5">
                        <TextField
                            control={form.control}
                            fieldName={"name"}
                            label={"Package Name"}
                            placeholder={"Package name"}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-x-5">
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
                    </div>

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default PackageForm;
