"use client";
// Packages
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RatingSchema } from "@/schema/comment.schema";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import FramerModal from "../../../../components/common/framer-modal";
import { Step } from "../../../../components/ui/Step";

const FeedbackModalForm = ({ isOpen, setIsOpen }) => {
  const [step, setStep] = useState(1);

  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return;
  }

  const { mutate, isPending } = useMutation({
    mutationKey: ["comment"],
    mutationFn: async (data) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/comment`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorResponse = await response.json(); // Get the error response
        console.log("@@errorResponse", errorResponse);
      }

      return response.json();
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success(
        "Thank you for sharing your feedback and rating! We appreciate your input."
      );
    },
  });

  // Initialize form with validation schema and default values
  const form = useForm({
    resolver: zodResolver(RatingSchema),
    defaultValues: {
      tourPackageId: packageId,
      clerkId: user?.id, // Optional chaining to handle possible null values
    },
  });

  // Watch specific fields
  const locationState = form.watch("locationRating");
  const foodState = form.watch("foodRating");
  const roomState = form.watch("roomRating");
  const priceState = form.watch("priceRating");
  const tourOperatorState = form.watch("tourOperatorRating");
  const amenitiesState = form.watch("amenitiesRating");

  // Array of field names to map steps dynamically
  const fields = [
    "locationRating",
    "foodRating",
    "roomRating",
    "priceRating",
    "tourOperatorRating",
    "amenitiesRating",
  ];

  const stepTitles = {
    1: "Location",
    2: "Food",
    3: "Room",
    4: "Price",
    5: "Tour Operator",
    6: "Amenities",
  };

  const stepDescriptions = {
    1: "How was your location experience?",
    2: "How was the food?",
    3: "How was the room quality?",
    4: "Was the pricing satisfactory?",
    5: "How would you rate the tour operator?",
    6: "How were the amenities?",
  };

  // Handle form submission
  const onSubmit = (data) => {
    if (step < fields.length) {
      setStep(step + 1); // Go to the next step
      return;
    } else {
      // Handle final submission
      mutate(data);
      // Close modal or trigger another action
    }
  };

  return (
    <FramerModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col items-start w-full mb-4 justify-start">
        <h3 className="text-[30px] font-inter font-medium text-tourHub-green-dark">
          {stepTitles[step]}
        </h3>
        <p className="text-14px text-tourHub-title2 font-normal font-inter">
          {stepDescriptions[step]}
        </p>
      </div>

      <div className="w-full flex justify-between">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Step key={item} step={item} currentStep={step} />
        ))}
      </div>

      <section className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-[500px]">
            {/* Render the rating fields based on the current step */}
            {step === 1 && (
              <CustomFormField
                loading={isPending}
                fieldName="locationRating"
                form={form}
              />
            )}
            {step === 2 && (
              <CustomFormField
                loading={isPending}
                fieldName="foodRating"
                form={form}
              />
            )}
            {step === 3 && (
              <CustomFormField
                loading={isPending}
                fieldName="roomRating"
                form={form}
              />
            )}
            {step === 4 && (
              <CustomFormField
                loading={isPending}
                fieldName="priceRating"
                form={form}
              />
            )}
            {step === 5 && (
              <CustomFormField
                loading={isPending}
                fieldName="tourOperatorRating"
                form={form}
              />
            )}
            {step === 6 && (
              <CustomFormField
                loading={isPending}
                fieldName="amenitiesRating"
                form={form}
              />
            )}

            {/* Submit button */}
            <div className="w-full flex justify-end col-span-2 lg:col-span-3">
              <Button
                className="py-3 px-4 gap-x-2 w-full md:w-fit bg-tourHub-green-dark hover:bg-tourHub-green-hover"
                type="submit"
                disabled={
                  (step === 1 && !locationState) ||
                  (step === 2 && !foodState) ||
                  (step === 3 && !roomState) ||
                  (step === 4 && !priceState) ||
                  (step === 5 && !tourOperatorState) ||
                  (step === 6 && !amenitiesState)
                }
              >
                {step === 6 ? "Submit" : "Continue"}
                <AnimatePresence>
                  {loading && <Loader2 className="animate-spin w-4 h-4" />}
                </AnimatePresence>
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </FramerModal>
  );
};

export default FeedbackModalForm;

// Custom field component to render star rating fields
const CustomFormField = ({ form, fieldName, loading }) => {
  const edit = loading ? false : true;
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <ReactStars
              count={5}
              onChange={(value) => {
                field.onChange(value);
              }}
              size={38}
              activeColor="#ffd700"
              edit={edit}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
