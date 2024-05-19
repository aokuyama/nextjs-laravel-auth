import { logout } from "@/shared/logout";

export default function Page() {
  return (
    <>
      <h1>dashboard</h1>
      <div>
        <form
          action={async () => {
            "use server";
            await logout();
          }}
        >
          <button>ログアウト</button>
          <a href="/home">Home</a>
        </form>
      </div>
    </>
  );
}
