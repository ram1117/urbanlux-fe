"use client";

import { Button } from "@/components/ui/button";
import { MenubarContent } from "@/components/ui/menubar";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserInfo } from "@/hooks/usersession.hooks";
import { signOutUser } from "@/lib/firebase/firebase.auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const user = useUserInfo();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (user === null || user) setLoading(false);
  }, [user]);

  const router = useRouter();
  const handleSignOut = async () => {
    await signOutUser();
    router.refresh();
  };

  if (loading) {
    return (
      <ul className="z-[999] me-2 rounded-none grid grid-cols-1 gap-4 p-4">
        <Skeleton className="w-full h-3 bg-neutral-400"></Skeleton>
        <Skeleton className="w-full h-3 bg-neutral-400"></Skeleton>
        <Skeleton className="w-full h-3 bg-neutral-400"></Skeleton>
      </ul>
    );
  }

  if (!user)
    return (
      <MenubarContent asChild className="text-dark">
        <div className="w-full">
          <Button variant={"outline"} className="rounded-none w-max">
            <Link href={"/auth/signin"} className="font-semibold">
              Sign In
            </Link>
          </Button>
        </div>
      </MenubarContent>
    );

  return (
    <div className="z-[999]">
      {" "}
      <p className="capitalize font-light">Hi {user.split(" ")[0]}</p>
      <MenubarContent asChild>
        <Link href={"/profile"} className="py-2 font-medium">
          Profile
        </Link>
      </MenubarContent>
      <MenubarContent asChild>
        <Link href={"/orders"} className="py-2 font-medium">
          Orders
        </Link>
      </MenubarContent>
      <MenubarContent asChild>
        <Button
          variant={"outline"}
          onClick={handleSignOut}
          className="rounded-none w-max"
        >
          Sign Out
        </Button>
      </MenubarContent>
    </div>
  );
};

export default UserProfile;
