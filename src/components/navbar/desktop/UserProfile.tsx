"use client";

import { Button } from "@/components/ui/button";
import { MenubarItem, MenubarContent } from "@/components/ui/menubar";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserSession } from "@/hooks/usersession.hooks";
import { signOutUser } from "@/lib/firebase/firebase.auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const user = useUserSession();
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
    <MenubarContent className="z-[999] bg-dark me-2 rounded-none grid grid-cols-1 gap-2">
      {!user && (
        <MenubarItem className="text-light">
          <Button variant={"default"} className="rounded-none">
            <Link href={"/auth/signin"} className="font-semibold">
              Sign In
            </Link>
          </Button>
        </MenubarItem>
      )}
      {user && (
        <MenubarItem>
          <Button
            variant={"secondary"}
            onClick={handleSignOut}
            className="rounded-none"
          >
            Sign Out
          </Button>
        </MenubarItem>
      )}
    </MenubarContent>
  );
};

export default UserProfile;
