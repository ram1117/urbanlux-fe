"use client";

import { ICartItem } from "@/interfaces";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { useState } from 'react';
import PriceSplit from "./PriceSplit";

interface CheckoutSectionProps {
  cartitems: ICartItem[];
}

const CheckoutSection = ({ cartitems }: CheckoutSectionProps) => {
  // const [orderItems, setOrderItems] = useState(cartitems);
  return (
    <section className="my-6">
      <Card className="mx-4 lg:mx-6 bg-light">
        <CardHeader>
          <CardTitle className="text-xl lg:text-2xl">Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <PriceSplit cartitems={cartitems}></PriceSplit>
        </CardContent>
      </Card>
    </section>
  );
};

export default CheckoutSection;
