"use client";

import { IFormAddressItem, IAddressItems, ICartItem } from "@/interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useState } from "react";
import PriceSplit from "./PriceSplit";
import Address from "./Address";
import { Button } from "../ui/button";
import PlaceOrderAction from "@/actions/ordering/placeorder.action";

interface CheckoutSectionProps {
  cartitems: ICartItem[];
  addressData: IAddressItems;
}

interface IErrorState {
  cartitems?: string;
  address?: {
    delivery?: string;
    billing?: string;
  };
  error?: string;
}

const CheckoutSection = ({ addressData, cartitems }: CheckoutSectionProps) => {
  const [errors, setErrors] = useState<IErrorState | undefined>();
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
    }
    if (address.billing.length === 0) {
      setErrors((prev) => ({
        ...prev,
        address: { ...prev?.address, billing: "select billing address" },
      }));
    }

    const response = await PlaceOrderAction(
      cartitems,
      address.delivery,
      address.billing,
    );

    if (response?.error) {
      setErrors((prev) => ({ ...prev, error: response.message }));
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
            addressList={addressData}
            errors={errors?.address}
          ></Address>
        </CardContent>
      </Card>
      <div className="p-4 flex justify-end">
        <Button onClick={handleClick}>Place Order</Button>
      </div>
      {errors?.cartitems && (
        <p className="text-sm text-red-800">{errors.cartitems}</p>
      )}
    </section>
  );
};

export default CheckoutSection;
