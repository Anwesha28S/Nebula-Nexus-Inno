import * as z from 'zod';

export const RegisterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter a valid Gmail address" })
    .refine((email) => email.toLowerCase().endsWith("@gmail.com"), {
      message: "Enter a valid Gmail address",
    }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
  phone: z.string().length(10, {
    message: "Phone number must be exactly 10 digits",
  }),
  rollno: z.string().optional(), // No constraints
  institute: z.string().optional(), // No constraints
});
