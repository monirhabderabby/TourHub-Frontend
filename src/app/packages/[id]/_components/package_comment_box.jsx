"use client";

// Packages
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Components
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
import { commentSchema } from "@/schema/comment.schema";
import PackageSectionTitle from "./package_section_title";

const PackageCommentBox = () => {
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      name: "Monir Hossain (Default)",
      email: "demo@gmail.com",
    },
  });

  function onSubmit(data) {
    // Do your stuff
    console.log(data);
  }
  return (
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
            name="name"
            render={({ field }) => (
              <FormItem className="col-span-2 md:col-span-1">
                <FormControl>
                  <Input
                    placeholder="Name"
                    {...field}
                    className="h-[55px] w-full border-[1px] border-[#E7E6E6] rounded-12px focus-visible:ring-[#295943] text-16px leading-[16px] font-medium text-black "
                    disabled
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
              <FormItem className="col-span-2 md:col-span-1">
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="h-[55px] w-full border-[1px] border-[#E7E6E6] rounded-12px focus-visible:ring-[#295943] text-16px leading-[16px] font-medium text-black"
                    disabled={true}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button
            type="submit"
            className="text-white mt-2 hover:bg-tourHub-green-light duration-300 "
            variant="comment"
            size="comment"
          >
            Post Comment
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PackageCommentBox;
