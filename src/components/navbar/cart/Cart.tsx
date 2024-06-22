import ImageWrapper from "@/atoms/ImageWrapper";
import Link from "next/link";
import IconCart from "@public/icons/icon-cart.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { cookies } from "next/headers";
import { CART_KEY } from "@/lib/constants";
import { ICartItem } from "@/interfaces";
import { Button } from "../../ui/button";
import CartItem from "./CartItem";

const Cart = () => {
  let items: ICartItem[] = [];
  const cartcookie = cookies().get(CART_KEY)?.value;
  if (cartcookie) {
    items = JSON.parse(cartcookie);
  }

  const hasItems = items.length > 0;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative flex gap-1 items-center">
          <ImageWrapper
            src={IconCart}
            alt="Cart Icon"
            imageSize="h-6 w-6 lg:h-8 lg:w-8"
            sizes="10vw"
          />
          <p className="absolute right-1/2 -top-2 text-xs rounded-full  text-light font-bold">
            {items.length}
          </p>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b py-2 mb-4 space-y-0">
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>Your cart items</SheetDescription>
        </SheetHeader>
        <div className="max-h-screen overflow-auto">
          {!hasItems && <p className="italic">Your cart is empty</p>}
          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <CartItem item={item} key={item.image}></CartItem>
            ))}
          </ul>
          <div className="flex items-center justify-center my-8">
            <Button disabled={items.length === 0}>
              <Link href={`/checkout`}>Checkout</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
