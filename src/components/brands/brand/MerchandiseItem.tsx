import ImageWrapper from "@/atoms/ImageWrapper";
import { IMerchandiseItem } from "@/interfaces";
import Link from "next/link";

interface ItemProps {
  item: IMerchandiseItem;
}

const MerchandiseItem = ({ item }: ItemProps) => {
  return (
    <li className="flex flex-col">
      <Link href={`/item/${item._id}`}>
        <ImageWrapper
          src={item.thumbnail}
          alt={"product image"}
          imageSize={"w-full aspect-square border"}
          sizes="(max-width:768px) 100vw,40vw"
        ></ImageWrapper>
        <p className="font-semibold">{item.brand.name}</p>
        <p>{item.name}</p>
      </Link>
    </li>
  );
};

export default MerchandiseItem;
