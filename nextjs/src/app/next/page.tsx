"use client";

import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

export default function Page() {
  const session = useSession();
  console.table(session);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/next/example");
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <>
      <h1>session</h1>
      <div></div>
    </>
  );
}
