"use client";
// Packages
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ChevronsUpDown,
  CircleOff,
  Loader2,
  Loader2Icon,
  MapPin,
} from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";

// Components
import {
  default as ImageUpload,
  default as SingleImageUpload,
} from "@/components/common/single-image-upload-with-edgestore";
import DateField from "@/components/form/dateField";
import NumberInput from "@/components/form/numberInput";
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
import { Input } from "@/components/ui/input";
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
import { PackageSchema } from "@/schema/package.schema";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const PackageForm = ({ singlePackage }) => {
  const { user } = useUser();
  const router = useRouter();
  const queryClient = useQueryClient();
  const featuresData = [
    { value: "Guided Tours", label: "Guided Tours" },
    { value: "Meals", label: "Meals" },
    { value: "Accommodation", label: "Accommodation" },
    { value: "Flights", label: "Flights" },
    { value: "Personal Expenses", label: "Personal Expenses" },
  ];

  const formTitle = singlePackage ? "Update Package" : "Create Package";
  const description = singlePackage
    ? "Update the package"
    : "Add a new package";
  const btnText = singlePackage ? "Update" : "Submit";
  const toastMessage = singlePackage
    ? "Package updated successfully."
    : "Package created successfully.";

  const form = useForm({
    resolver: zodResolver(PackageSchema),
    defaultValues: {
      name: singlePackage ? singlePackage?.name : "",
      startDate: singlePackage ? singlePackage?.startDate : "",
      endDate: singlePackage ? singlePackage?.endDate : "",
      location: singlePackage ? singlePackage?.location : "",
      price: singlePackage ? singlePackage?.price : 0,
      totalPeople: singlePackage ? singlePackage?.totalPeople : "",
      description: singlePackage ? singlePackage?.description : "",
      country: singlePackage ? singlePackage?.country : "",
      cardImage: singlePackage ? singlePackage?.cardImage : [],
      bannerImage: singlePackage ? singlePackage?.bannerImage : [],
      category: singlePackage ? singlePackage?.category : [],
      include: singlePackage ? singlePackage?.features?.include : [],
      exclude: singlePackage ? singlePackage?.features?.exclude : [],
      itinerary: singlePackage
        ? singlePackage?.itinerary
        : [{ day: "", title: "", description: "" }],
      tourDuration: singlePackage ? singlePackage?.tourDuration : "",
      mapLocation: singlePackage ? singlePackage?.mapLocation : "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "itinerary",
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

  // package create & update api connection
  const { mutate, isPending } = useMutation({
    mutationKey: ["packages", singlePackage?._id],
    mutationFn: async (data) => {
      // Determine whether to use POST or PATCH
      const method = singlePackage ? "PATCH" : "POST";
      const url = singlePackage
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package/${singlePackage._id}`
        : `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package/create-package`;

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
    onSuccess: (data) => {
      if (data) {
        toast.success(toastMessage);
        queryClient.invalidateQueries(["packages"]);
        router.push("/dashboard/packages");
      }
    },
  });

  function onSubmit(data) {
    data.clerkId = user?.id;

    const { include, exclude, ...rest } = data;

    data = {
      ...rest,
      features: { include, exclude },
    };
    data.price = Number(data.price);

    mutate(data);
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
            {formTitle}
          </h2>
          <p className="text-tourHub-green-dark text-base mb-1">
            {description}
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
            <NumberInput
              control={form.control}
              fieldName={"price"}
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
            <TextField
              control={form.control}
              fieldName={"tourDuration"}
              type={"text"}
              label={"Tour Duration"}
              placeholder={"Time of tour duration"}
            />
            <TextField
              control={form.control}
              fieldName={"mapLocation"}
              type={"text"}
              label={"Map Location"}
              placeholder={"Map location"}
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
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? countries.find(
                                (country) => country.value === field.value
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
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {countries.map((country) => (
                              <CommandItem
                                value={country.label}
                                key={country.value}
                                onSelect={() => {
                                  form.setValue("country", country.value);
                                }}
                              >
                                <MapPin
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    country.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {country.label}
                              </CommandItem>
                            ))}
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
                        emptyMessage={"No framework found."}
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
                        emptyMessage={"No feature found."}
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
                        emptyMessage={"No feature found."}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Itinerary fields start */}

          <div>
            <div>
              <p className="text-xl font-semibold mb-2">Itinerary</p>
            </div>
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-3 gap-5 mb-5">
                <FormField
                  control={form.control}
                  name={`itinerary.${index}.day`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Day</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter day" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`itinerary.${index}.title`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`itinerary.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {index > 0 && (
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => remove(index)}
                    className="w-1/4"
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => append({ day: "", title: "", description: "" })}
            >
              Add Day
            </Button>
          </div>

          {/* Itinerary fields end */}

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
                      onChange={(value) => field.onChange(value)}
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

          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {singlePackage ? "Saving..." : "Please wait"}
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

export default PackageForm;
