"use client";

import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/firebase/firebase.auth";

const Page = () => {
  const handleClick = async () => {
    signOutUser();
  };

  return (
    <main className="min-h-screen">
      <Button onClick={handleClick}>Sign Out</Button>
    </main>
  );
};

export default Page;
