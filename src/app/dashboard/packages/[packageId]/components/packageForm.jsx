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
import MultiSelectComboboxCreate from "@/components/ui/multi-select-combobox-create";
import MultiSelectCombobox from "@/components/ui/multi-select-component";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { TextEffect } from "@/components/ui/text-effect";
import { countries } from "@/lib/countriesData";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { ChevronsUpDown, CircleOff, Loader2Icon, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const PackageSchema = z
    .object({
        name: z.string().min(3, {
            message: "Name must be at least 3 characters.",
        }),
        location: z.string().min(3, {
            message: "Location must be at least 3 characters.",
        }),
        startDate: z
            .date({
                message: "Start date is required.",
            })
            .min(new Date(), {
                message: "Start date cannot be in the past.",
            }),
        endDate: z.date({
            message: "End date is required.",
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
        country: z.string().min(1, {
            message: "Please select a country.",
        }),
        cardImage: z.string().min(1),
        bannerImage: z.array(z.string().min(1)).min(1, {
            message: "Banner image is required.",
        }),
        category: z.array(z.string()).min(1, {
            message: "Please select at least one category.",
        }),
        include: z.array(z.string().min(1)).min(1, {
            message: "Please add include features.",
        }),
        exclude: z.array(z.string().min(1)).min(1, {
            message: "Please add exclude features.",
        }),
    })
    .refine((data) => data.endDate > data.startDate, {
        message: "End date must be after start date.",
        path: ["endDate"], // Point the error at endDate
    });

const PackageForm = () => {
    const featuresData = [
        { value: "Guided Tours", label: "Guided Tours" },
        { value: "Meals", label: "Meals" },
        { value: "Accommodation", label: "Accommodation" },
        { value: "Flights", label: "Flights" },
        { value: "Personal Expenses", label: "Personal Expenses" },
    ];

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
            cardImage: [],
            bannerImage: [],
            category: [],
            include: [],
            exclude: [],
        },
    });

    const {
        data: categoryData,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["categories"],
        queryFn: () =>
            fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/category`).then(
                (res) => res.json()
            ),
    });

    const categoryInfo = categoryData?.data?.map((category) => ({
        value: category._id,
        label: category.name,
    }));

    function onSubmit(data) {
        console.log(data);
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-[calc(100vh-280px)]">
                <Loader2Icon className="h-7 w-7 animate-spin text-tourHub-green-dark" />
            </div>
        );
    } else if (isError) {
        return (
            <div className="w-full flex flex-col gap-2 justify-center items-center min-h-[60vh] font-inter">
                <CircleOff className="h-7 w-7 text-red-600" />
                <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
                    <TextEffect per="char" preset="fade">
                        {error.message}
                    </TextEffect>
                </p>
            </div>
        );
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
                                                        "w-full justify-between font-normal",
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

                        {/* Category */}
                        <div>
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Category</FormLabel>
                                        <FormControl>
                                            <MultiSelectCombobox
                                                selectedValues={field.value}
                                                onChange={field.onChange}
                                                data={categoryInfo}
                                                placeholder="Select category"
                                                searchPlaceholder="Search category..."
                                                emptyMessage={
                                                    "No framework found."
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Included features */}
                        <div>
                            <FormField
                                control={form.control}
                                name="include"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Included features</FormLabel>
                                        <FormControl>
                                            <MultiSelectComboboxCreate
                                                selectedValues={field.value}
                                                onChange={field.onChange}
                                                data={featuresData}
                                                placeholder="Select features"
                                                searchPlaceholder="Search feature..."
                                                emptyMessage={
                                                    "No feature found."
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Excluded features */}
                        <div>
                            <FormField
                                control={form.control}
                                name="exclude"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Excluded features</FormLabel>
                                        <FormControl>
                                            <MultiSelectComboboxCreate
                                                selectedValues={field.value}
                                                onChange={field.onChange}
                                                data={featuresData}
                                                placeholder="Select features"
                                                searchPlaceholder="Search feature..."
                                                emptyMessage={
                                                    "No feature found."
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
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
