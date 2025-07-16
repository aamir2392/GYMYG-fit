"use client";

import type React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  type: z.enum(["client", "trainer", "other"], {
    required_error: "Please select an option",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      type: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    console.log(data);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-gray-50 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-900">
          Message sent!
        </h3>
        <p className="mt-2 text-gray-600">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false);
            reset(); // Reset all form fields to their default values
          }}
          className="mt-6 bg-primary hover:bg-primary-100 text-white"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-rose-500">*</span>
            </Label>
            <Input
              id="firstName"
              {...register("firstName")}
              className="w-full"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-sm text-rose-500">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-rose-500">*</span>
            </Label>
            <Input
              id="lastName"
              {...register("lastName")}
              className="w-full"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="text-sm text-rose-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-rose-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="w-full"
            placeholder="john.doe@example.com"
          />
          {errors.email && (
            <p className="text-sm text-rose-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">
            Client or Trainer? <span className="text-rose-500">*</span>
          </Label>
          <Select
            onValueChange={(value) => {
              setValue("type", value as "client" | "trainer" | "other");
              clearErrors("type"); // Clear the error for type when a value is selected
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="client">Client</SelectItem>
              <SelectItem value="trainer">Trainer</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.type && (
            <p className="text-sm text-rose-500">{errors.type.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Message <span className="text-rose-500">*</span>
          </Label>
          <Textarea
            id="message"
            {...register("message")}
            className="min-h-[120px] w-full resize-none"
            placeholder="How can we help you?"
          />
          {errors.message && (
            <p className="text-sm text-rose-500">{errors.message.message}</p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary h-12 hover:bg-primary-100 text-white"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
