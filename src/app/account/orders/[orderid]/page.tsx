import ImageWrapper from "@/atoms/ImageWrapper";
import NoData from "@/atoms/NoData";
import OrderCancelDialog from "@/components/orderspage/OrderCancelDialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { IOrder } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getOrderById } from "@/lib/api/apiurls";
import { PAYMENT_STATUS } from "@/lib/constants";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

const Page = async ({ params }: { params: { orderid: string } }) => {
  const { currentUser } = await getAuthenticatedAppForUser();
  const response = await makeApiRequest(
    API_METHODS.GET,
    getOrderById(params.orderid),
    {},
    await currentUser?.getIdToken(),
  );
  if (!response?.ok) return <NoData></NoData>;
  const data: IOrder = await response.json();
  return (
    <main className="min-h-screen max-w-[1440px] mx-auto">
      <Card className="mt-10 lg:mt-20 w-11/12 lg:w-4/5 max-w-[1240px] mx-auto">
        {data.cancelled && (
          <p className="w-max border border-red-800 text-red-800 m-2 p-1 font-medium">
            Cancelled
          </p>
        )}
        <CardHeader>
          <CardTitle>Order Details</CardTitle>
          <CardDescription>Order id - {data._id}</CardDescription>
        </CardHeader>
        <CardContent
          className={`${data.cancelled ? "opacity-40" : "opacity-100"}`}
        >
          <Table>
            <TableHeader>
              <TableRow className="capitalize">
                <TableHead></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Qty</TableHead>
                <TableHead>Price $</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.items.map((item) => (
                <TableRow key={item._id} className="capitalize">
                  <TableCell>
                    <ImageWrapper
                      src={item.merchandise_thumbnail}
                      alt={"merchandise thumbnail"}
                      imageSize={"w-12 lg:w-20 aspect-square"}
                    ></ImageWrapper>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={`/item/${item.merchandise}`}
                      className="underline underline-offset-4"
                    >
                      {item.merchandise_name}
                    </Link>
                  </TableCell>
                  <TableCell className="uppercase">{item.size}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.subtotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className="my-4">
              <TableRow>
                <TableCell>{formatDate(data.updatedAt)}</TableCell>
                <TableCell colSpan={1}>
                  <div className="text-center">
                    <p className="underline">Total</p>
                    <p>${data.total}</p>
                  </div>
                </TableCell>
                <TableCell colSpan={1}>
                  <div className="text-center">
                    <p className="underline">Order Status</p>
                    <p>{data.order_status}</p>
                  </div>
                </TableCell>
                <TableCell colSpan={2}>
                  {data.payment_status === PAYMENT_STATUS.PENDING ? (
                    <Button>
                      <Link href={`/payments/${data._id}`}>Pay Now</Link>
                    </Button>
                  ) : (
                    <div className="text-center">
                      <p className="underline">Payment Status</p>
                      <p className="capitalize">{data.payment_status}</p>
                    </div>
                  )}
                </TableCell>
                <TableCell colSpan={1}>
                  <OrderCancelDialog order={data}></OrderCancelDialog>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </CardContent>
      </Card>
      <Card className="w-11/12 lg:w-4/5 max-w-[1240px] mx-auto">
        <CardHeader>
          <CardTitle>Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="ps-6 list-disc">
            {data.comments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default Page;
