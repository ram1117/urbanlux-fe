"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      router.push("/account/orders");
    }, 2 * 1000);
    return () => clearTimeout(timeoutID);
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 max-w-[1440px] mx-auto">
      <h1>Payment Succeeded</h1>
      <h2>We will let you know, when your order is dispatched</h2>
    </main>
  );
};

export default Page;
