import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center my-20">
      <h1 className="text-2xl">Sorry.Couldn&apos;t find the requested page</h1>

      <Button variant={"link"}>
        <Link href={"/"} className="text-xl my-4">
          Home Page
        </Link>
      </Button>
    </main>
  );
};

export default NotFound;
