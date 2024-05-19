"use server";

import { signIn } from "@/auth";

export async function authenticate(prevState: boolean, formData: FormData) {
  try {
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes("credentialssignin")) {
      return false;
    }
    throw error;
  }
  return true;
}
