import NoData from "@/atoms/NoData";
import { Button } from "@/components/ui/button";
import { IOrder } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getOrders } from "@/lib/api/apiurls";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase.server";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { PAYMENT_STATUS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

const Page = async () => {
  const { currentUser } = await getAuthenticatedAppForUser();
  const response = await makeApiRequest(
    API_METHODS.GET,
    getOrders(),
    null,
    await currentUser?.getIdToken(),
  );
  if (!response?.ok) {
    return <NoData></NoData>;
  }
  const data: IOrder[] = await response.json();

  return (
    <main className="min-h-screen max-w-[1440px] mx-auto">
      <Card className="w-11/12 max-w-[1200px] mx-auto my-10 lg:my-20">
        <CardHeader>
          <CardTitle>Your Orders</CardTitle>
          <CardDescription>All your orders here</CardDescription>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total $</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell>{formatDate(order.updatedAt)}</TableCell>
                    <TableCell>
                      <ul>
                        {order.items.map((orderitem) => (
                          <li key={orderitem._id}>
                            <p>{orderitem.merchandise_name}</p>
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>
                      {order.payment_status === PAYMENT_STATUS.PENDING ? (
                        <Button>
                          <Link href={`/payments/${order._id}`}>Pay Now</Link>
                        </Button>
                      ) : (
                        <p className="capitalize italic">
                          {order.payment_status}
                        </p>
                      )}
                    </TableCell>
                    <TableCell className="capitalize italic">
                      {order.order_status}
                    </TableCell>
                    <TableCell>
                      <Button variant={"default"}>
                        <Link href={`/account/orders/${order._id}`}>View</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </main>
  );
};

export default Page;
