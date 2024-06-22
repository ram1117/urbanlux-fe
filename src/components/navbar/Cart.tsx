import ImageWrapper from "@/atoms/ImageWrapper";
import Link from "next/link";
import IconCart from "@public/icons/icon-cart.svg";

const Cart = () => {
  return (
    <Link href="/cart" className="">
      <ImageWrapper
        src={IconCart}
        alt="Cart Icon"
        imageSize="h-6 w-6 lg:h-8 lg:w-8"
        sizes="10vw"
      />
    </Link>
  );
};

export default Cart;
