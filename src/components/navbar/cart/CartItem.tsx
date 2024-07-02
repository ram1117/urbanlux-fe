import ImageWrapper from "@/atoms/ImageWrapper";
import { ICartItem } from "@/interfaces";
import RemoveItemForm from "./RemoveItemForm";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";

interface CartItemProps {
  item: ICartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  return (
    <li className="grid grid-cols-5 border-b py-2">
      <div className="col-span-1 flex items-center justify-center">
        <ImageWrapper
          src={item.image}
          alt={"item image"}
          imageSize={"w-12 aspect-square"}
          sizes="(max-width:768px)20vw,10vw"
        ></ImageWrapper>
      </div>
      <div className="col-span-3">
        <SheetClose asChild>
          <Link href={`/item/${item.merchandise}`}>
            <p className="text-base ">{item.name}</p>
            <p className="text-sm italic">Qty: {item.quantity}</p>
          </Link>
        </SheetClose>
      </div>
      <div className="cols-span-1 flex items-center justify-center">
        <RemoveItemForm id={item.merchandise}></RemoveItemForm>
      </div>
    </li>
  );
};

export default CartItem;
