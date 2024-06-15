import {
  onAuthStateChanged as _onAuthStateChanged,
  type User,
} from "firebase/auth";
import { firebaseAuth } from "./firebase.config";

export function onAuthStateChanged(cb: (authUser: User | null) => any) {
  return _onAuthStateChanged(firebaseAuth, cb);
}

export async function signOutUser() {
  try {
    await firebaseAuth.signOut();
  } catch (error) {}
}
