import { LaravelSessionAuthProvider } from "@/provider/LaravelSessionAuthProvider";

export default async function AuthedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LaravelSessionAuthProvider>
      <html lang="ja">
        <body>{children}</body>
      </html>
    </LaravelSessionAuthProvider>
  );
}
