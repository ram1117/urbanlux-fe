import NoData from "@/atoms/NoData";
import { Button } from "@/components/ui/button";
import { IOrder } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getOrders } from "@/lib/api/apiurls";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import Link from "next/link";

const Page = async () => {
  const { currentUser } = await getAuthenticatedAppForUser();
  const response = await makeApiRequest(
    API_METHODS.GET,
    getOrders(),
    null,
    await currentUser?.getIdToken(),
  );
  if (!response?.ok) return <NoData></NoData>;
  const data: IOrder[] = await response.json();

  return (
    <main className="min-h-screen max-w-[1440px] mx-auto">
      <section className="border">
        <ul>
          {data.map((item) => (
            <li className="flex items-center gap-4" key={item._id}>
              <h2>{item._id}</h2>
              <h2>{item.payment_status}</h2>
              <h2>{new Date(item.createdAt).toLocaleString()}</h2>
              {item.payment_status === "pending" && (
                <Button>
                  <Link href={`/payments/${item._id}`}>Pay Now</Link>
                </Button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Page;
