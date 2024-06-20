import { IBrandItem } from "@/interfaces";
import ImageWrapper from "@/atoms/ImageWrapper";
import { Button } from "../ui/button";
import Link from "next/link";
interface BrandItemProps {
  brandItem: IBrandItem;
  index: number;
}

const BrandItem = ({ brandItem, index }: BrandItemProps) => {
  const order = index % 2 === 0 ? "lg:order-first" : "lg:order-last";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div className={`w-full col-span-1 lg:col-span-2 ${order}`}>
        <ImageWrapper
          src={brandItem.logo}
          alt={"Brand Logo"}
          imageSize="w-full aspect-video"
          sizes="100vw"
        ></ImageWrapper>
      </div>
      <div className="col-span-1 bg-dark text-light flex flex-col gap-6 h-full w-full py-4 lg:py-12 p-4">
        <h2 className="font-cantarell w-full text-left text-2xl lg:text-4xl font-semibold lg:font-bold">
          {brandItem.name}
        </h2>
        <p className="text-lg">{brandItem.description}</p>
        <Button
          variant={"outline"}
          className="bg-transparent w-max px-6 rounded-none"
        >
          <Link href={`/brands/${brandItem._id}`}>Brand Store</Link>
        </Button>
      </div>
    </div>
  );
};

export default BrandItem;
