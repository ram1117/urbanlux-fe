"use client";

import { Button } from "@/components/ui/button";
import { MenubarItem, MenubarContent } from "@/components/ui/menubar";
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
      <MenubarContent className="z-[999] bg-dark me-2 rounded-none grid grid-cols-1 gap-2 p-4">
        <Skeleton className="w-full h-3 bg-neutral-700"></Skeleton>
        <Skeleton className="w-full h-3 bg-neutral-700"></Skeleton>
        <Skeleton className="w-full h-3 bg-neutral-700"></Skeleton>
      </MenubarContent>
    );
  }

  return (
    <MenubarContent className="z-[999] me-2 rounded-none grid grid-cols-1 gap-2 bg-dark">
      {!user && (
        <MenubarItem className="hover:text-dark focus:text-dark focus:bg-dark">
          <div className="flex flex-col gap-4 text-light w-full">
            <Button variant={"secondary"} className="rounded-none">
              <Link href={"/auth/signin"} className="font-semibold">
                Sign In
              </Link>
            </Button>
          </div>
        </MenubarItem>
      )}
      {user && (
        <MenubarItem className="hover:text-dark focus:bg-dark">
          <div className="flex flex-col gap-4 text-light w-full font-semibold">
            <p className="capitalize font-light text-lg text-center underline underline-offset-8">
              Hi {user.split(" ")[0]}
            </p>
            <Link
              href={"/profile"}
              className="py-2 hover:bg-light hover:text-dark text-center"
            >
              Profile
            </Link>
            <Link
              href={"/orders"}
              className="py-2 hover:bg-light hover:text-dark text-center"
            >
              Orders
            </Link>
            <Button
              variant={"secondary"}
              onClick={handleSignOut}
              className="rounded-none"
            >
              Sign Out
            </Button>
          </div>
        </MenubarItem>
      )}
    </MenubarContent>
  );
};

export default UserProfile;
