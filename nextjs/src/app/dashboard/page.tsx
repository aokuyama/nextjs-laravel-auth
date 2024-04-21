import { signOut } from "@/auth";

export default function Page() {
  return (
    <>
      <h1>dashboard</h1>
      <div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button>ログアウト</button>
          <a href="/home">Home</a>
        </form>
      </div>
    </>
  );
}
