import CheckoutSection from "@/components/checkoutpage/CheckoutSection";
import { Button } from "@/components/ui/button";
import { ICartItem } from "@/interfaces";
import { CART_KEY } from "@/lib/constants";

import { cookies } from "next/headers";
import Link from "next/link";

const Page = async () => {
  const itemcookies = cookies().get(CART_KEY);
  let items: ICartItem[] = [];
  if (itemcookies) {
    items = [...JSON.parse(itemcookies.value)];
  }

  const hasItems = items.length !== 0;
  return (
    <main className="min-h-screen max-w-[1440px] mx-auto">
      {!hasItems && (
        <section className="flex min-h-[50vh] flex-col items-center justify-center my-10 gap-4">
          <h2 className="text-2xl">No Items to checkout</h2>
          <div className="flex gap-4">
            <Button>
              <Link href={"/categories"}>Our Range</Link>
            </Button>
            <Button>
              <Link href={"/brands"}>Our Brands</Link>
            </Button>
          </div>
        </section>
      )}
      {hasItems && <CheckoutSection cartitems={items}></CheckoutSection>}
    </main>
  );
};

export default Page;
