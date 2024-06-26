"use server";

import { IAddAddressFormState } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { addAddress } from "@/lib/api/apiurls";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const validationSchema = z.object({
  label: z.string().min(4, { message: "required" }),
  line1: z.string().min(4, { message: "required" }),
  line2: z.string().min(4, { message: "required" }),
  city: z.string().min(4, { message: "required" }),
  state: z.string().min(4, { message: "required" }),
  postal_code: z.string().min(4, { message: "required" }),
  country: z.string().min(4, { message: "required" }),
  address_type: z.string().min(2, { message: "required" }),
});

const AddAddressAction = async (
  pathname: string,
  formState: IAddAddressFormState,
  formData: FormData,
): Promise<IAddAddressFormState> => {
  const validation = validationSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!validation.success)
    return { success: false, errors: validation.error.flatten().fieldErrors };

  try {
    const { currentUser } = await getAuthenticatedAppForUser();
    const response = await makeApiRequest(
      API_METHODS.POST,
      addAddress(),
      validation.data,
      await currentUser?.getIdToken(),
    );

    if (!response?.ok) {
      const error = await response?.json();
      return { success: false, errors: { _form: [error.message] } };
    }
  } catch (error) {
    if (error instanceof Error)
      return { success: false, errors: { _form: [error.message] } };
    return { success: false, errors: { _form: ["something went wrong"] } };
  }
  revalidatePath(pathname);
  return { success: true, errors: {} };
};

export default AddAddressAction;
