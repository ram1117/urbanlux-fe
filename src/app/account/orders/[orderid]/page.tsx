"use client";

import ImageWrapper from "@/atoms/ImageWrapper";
import LogoLoadingSkeleton from "@/atoms/LogoLoadingSkeleton";
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
} from "@/components/ui/table";
import { useFetchDataClient } from "@/hooks/usersession.hooks";
import { IOrder } from "@/interfaces";
import { API_METHODS } from "@/lib/api/apiservice";
import { getOrderById } from "@/lib/api/apiurls";
import { PAYMENT_STATUS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

const Page = ({ params }: { params: { orderid: string } }) => {
  const { data, error, loading } = useFetchDataClient(
    API_METHODS.GET,
    getOrderById(params.orderid),
    {},
  ) as { data: IOrder; error: string; loading: boolean };

  if (error) {
    return <NoData>{error}</NoData>;
  }

  return (
    <main className="min-h-screen max-w-[1440px] mx-auto">
      {loading && <LogoLoadingSkeleton></LogoLoadingSkeleton>}
      {data && (
        <>
          <Card className="mt-10 lg:mt-20 w-11/12 lg:w-4/5 max-w-[1240px] mx-auto my-4">
            {data.cancelled && (
              <p className="w-max border border-red-800 text-red-800 m-2 p-1 font-medium">
                Cancelled
              </p>
            )}
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
              <CardDescription>Order id - {data._id}</CardDescription>
              <p>{formatDate(data.updatedAt)}</p>
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
              </Table>
              <div className="flex flex-wrap gap-4 justify-between items-center text-base mt-4 py-4 px-2 border-t capitalize">
                <div className="text-center">
                  <p className="underline text-sm mb-1">Total</p>
                  <p>${data.total}</p>
                </div>
                <div className="text-center">
                  <p className="underline text-sm mb-1">Order Status</p>
                  <p>{data.order_status}</p>
                </div>
                {data.payment_status === PAYMENT_STATUS.PENDING ? (
                  <Button>
                    <Link href={`/payments/${data._id}`}>Pay Now</Link>
                  </Button>
                ) : (
                  <div className="text-center">
                    <p className="underline text-sm mb-1">Payment Status</p>
                    <p className="capitalize">{data.payment_status}</p>
                  </div>
                )}
                <div className="flex gap-2">
                  <OrderCancelDialog order={data}></OrderCancelDialog>
                  {data.tracking_id && (
                    <Button>
                      <Link href={"/"} target="_blank">
                        Track
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
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
        </>
      )}
    </main>
  );
};

export default Page;
