"use client";
// Packages
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// Components
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  email: z.string().email(),
  message: z.string(),
});
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templeteId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLETE_ID;
    const publishKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLISH_KEY;
    setLoading(true);
    emailjs
      .sendForm(serviceId, templeteId, formRef.current, {
        publicKey: publishKey,
      })
      .then(() => toast.success("Email sent successfully"))
      .catch((error) => toast.error("Failed to sent email"))
      .finally(() => {
        setLoading(false);
        form.reset();
      });
  };
  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-7"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your Name" />
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
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your Email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="min-h-[110px]"
                  placeholder="Type your message here.."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full bg-tourHub-green-dark hover:bg-tourHub-green-hover"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
