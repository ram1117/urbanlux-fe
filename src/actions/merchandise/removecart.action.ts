"use server";

import { ICartItem } from "@/interfaces";
import { CART_KEY } from "@/lib/constants";
import { cookies } from "next/headers";

const RemoveCartAction = async (id: string) => {
  const prev = cookies().get(CART_KEY);
  console.log(prev?.value);
  if (prev) {
    const items: ICartItem[] = JSON.parse(prev.value);
    const payload = items.filter((item) => item.merchandise !== id);

    console.log(payload);
    cookies().set({
      name: CART_KEY,
      value: JSON.stringify([...payload]),
      httpOnly: true,
    });
  }
};

export default RemoveCartAction;
