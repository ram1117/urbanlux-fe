import MerchandiseItem from "./MerchandiseItem";
import { Skeleton } from "@/components/ui/skeleton";
import { IMerchandiseItem } from "@/interfaces";

interface MerchContainerProps {
  items: IMerchandiseItem[];
  loading: boolean;
}

const LoadingSkeleton = (
  <ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <li>
      <Skeleton className="w-full aspect-square "></Skeleton>
    </li>
    <li>
      <Skeleton className="w-full aspect-square "></Skeleton>
    </li>
    <li>
      <Skeleton className="w-full aspect-square "></Skeleton>
    </li>
  </ul>
);

const MerchContainer = ({ items, loading }: MerchContainerProps) => {
  const hasItems = items.length > 0;

  return (
    <div>
      {loading && LoadingSkeleton}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {items.map((item: IMerchandiseItem) => (
          <MerchandiseItem key={item._id} item={item}></MerchandiseItem>
        ))}
        {!hasItems && !loading && (
          <p className="m-4 text-lg italic">No Items Found</p>
        )}
      </ul>
    </div>
  );
};

export default MerchContainer;
