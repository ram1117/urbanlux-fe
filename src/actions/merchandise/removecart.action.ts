"use server";

import { ICartItem } from "@/interfaces";
import { CART_KEY } from "@/lib/constants";
import { cookies } from "next/headers";

const RemoveCartAction = async (id: string) => {
  const prev = cookies().get(CART_KEY);
  if (prev) {
    const items: ICartItem[] = JSON.parse(prev.value);
    const payload = items.filter((item) => item.merchandise !== id);

    cookies().set({
      name: CART_KEY,
      value: JSON.stringify([...payload]),
      httpOnly: true,
    });
  }
};

export default RemoveCartAction;
