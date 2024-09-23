"use client";
// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";

// Components
import { Modal, ModalBody, ModalContent } from "@/components/ui/animated-modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { addSpaceBeforeUppercase } from "@/lib/reviews";
import { ratingSchema } from "@/schema/comment.schema";

const FeedbackModalForm = ({ isOpen, setOpen, modalControl }) => {
  // Initialize form with validation schema and default values
  const form = useForm({
    resolver: zodResolver(ratingSchema),
  });

  // Fields for ratings
  const fields = [
    "location",
    "amenities",
    "food",
    "price",
    "rooms",
    "tourOperator",
  ];

  // Function to handle form submission
  function onSubmit(data) {
    // Do your stuff
    setTimeout(() => {
      console.log(data);
      modalControl();
    }, 2000);
  }
  return (
    <Modal open={isOpen} setOpen={setOpen}>
      <ModalBody>
        <ModalContent>
          <div>
            <h3 className="text-[30px] font-inter font-medium text-tourHub-green-dark">
              Feedback
            </h3>
            <p className="text-14px text-tourHub-title2 font-normal font-inter">
              How was your experiences?
            </p>
          </div>

          <section className="mt-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-8 lg:gap-10"
              >
                {/* Map through the fields for rating */}
                {fields.map((fieldName) => (
                  <FormField
                    key={fieldName}
                    control={form.control}
                    name={fieldName}
                    render={({ field }) => (
                      <FormItem>
                        <h3 className="text-[20px] text-tourHub-title2 font-inter font-normal first-letter:uppercase">
                          {addSpaceBeforeUppercase(fieldName)}
                        </h3>
                        <FormControl>
                          <ReactStars
                            count={5}
                            onChange={(value) => {
                              field.onChange(value);
                            }}
                            size={28}
                            activeColor="#ffd700"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}

                {/* Submit button for ratings form */}
                <div className="w-full flex justify-end col-span-2 lg:col-span-3">
                  <Button className="py-6 px-12  w-full md:w-fit bg-tourHub-green-dark">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </section>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default FeedbackModalForm;
