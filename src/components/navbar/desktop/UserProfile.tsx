"use client";

import { Button } from "@/components/ui/button";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Skeleton } from "@/components/ui/skeleton";
import { useUserSession } from "@/hooks/usersession.hooks";
import { signOutUser } from "@/lib/firebase/firebase.auth";
import Link from "next/link";
import ImageWrapper from "@/atoms/ImageWrapper";
import IconUser from "@public/icons/iconuser.svg";

interface UserProfileProps {
  initialUser: any;
}

const UserProfile = ({ initialUser }: UserProfileProps) => {
  const { user, loading } = useUserSession(initialUser);

  const handleSignOut = async () => {
    await signOutUser();
    window.location.reload();
  };

  return (
    <MenubarMenu>
      <MenubarTrigger className="focus:bg-dark focus:text-light data-[state=open]:bg-dark data-[state=open]:text-light px-0">
        <ImageWrapper
          src={IconUser}
          alt="Bookmark Icon"
          imageSize="h-6 w-6"
          sizes="10vw"
        />
      </MenubarTrigger>
      {loading && (
        <MenubarContent>
          <Skeleton className="h-2 w-full"></Skeleton>
          <Skeleton className="h-2 w-full"></Skeleton>
          <Skeleton className="h-2 w-full"></Skeleton>
        </MenubarContent>
      )}
      {!user && !loading && (
        <MenubarContent className="flex flex-col items-center py-4">
          <MenubarItem asChild>
            <Button>
              <Link href={"/auth/signin"}>Sign In</Link>
            </Button>
          </MenubarItem>
        </MenubarContent>
      )}
      {user && !loading && (
        <MenubarContent className=" py-4">
          <div className="z-[999] w-full flex flex-col items-center gap-4">
            {" "}
            <p className="capitalize font-light">Hi</p>
            <MenubarItem asChild className="w-full justify-center">
              <Link
                href={"/account/profile"}
                className="py-2 font-medium text-center"
              >
                Profile
              </Link>
            </MenubarItem>
            <MenubarItem asChild className="w-full justify-center">
              <Link
                href={"/account/orders"}
                className="py-2 font-medium text-center"
              >
                Orders
              </Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Button
                variant={"default"}
                onClick={handleSignOut}
                className="rounded-none w-max"
              >
                Sign Out
              </Button>
            </MenubarItem>
          </div>
        </MenubarContent>
      )}
    </MenubarMenu>
  );
};

export default UserProfile;
