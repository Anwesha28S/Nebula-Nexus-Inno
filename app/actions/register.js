"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { signIn } from "@/auth";
export const register = async (values) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, name ,phone , rollno ,institute } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if(existingUser){
    return { error: "User already exists!" };
  }
  await db.user.create({
    data: {
      email,
      name,
      phone ,
      rollno ,
      institute
    }
  });
  try {
    const signInResponse = await signIn("credentials", {
      redirect: false,  
      email,
    });

    if (!signInResponse || signInResponse.error) {
      console.error("Sign-in error:", signInResponse.error);
      return { error: "Sign-in failed!" };
    }

  } catch ( error ) {
    console.error("Sign-in error:", error);
    return { error: "Something went wrong during sign-in!" };
  }
  return { success: true };
};