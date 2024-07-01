"use server";

import { ISavedItem } from "@/interfaces";
import { SAVED_KEY, SAVED_LIMIT } from "@/lib/constants";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

const AddFavoriteAction = async (
  id: string,
  name: string,
  thumbnail: string,
) => {
  let payload: ISavedItem[] = [];

  const prevCookies = cookies().get(SAVED_KEY);
  if (prevCookies) {
    payload = JSON.parse(prevCookies.value);
    if (payload.length >= SAVED_LIMIT) {
      return;
    }
    const existing = payload.find((item) => item.id === id);
    if (!existing) {
      payload = [...payload, { id, thumbnail, name }];
    } else {
      payload = payload.filter((item) => item.id !== id);
    }
  } else {
    payload = [{ id, thumbnail, name }];
  }
  cookies().set({
    name: SAVED_KEY,
    value: JSON.stringify(payload),
    httpOnly: true,
  });
  revalidatePath(`/item/${id}`);
};

export default AddFavoriteAction;
