"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import LoadingSpinner from "../ui/loadingspinner";

interface PaymentFormProps {
  clientSecret: string;
}

const PaymentForm = ({ clientSecret }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [succeeded, setSucceded] = useState(false);

  useEffect(() => {
    if (!stripe) return;
    if (!clientSecret) return;
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          setSucceded(true);
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("");
          break;
      }
    });
  }, [stripe, clientSecret]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_STRIPE_REDIRECT}`,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message!);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setLoading(false);
  };

  return (
    <form id="payment-element" onSubmit={handleSubmit}>
      <PaymentElement
        id="payment-element"
        options={{ layout: "tabs" }}
      ></PaymentElement>
      <Button
        disabled={loading || !stripe || !elements || succeeded}
        id="submit"
        className="my-4 min-w-28"
        type="submit"
      >
        <span id="button-text">
          {loading ? <LoadingSpinner></LoadingSpinner> : "Pay now"}
        </span>
      </Button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default PaymentForm;
