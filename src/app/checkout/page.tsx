import CheckoutSection from "@/components/checkoutpage/CheckoutSection";
import { ICartItem } from "@/interfaces";
import { CART_KEY } from "@/lib/constants";
import { cookies } from "next/headers";

const Page = async () => {
  const itemcookies = cookies().get(CART_KEY);
  let items: ICartItem[] = [];
  if (itemcookies) {
    items = [...JSON.parse(itemcookies.value)];
  }
  return (
    <main className="min-h-screen max-w-[1440px] mx-auto">
      <CheckoutSection cartitems={items}></CheckoutSection>
    </main>
  );
};

export default Page;
