"use server";

import { ICartItem, IPlaceOrderItem } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { placeOrder } from "@/lib/api/apiurls";
import { CART_KEY } from "@/lib/constants";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import { cookies } from "next/headers";

const PlaceOrderAction = async (
  cartItems: ICartItem[],
  delivery_address: string,
  billing_address: string,
) => {
  const items: IPlaceOrderItem[] = cartItems.map((item: ICartItem) => ({
    inventory: item.inventory,
    merchandise: item.merchandise,
    quantity: parseInt(item.quantity, 10),
  }));

  const { currentUser } = await getAuthenticatedAppForUser();
  const bodyData = { items, delivery_address, billing_address };
  try {
    const response = await makeApiRequest(
      API_METHODS.POST,
      placeOrder(),
      bodyData,
      await currentUser?.getIdToken(),
    );

    if (!response?.ok) {
      const error = await response?.json();
      return { error: true, message: error.message };
    }
    const orderData = await response.json();
    cookies().delete(CART_KEY);
    return { error: false, success: true, data: orderData };
  } catch (error) {
    if (error instanceof Error) return { error: true, message: error.message };
    return { error: true, message: "Something went wrong" };
  }
};

export default PlaceOrderAction;
