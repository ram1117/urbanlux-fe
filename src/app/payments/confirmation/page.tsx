import { Button } from "@/components/ui/button";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { updatePaymentStatus } from "@/lib/api/apiurls";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import Link from "next/link";

const NotUpdate = (
  <main className="min-h-screen flex flex-col items-center justify-center gap-4 max-w-[1440px] mx-auto">
    <h1>Unable to update payment status. Please check again later</h1>
  </main>
);

const Page = async ({
  searchParams,
}: {
  searchParams: {
    payment_intent: string;
    payment_intent_client_secret: string;
    redirect_status: string;
  };
}) => {
  const { payment_intent } = searchParams;
  const { currentUser } = await getAuthenticatedAppForUser();

  if (!payment_intent) return NotUpdate;

  const response = await makeApiRequest(
    API_METHODS.POST,
    updatePaymentStatus(payment_intent),
    {},
    await currentUser?.getIdToken(),
  );

  if (!response?.ok) {
    return NotUpdate;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 max-w-[1440px] mx-auto">
      <h1>Payment Succeeded</h1>
      <h2>We will let you know, when your order is dispatched</h2>
      <Button>
        <Link href={"/account/orders"}>Orders</Link>
      </Button>
    </main>
  );
};

export default Page;
