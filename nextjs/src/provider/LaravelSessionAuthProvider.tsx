import { checkSession } from "@/shared/laravel/api/checkSession";
import { redirect } from "next/navigation";

export async function LaravelSessionAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthedInLaravel = await checkSession();
  if (!isAuthedInLaravel) {
    console.log('not logged laravel');
    return redirect("/login");
  }
  return <>{children}</>;
}
