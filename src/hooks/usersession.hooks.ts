import { onAuthStateChanged } from "@/lib/firebase/firebase.auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { firebaseConfig } from "@/lib/firebase/firebase.config";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";

export const useCurrentUser = () => {
  const [token, setToken] = useState<string>();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      authUser?.getIdToken().then((token) => setToken(token));
    });

    return () => unsubscribe();
  }, []);
  return token;
};

export const useFetchDataPublic = (
  method: API_METHODS,
  url: string,
  bodydata: any,
) => {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await makeApiRequest(method, url, bodydata);
        if (!response?.ok) {
          const error = await response?.json();
          setError(error.message);
        }
        const apidata = await response?.json();
        setData(apidata);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
        setError("something went wrong");
      }
    };

    fetchData();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, loading, error };
};

export const useFetchDataClient = (
  method: API_METHODS,
  url: string,
  bodydata: any,
) => {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      if (!authUser) {
        setError("Please sign in");
        setLoading(false);
      }
      authUser?.getIdToken().then(async (token) => {
        if (token) {
          try {
            const response = await makeApiRequest(method, url, bodydata, token);
            if (!response?.ok) {
              const error = await response?.json();
              setError(error.message);
            }
            const apidata = await response?.json();
            setData(apidata);
          } catch (error) {
            if (error instanceof Error) setError(error.message);
            setError("something went wrong");
          }
        } else {
          setError("Please log in");
        }
        setLoading(false);
      });
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
};

export const useUserSession = (initialUser: any) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(initialUser);
  const router = useRouter();

  // Register the service worker that sends auth state back to server
  // The service worker is built with npm run build-service-worker
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const serializedFirebaseConfig = encodeURIComponent(
        JSON.stringify(firebaseConfig),
      );
      const serviceWorkerUrl = `/auth-service-worker.js?firebaseConfig=${serializedFirebaseConfig}`;
      navigator.serviceWorker.register(serviceWorkerUrl);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onAuthStateChanged((authUser) => {
      if (user === undefined) return;

      // refresh when user changed to ease testing
      if (user?.email !== authUser?.email) {
        router.refresh();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return { loading, user };
};
