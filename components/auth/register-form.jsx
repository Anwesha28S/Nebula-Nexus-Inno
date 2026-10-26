"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/app/actions/register";
import { signIn } from "next-auth/react"; 
import { useRouter } from "next/navigation"; 

export const RegisterForm = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      rollno: "",
      institute: "",
    },
  });

  const onSubmit = (values) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register( values )
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        });
    });
  };

  return (
    <CardWrapper headerLabel="Create an account">
      <Form {...form}>
        <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="register-form flex flex-col">
          <div className="register-fields flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="required-label">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      autoComplete="off"
                      placeholder="Arun Singh"
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
                <FormItem>
                  <FormLabel className="required-label">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      autoComplete="off"
                      placeholder="arunsingh@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="required-label">Phone</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      autoComplete="off"
                      placeholder="1234567890"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rollno"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Roll No</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      autoComplete="off"
                      placeholder="125EC0057"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institute"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institute Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      autoComplete="on"
                      placeholder="National Institute of Technology, Rourkela"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="w-full flex justify-center">
            <button disabled={isPending} type="submit" className="register-submit">
              Start Game
            </button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};
