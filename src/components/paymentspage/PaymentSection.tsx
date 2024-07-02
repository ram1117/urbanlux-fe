"use client";

import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import getStripe from "@/lib/stripe/getstripe";
import { StripeElementsOptions } from "@stripe/stripe-js";

interface PaymentSectionProps {
  clientSecret: string;
}

const PaymentSection = ({ clientSecret }: PaymentSectionProps) => {
  const stripePromise = getStripe();
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  } as StripeElementsOptions;
  return (
    <div className="App">
      <Elements options={options} stripe={stripePromise}>
        <PaymentForm clientSecret={clientSecret} />
      </Elements>
    </div>
  );
};

export default PaymentSection;
