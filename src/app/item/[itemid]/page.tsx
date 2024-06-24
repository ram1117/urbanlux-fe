import ItemSection from "@/components/itempage/ItemSection";
import { ICartItem } from "@/interfaces";
import { CART_KEY } from "@/lib/constants";
import { cookies } from "next/headers";

const Page = ({ params }: { params: { itemid: string } }) => {
  const itemid = params.itemid;

  let existingItem: ICartItem | undefined;
  const cartCookies = cookies().get(CART_KEY);
  if (cartCookies) {
    existingItem = JSON.parse(cartCookies.value).find(
      (item: ICartItem) => item.merchandise === itemid,
    );
  }

  return (
    <main className="min-h-screen bg-light text-dark">
      <ItemSection itemid={itemid} existingItem={existingItem}></ItemSection>
    </main>
  );
};

export default Page;
