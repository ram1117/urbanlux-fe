import { Skeleton } from "../ui/skeleton";

const BrandSkeleton = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <Skeleton className="w-full h-2"></Skeleton>
      <Skeleton className="w-full h-2"></Skeleton>
      <Skeleton className="w-full h-2"></Skeleton>
      <Skeleton className="w-full h-2"></Skeleton>
      <Skeleton className="w-full h-2"></Skeleton>
    </div>
  );
};

export default BrandSkeleton;
