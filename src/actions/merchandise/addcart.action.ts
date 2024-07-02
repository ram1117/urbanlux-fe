"use server";

import { IAddCartFormState, ICartItem } from "@/interfaces";
import { CART_KEY, CART_LIMIT } from "@/lib/constants";
import { cookies } from "next/headers";
import { z } from "zod";

const validationSchema = z.object({
  inventory: z
    .string({ message: "size required" })
    .min(8, { message: "size required" }),
  quantity: z.string().min(1, { message: "quantity required" }),
});

const AddCartAction = async (
  merchandise: string,
  image: string,
  name: string,
  price: number,
  size: string,
  formState: IAddCartFormState,
  formData: FormData,
): Promise<IAddCartFormState> => {
  const validation = validationSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  let payload: ICartItem[] = [];

  const prev = cookies().get(CART_KEY);
  if (prev) {
    payload = [...JSON.parse(prev.value)];
    if (payload.length >= CART_LIMIT)
      return { errors: { _form: ["reached max cart limit"] } };
  }
  const existingItemIndex = payload.findIndex(
    (item) => item.merchandise === merchandise,
  );
  if (existingItemIndex === -1) {
    payload = [
      ...payload,
      {
        merchandise,
        inventory: validation.data.inventory,
        quantity: validation.data.quantity,
        image,
        name,
        price,
        size,
      },
    ];
  } else {
    payload[existingItemIndex].inventory = validation.data.inventory;
    payload[existingItemIndex].quantity = validation.data.quantity;
    payload[existingItemIndex].price = price;
    payload[existingItemIndex].size = size;
  }

  cookies().set({
    name: CART_KEY,
    value: JSON.stringify(payload),
    httpOnly: true,
  });
  return { errors: {} };
};

export default AddCartAction;
