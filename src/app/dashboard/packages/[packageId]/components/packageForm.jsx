"use client";

import {
    default as ImageUpload,
    default as SingleImageUpload,
} from "@/components/common/single-image-upload-with-edgestore";
import DateField from "@/components/form/dateField";
import TextField from "@/components/form/textField";
import RichTextEditor from "@/components/richTextEditor/richTextEditor";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { countries } from "@/lib/countriesData";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsUpDown, MapPin } from "lucide-react";
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
    price: z.string().min(1, {
        message: "Price is required.",
    }),
    totalPeople: z.string().min(1, {
        message: "Total people is required.",
    }),
    description: z.string().min(3, {
        message: "Description is required.",
    }),
    country: z.string({
        required_error: "Please select a country.",
    }),
    cardImage: z.array(z.string().min(1)),
    bannerImage: z.array(z.string().min(1)),
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
            country: "",
            cardImage: [""],
            bannerImage: [""],
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
                            type={"text"}
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

                        {/* Country field */}
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Country</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full justify-between",
                                                        !field.value &&
                                                            "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? countries.find(
                                                              (country) =>
                                                                  country.value ===
                                                                  field.value
                                                          )?.label
                                                        : "Select country"}
                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-full p-0">
                                            <Command>
                                                <CommandInput placeholder="Search country..." />
                                                <CommandList>
                                                    <CommandEmpty>
                                                        No country found.
                                                    </CommandEmpty>
                                                    <CommandGroup>
                                                        {countries.map(
                                                            (country) => (
                                                                <CommandItem
                                                                    value={
                                                                        country.label
                                                                    }
                                                                    key={
                                                                        country.value
                                                                    }
                                                                    onSelect={() => {
                                                                        form.setValue(
                                                                            "country",
                                                                            country.value
                                                                        );
                                                                    }}
                                                                >
                                                                    <MapPin
                                                                        className={cn(
                                                                            "mr-2 h-4 w-4",
                                                                            country.value ===
                                                                                field.value
                                                                                ? "opacity-100"
                                                                                : "opacity-0"
                                                                        )}
                                                                    />
                                                                    {
                                                                        country.label
                                                                    }
                                                                </CommandItem>
                                                            )
                                                        )}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Country field end */}
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

                    {/* Card image */}
                    <div>
                        <FormField
                            control={form.control}
                            name="cardImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Package Image</FormLabel>
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

                    {/* Banner images upload field */}
                    <div>
                        <FormField
                            control={form.control}
                            name="bannerImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Banner images</FormLabel>
                                    <FormControl>
                                        <ImageUpload
                                            multiUpload={true}
                                            onChange={(value) => {
                                                field.onChange(value);
                                            }}
                                            value={field.value}
                                            varient="attach"
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
