import { IBrandItem } from "@/interfaces";
import ImageWrapper from "@/atoms/ImageWrapper";
import Link from "next/link";
interface BrandItemProps {
  brandItem: IBrandItem;
}

const BrandItem = ({ brandItem }: BrandItemProps) => {
  return (
    <li className="w-full p-4 border rounded-md">
      <Link href={`/brands/${brandItem._id}`}>
        <ImageWrapper
          src={brandItem.logo}
          alt={"Brand Logo"}
          imageSize="w-full aspect-square"
          sizes="(max-width:768px) 50vw,30vw"
        ></ImageWrapper>
        <h4 className="capitalize mt-4 text-sm md:text-base font-semibold">
          {brandItem.name}
        </h4>
      </Link>
    </li>
  );
};

export default BrandItem;
