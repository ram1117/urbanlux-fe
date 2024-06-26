"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { IOrder } from "@/interfaces";
import OrderCancelForm from "./OrderCancelForm";

interface OrderCancelDialogProps {
  order: IOrder;
}
const OrderCancelDialog = ({ order }: OrderCancelDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild disabled={order.cancelled}>
        <Button>Cancel</Button>
      </DialogTrigger>

      <DialogContent className="w-11/12 max-w-[768px]">
        <DialogHeader>
          <DialogTitle>Cancellation</DialogTitle>
        </DialogHeader>
        <OrderCancelForm order={order} setOpen={setOpen}></OrderCancelForm>
      </DialogContent>
    </Dialog>
  );
};

export default OrderCancelDialog;
