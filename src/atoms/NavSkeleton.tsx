import { Skeleton } from "@/components/ui/skeleton";

const NavSkeleton = () => {
  return (
    <ul className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Skeleton className="h-4 w-20"></Skeleton>
      <Skeleton className="h-4 w-20"></Skeleton>
      <Skeleton className="h-4 w-20"></Skeleton>
    </ul>
  );
};

export default NavSkeleton;
