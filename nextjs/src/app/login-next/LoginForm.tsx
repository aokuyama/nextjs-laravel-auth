"use client";

import { authenticate } from "./actions";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, true);

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
