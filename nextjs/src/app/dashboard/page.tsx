import { logout } from "@/shared/laravel/api/logout";
import { redirect } from 'next/navigation'

export default function Page() {
  return (
    <>
      <h1>dashboard</h1>
      <div>
        <form
          action={async () => {
            "use server";
            await logout();
            redirect('/login');
          }}
        >
          <button>ログアウト</button>
          <a href="/home">Home</a>
        </form>
      </div>
    </>
  );
}
