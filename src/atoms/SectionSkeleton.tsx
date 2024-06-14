import { Skeleton } from "@/components/ui/skeleton";

const SectionSkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 h-[45vh]">
      <Skeleton className="w-full h-full"></Skeleton>
      <Skeleton className="w-full h-full"></Skeleton>
    </div>
  );
};

export default SectionSkeleton;
