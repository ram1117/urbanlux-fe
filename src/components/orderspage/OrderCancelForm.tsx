"use client";

import FormSubmit from "@/atoms/FormSubmit";
import { ICancelOrderFormState, IOrder } from "@/interfaces";
import { Button } from "../ui/button";
import CancelOrderAction from "@/actions/ordering/cancelorder.action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";

interface OrderCancelFormProps {
  order: IOrder;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: ICancelOrderFormState = {
  success: false,
  errors: { _form: [] },
};

const OrderCancelForm = ({ order, setOpen }: OrderCancelFormProps) => {
  const bindedAction = CancelOrderAction.bind(null, order._id);
  const [formState, formAction] = useFormState(bindedAction, initialState);

  useEffect(() => {
    let intervalId: any;
    if (formState.success) {
      intervalId = setInterval(() => setOpen(false), 1 * 1000);
    }

    return () => clearInterval(intervalId);
  }, [formState.success, setOpen]);

  return (
    <form action={formAction}>
      <h4 className="text-base font-semibold">Items</h4>
      {order.items.map((item) => (
        <ul key={item._id} className="flex gap-4 items-center w-full">
          <li className="gap-4 grid grid-cols-6 w-full border-b py-4">
            <div className="col-span-1">
              <ImageWrapper
                src={item.merchandise_thumbnail}
                alt={"merchandise thumbnail"}
                imageSize={"w-10 aspect-square"}
              ></ImageWrapper>
            </div>

            <p className="col-span-3">{item.merchandise_name}</p>
            <p className="col-span-1">{item.quantity}</p>
            <p className="col-span-1">$ {item.subtotal}</p>
          </li>
        </ul>
      ))}
      <div className="flex items-center justify-between my-4">
        <p>{`Refund Amount(inc. shipping)`}</p>
        <p>${order.total}</p>
      </div>
      <p className="text-sm text-red-800">
        {formState.errors._form?.join(",")}
      </p>
      {formState.message && (
        <p className="text-sm text-green-800">{formState.message}</p>
      )}
      <div className="my-4 flex items-center justify-between">
        <Button
          className="px-6"
          variant={"secondary"}
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <FormSubmit></FormSubmit>
      </div>
    </form>
  );
};

export default OrderCancelForm;
