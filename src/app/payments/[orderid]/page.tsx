import NoData from "@/atoms/NoData";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getPaymentSecret } from "@/lib/api/apiurls";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { IPaymentSummary } from "@/interfaces";
import PaymentSection from "@/components/paymentspage/PaymentSection";

const Page = async ({ params }: { params: { orderid: string } }) => {
  const orderid = params.orderid;
  const { currentUser } = await getAuthenticatedAppForUser();
  const response = await makeApiRequest(
    API_METHODS.GET,
    getPaymentSecret(orderid),
    null,
    await currentUser?.getIdToken(),
  );
  if (!response?.ok) return <NoData></NoData>;

  const data: IPaymentSummary = await response.json();

  return (
    <main className="min-h-screen max-w-[1440px] mx-auto my-10 lg:my-20">
      <section className="w-11/12 mx-auto max-w-[1024px] grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Payment Summary</CardTitle>
            <CardDescription>Your order summary</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-semibold">
                Total - ${data.order.total}
              </h4>
              <div className="capitalize">
                <h4 className="text-lg font-semibold">Billing Address</h4>
                <h6>{data.order.address.fullname}</h6>
                <p>{data.order.address.line1}</p>
                <p>{data.order.address.line2}</p>
                <p>{data.order.address.city}</p>
                <p>
                  {data.order.address.state},{data.order.address.country}
                </p>
                <p>{data.order.address.postal_code}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <PaymentSection clientSecret={data.secret}></PaymentSection>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Page;
