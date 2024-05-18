"use client";

import { authenticate } from "./actions";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, true);

  return (
    <form action={formAction}>
      <label>
        メールアドレス:
        <input type="email" name="email" />
      </label>
      <label>
        パスワード:
        <input type="password" name="password" />
      </label>
      {!state && <div>メールアドレスかパスワードが違います。</div>}
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button aria-disabled={pending}>
      {pending ? "ログイン中" : "ログインする"}
    </button>
  );
}
