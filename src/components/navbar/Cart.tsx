import ImageWrapper from "@/atoms/ImageWrapper";
import Link from "next/link";
import IconCart from "@public/icons/icon-cart.svg";

const Cart = () => {
  return (
    <Link href="/cart" className="px-6">
      <ImageWrapper
        src={IconCart}
        alt="Cart Icon"
        imageSize="h-4 w-4 md:h-6 md:w-6"
        sizes="10vw"
      />
    </Link>
  );
};

export default Cart;
