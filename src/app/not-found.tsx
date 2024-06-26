import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center my-20 p-4 lg:p-6">
      <h1 className="text-center text-lg lg:text-2xl">
        Sorry. Couldn&apos;t find the requested page
      </h1>

      <Button className="my-6 text-sm lg:text-base">
        <Link href={"/"}>Home Page</Link>
      </Button>
    </main>
  );
};

export default NotFound;
