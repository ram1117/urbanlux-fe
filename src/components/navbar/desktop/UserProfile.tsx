"use client";

import { Button } from "@/components/ui/button";
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

  return (
    <ul className="z-[999]">
      {!user && (
        <li className="text-dark">
          <div className="w-full">
            <Button variant={"outline"} className="rounded-none w-max">
              <Link href={"/auth/signin"} className="font-semibold">
                Sign In
              </Link>
            </Button>
          </div>
        </li>
      )}
      {user && (
        <li className="flex flex-col">
          <p className="capitalize font-light">Hi {user.split(" ")[0]}</p>
          <Link href={"/profile"} className="py-2 font-medium">
            Profile
          </Link>
          <Link href={"/orders"} className="py-2 font-medium">
            Orders
          </Link>
          <Button
            variant={"outline"}
            onClick={handleSignOut}
            className="rounded-none w-max"
          >
            Sign Out
          </Button>
        </li>
      )}
    </ul>
  );
};

export default UserProfile;
