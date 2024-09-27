"use client";

// Packages
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useForm } from "react-hook-form";

// Components
import ImageUpload from "@/components/common/single-image-upload-with-edgestore";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { commentSchema } from "../../../../schema/comment.schema";
import PackageSectionTitle from "./package_section_title";
const FeedbackModalForm = dynamic(() => import("./package_ratings_modal"), {
  ssr: false,
});

const PackageCommentBox = ({ packageId }) => {
  const [isOpen, setOpen] = useState(false); // State to control modal visibility

  // Optimized mutation to handle form submission
  const { mutate, isPending } = useMutation({
    mutationKey: ["comment", packageId],
    mutationFn: async (data) => {
      // Use async/await to handle promise instead of .then()
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        toast.error("Failed to submit comment");
      }
      return await res.json();
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong");
    },
    onSuccess: (data) => {
      form.reset();
      setOpen(true); // Open modal on success
    },
  });

  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  // Initialize form with validation schema and default values
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      tourPackageId: packageId,
      clerkId: user?.id, // Optional chaining to handle possible null values
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <>
      <div className="mt-14">
        <PackageSectionTitle title="Leave a Reply" />
        <p className="font-normal text-14px leading-28px">
          Your email address will not be published. Required fields are marked *
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" grid grid-cols-2 gap-5 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Input
                      placeholder="Title"
                      {...field}
                      className="h-[55px] w-full border-[1px] border-[#E7E6E6] rounded-12px focus-visible:ring-[#295943] text-16px leading-[16px] font-medium text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormControl>
                    <Textarea
                      placeholder="Comment"
                      {...field}
                      className=" min-h-[110px] mt-2 w-full border-[1px] border-[#E7E6E6] rounded-12px focus-visible:ring-[#295943] text-16px leading-[16px] font-medium text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="images"
              render={({ field }) => (
                <FormItem className="col-span-2">
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
            <Button
              className="text-white mt-2 hover:bg-tourHub-green-light duration-300 h-[45px] md:h-[55px]"
              variant="comment"
              size="comment"
              type="submit"
              disabled={isPending}
            >
              Post Comment
            </Button>
          </form>
        </Form>
      </div>
      <FeedbackModalForm
        isOpen={isOpen}
        setIsOpen={setOpen}
        packageId={packageId}
      />
    </>
  );
};

export default PackageCommentBox;
