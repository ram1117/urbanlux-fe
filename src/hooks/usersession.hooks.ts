import { onAuthStateChanged } from "@/lib/firebase/firebase.auth";
import { useEffect, useState } from "react";

export const useUserInfo = () => {
  const [user, setUser] = useState<string | null>();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (authuser) => {
      if (authuser) {
        setUser(authuser.displayName);
      } else setUser(null);
    });

    return () => unsubscribe();
  }, []);
  return user;
};

export const useUserSession = () => {
  const [user, setUser] = useState<{
    loggedIn: boolean;
    token: string;
  } | null>();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (authuser) => {
      if (authuser) {
        const token = await authuser.getIdToken();
        setUser({ loggedIn: true, token });
      } else setUser(null);
    });

    return () => unsubscribe();
  }, []);
  return user;
};
