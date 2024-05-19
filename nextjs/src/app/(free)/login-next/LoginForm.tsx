"use client";

import { redirect } from "next/navigation";
import { authenticate } from "./actions";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, true);

  if (!state) {
    redirect("/login");
  }

  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button aria-disabled={pending}>
      {pending ? "ログイン中" : "ログインして処理を続行します"}
    </button>
  );
}
