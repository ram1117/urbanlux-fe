"use server";

import { ICancelOrderFormState } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { cancelOrder } from "@/lib/api/apiurls";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import { revalidatePath } from "next/cache";

const CancelOrderAction = async (
  orderid: string,
): Promise<ICancelOrderFormState> => {
  try {
    const { currentUser } = await getAuthenticatedAppForUser();
    const resposne = await makeApiRequest(
      API_METHODS.PATCH,
      cancelOrder(orderid),
      {},
      await currentUser?.getIdToken(),
    );

    if (!resposne?.ok) {
      const error = await resposne?.json();
      return { success: false, errors: { _form: [error.message] } };
    }
  } catch (error) {
    if (error instanceof Error)
      return { success: false, errors: { _form: [error.message] } };
    return { success: false, errors: { _form: ["Something went wrong"] } };
  }
  revalidatePath(`/account/orders/${orderid}`);
  return {
    success: true,
    errors: {},
    message: "order cancelled",
  };
};

export default CancelOrderAction;
