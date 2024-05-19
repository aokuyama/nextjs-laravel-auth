"use client";

import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/next/example");
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <>
      <h1>next</h1>
      <div></div>
    </>
  );
}
