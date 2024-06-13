import { Skeleton } from "../ui/skeleton";

const MenuSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Skeleton className="w-11/12 h-4"></Skeleton>
      <Skeleton className="w-11/12 h-4"></Skeleton>
      <Skeleton className="w-11/12 h-4"></Skeleton>
    </div>
  );
};
export default MenuSkeleton;
