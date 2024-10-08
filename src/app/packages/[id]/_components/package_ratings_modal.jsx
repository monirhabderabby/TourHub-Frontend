"use client";
// Packages
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import { TextEffect } from "@/components/ui/text-effect";
import { cn } from "@/lib/utils";
import { RatingSchema } from "@/schema/comment.schema";
import FramerModal from "../../../../components/common/framer-modal";
import { Step } from "../../../../components/ui/Step";

const FeedbackModalForm = ({ isOpen, setIsOpen, packageId }) => {
  const [step, setStep] = useState(1);
  const [closeTimer, setCloseTimer] = useState(15); // Timer for auto-closing the modal

  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  const { mutate, isPending } = useMutation({
    mutationKey: ["ratings", packageId],
    mutationFn: async (data) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/package/rating`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

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
      setStep(7);
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
    "",
  ];

  // Title and description for each step in the modal
  const stepTitles = {
    1: "Location",
    2: "Food",
    3: "Room",
    4: "Price",
    5: "Tour Operator",
    6: "Amenities",
    7: "Feedback",
  };

  const stepDescriptions = {
    1: "How was your location experience?",
    2: "How was the food?",
    3: "How was the room quality?",
    4: "Was the pricing satisfactory?",
    5: "How would you rate the tour operator?",
    6: "How were the amenities?",
    7: "",
  };

  // Reset states when the modal closes
  useEffect(() => {
    if (!isOpen) {
      setCloseTimer(15); // Resets the auto-close timer
      form.reset(); // Resets the form fields
      setStep(1); // Resets to the first step
    }
  }, [isOpen, form]);

  // Auto-close modal after 15 seconds on the last step
  useEffect(() => {
    if (step === 7) {
      const timer = setInterval(() => {
        setCloseTimer((prev) => prev - 1); // Countdown timer
      }, 1000);

      const closeModalTimeout = setTimeout(() => {
        setIsOpen(false); // Closes modal after 15 seconds
      }, 15000);

      return () => {
        clearInterval(timer); // Cleanup interval
        clearTimeout(closeModalTimeout); // Cleanup timeout
      };
    }
  }, [step, setIsOpen]);

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <FramerModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col items-start w-full mb-4 justify-start">
        <h3 className="text-[30px] font-inter font-medium text-tourHub-green-dark">
          {stepTitles[step]}
        </h3>
        <p className="text-14px text-tourHub-title2 font-normal font-inter max-w-[500px]">
          {stepDescriptions[step]}
          {step == 7 && (
            <TextEffect per="char" preset="fade">
              Thank you for taking the time to share your feedback and rating!
              Your insights are invaluable, and we truly appreciate your
              contribution.
            </TextEffect>
          )}
        </p>
      </div>

      <div className={cn("w-full flex justify-between", step == 7 && "hidden")}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Step key={item} step={item} currentStep={step} />
        ))}
      </div>

      <section className="mt-2 md:mt-8 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full md:w-[500px]"
          >
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
            {step === 7 ? (
              <div className="text-14px col-span-2 text-tourHub-gray font-inter font-normal">
                Close within {closeTimer} seconds
              </div>
            ) : (
              <div className="w-full flex justify-end col-span-2 lg:col-span-3 mt-4">
                <Button
                  className="py-3 px-4 gap-x-2 w-full md:w-fit bg-tourHub-green-dark hover:bg-tourHub-green-hover"
                  type={step === 6 ? "submit" : "button"}
                  disabled={
                    (step === 1 && !locationState) ||
                    (step === 2 && !foodState) ||
                    (step === 3 && !roomState) ||
                    (step === 4 && !priceState) ||
                    (step === 5 && !tourOperatorState) ||
                    (step === 6 && !amenitiesState)
                  }
                  onClick={() => {
                    if (step < 6) {
                      setStep((prev) => prev + 1);
                      return;
                    } else if (step === 6) {
                      form.handleSubmit(onSubmit);
                    }
                  }}
                >
                  {step === 6 ? "Submit" : "Continue"}
                  <AnimatePresence>
                    {isPending && <Loader2 className="animate-spin w-4 h-4" />}
                  </AnimatePresence>
                </Button>
              </div>
            )}
          </form>
        </Form>
      </section>
    </FramerModal>
  );
};

export default FeedbackModalForm;

// Custom field component to render star rating fields
const CustomFormField = ({ form, fieldName, loading }) => {
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
              edit={!loading}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
