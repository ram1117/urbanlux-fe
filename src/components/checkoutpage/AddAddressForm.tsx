"use client";

import AddAddressAction from "@/actions/ordering/addaddress.action";
import FormInput from "@/atoms/FormInput";
import FormSubmit from "@/atoms/FormSubmit";
import { IAddAddressFormState } from "@/interfaces";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ADDRESS_TYPE } from "@/lib/constants";
import { Label } from "../ui/label";
import { usePathname } from "next/navigation";

interface AddAddressFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: IAddAddressFormState = {
  errors: { _form: [] },
  success: false,
};

const AddAddressForm = ({ setOpen }: AddAddressFormProps) => {
  const pathname = usePathname();
  const bindedAction = AddAddressAction.bind(null, `/${pathname}`);
  const [formState, formAction] = useFormState(bindedAction, initialState);

  useEffect(() => {
    if (formState.success) setOpen(false);
  }, [formState.success, setOpen]);

  return (
    <form className="flex flex-col gap-4" action={formAction}>
      <FormInput
        label={"Label"}
        name={"label"}
        type={"text"}
        errorMsg={formState.errors.label?.join(",")}
      ></FormInput>
      <div className="">
        <p>Select address type</p>
        <RadioGroup name="address_type" className="grid grid-cols-2 gap-4 p-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value={ADDRESS_TYPE.DELIVERY}
              id={ADDRESS_TYPE.DELIVERY}
            ></RadioGroupItem>
            <Label htmlFor={ADDRESS_TYPE.DELIVERY}>Delivery</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem
              value={ADDRESS_TYPE.BILLING}
              id={ADDRESS_TYPE.BILLING}
            ></RadioGroupItem>
            <Label htmlFor={ADDRESS_TYPE.BILLING}>Billing</Label>
          </div>
        </RadioGroup>
        <p className="text-sm text-red-800">
          {formState.errors.address_type?.join(",")}
        </p>
      </div>

      <FormInput
        label={"Line 1"}
        name={"line1"}
        type={"text"}
        errorMsg={formState.errors.line1?.join(",")}
      ></FormInput>
      <FormInput
        label={"Line 2"}
        name={"line2"}
        type={"text"}
        errorMsg={formState.errors.line2?.join(",")}
      ></FormInput>
      <FormInput
        label={"City"}
        name={"city"}
        type={"text"}
        errorMsg={formState.errors.city?.join(",")}
      ></FormInput>
      <FormInput
        label={"State"}
        name={"state"}
        type={"text"}
        errorMsg={formState.errors.state?.join(",")}
      ></FormInput>
      <FormInput
        label={"Post Code"}
        name={"postal_code"}
        type={"text"}
        errorMsg={formState.errors.postal_code?.join(",")}
      ></FormInput>
      <FormInput
        label={"Country"}
        name={"country"}
        type={"text"}
        errorMsg={formState.errors.country?.join(",")}
      ></FormInput>
      <p className="text-sm text-red-800">
        {formState.errors._form?.join(",")}
      </p>
      <FormSubmit className="w-max"></FormSubmit>
    </form>
  );
};

export default AddAddressForm;
