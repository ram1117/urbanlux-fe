"use client";

import { IFormAddressItem, ICartItem } from "@/interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import PriceSplit from "./PriceSplit";
import Address from "./Address";
import { Button } from "../ui/button";
import PlaceOrderAction from "@/actions/ordering/placeorder.action";
import LoadingSpinner from "../ui/loadingspinner";
import { useRouter } from "next/navigation";

interface CheckoutSectionProps {
  cartitems: ICartItem[];
}

interface IErrorState {
  cartitems?: string;
  address?: {
    delivery?: string;
    billing?: string;
  };
  error?: string;
}

const CheckoutSection = ({ cartitems }: CheckoutSectionProps) => {
  const router = useRouter();
  const [errors, setErrors] = useState<IErrorState | undefined>();
  const [disableButton, setDisableButton] = useState(true);
  const [address, setAddress] = useState<IFormAddressItem>({
    delivery: "",
    billing: "",
  });

  const handleClick = async () => {
    if (cartitems.length === 0) {
      setErrors({ cartitems: "Cart is empty" });
    }
    if (address.delivery.length === 0) {
      setErrors((prev) => ({
        ...prev,
        address: { ...prev?.address, delivery: "select delivery address" },
      }));
      return;
    }
    if (address.billing.length === 0) {
      setErrors((prev) => ({
        ...prev,
        address: { ...prev?.address, billing: "select billing address" },
      }));
      return;
    }
    setDisableButton(true);
    const response = await PlaceOrderAction(
      cartitems,
      address.delivery,
      address.billing,
    );

    if (response?.error) {
      setErrors((prev) => ({ ...prev, error: response.message }));
    }
    if (response.success) {
      router.push(`/payments/${response.data._id}`);
    }
  };

  return (
    <section className="my-6 flex flex-col gap-4">
      <Card className="mx-4 lg:mx-6 bg-light">
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl">Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <PriceSplit cartitems={cartitems}></PriceSplit>
        </CardContent>
      </Card>
      <Card className="mx-4 lg:mx-6 bg-light">
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl">Address</CardTitle>
        </CardHeader>
        <CardContent className="">
          <Address
            setAddress={setAddress}
            selectedAddress={address}
            disableButton={setDisableButton}
            errors={errors?.address}
          ></Address>
        </CardContent>
      </Card>
      <div className="p-4 flex justify-center">
        <Button
          onClick={handleClick}
          className="px-6 tracking-widest"
          disabled={disableButton}
        >
          {disableButton ? <LoadingSpinner></LoadingSpinner> : "Place Order"}
        </Button>
      </div>
      {errors?.cartitems && (
        <p className="text-sm text-red-800">{errors.cartitems}</p>
      )}
      {errors?.error && <p className="text-sm text-red-800">{errors.error}</p>}
    </section>
  );
};

export default CheckoutSection;
