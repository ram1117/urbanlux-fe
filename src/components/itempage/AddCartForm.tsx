"use client";

import FormSubmit from "@/atoms/FormSubmit";
import { IAddCartFormState, ICartItem, IMerchandiseItem } from "@/interfaces";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "../ui/select";
import AddCartAction from "@/actions/merchandise/addcart.action";
import { useFormState } from "react-dom";
import { useState } from "react";

interface AddCartFormProps {
  item: IMerchandiseItem;

  existingItem: ICartItem | undefined;
}

const initialState: IAddCartFormState = { errors: {} };

const AddCartForm = ({ item, existingItem }: AddCartFormProps) => {
  const [price, setPrice] = useState(existingItem ? existingItem.price : 0);
  const [size, setSize] = useState(existingItem?.size || "");

  const quantityoptions = Array(10)
    .fill(1)
    .map((e, i) => e + i * 1);

  const bindedAction = AddCartAction.bind(
    null,
    item._id,
    item.thumbnail,
    item.name,
    price,
    size,
  );
  const [formState, formAction] = useFormState(bindedAction, initialState);

  return (
    <form className="my-4 flex flex-col gap-4" action={formAction}>
      <ul className="grid grid-cols-5 gap-4">
        {item.inventory.map((inventoryItem) => (
          <li className="flex gap-2 items-center" key={inventoryItem._id}>
            <input
              type="radio"
              id={inventoryItem._id}
              name="inventory"
              value={inventoryItem._id}
              disabled={inventoryItem.stock <= 2}
              defaultChecked={inventoryItem._id === existingItem?.inventory}
              onChange={() => {
                setPrice(inventoryItem.price);
                setSize(inventoryItem.size);
              }}
              className="size-input"
            ></input>
            <Label
              htmlFor={inventoryItem._id}
              className={`w-full text-center cursor-pointer py-2 uppercase border ${inventoryItem.stock <= 2 ? "text-slate-300" : ""} text-base size-label`}
            >
              {inventoryItem.size}
            </Label>
          </li>
        ))}
        <li>
          <p className="text-xs text-red-800">
            {formState.errors.inventory?.join(",")}
          </p>
        </li>
      </ul>

      <div>
        <Select
          name="quantity"
          defaultValue={existingItem ? existingItem.quantity : "1"}
        >
          <SelectTrigger className="w-32">
            <SelectValue></SelectValue>
          </SelectTrigger>
          <SelectContent className="text-base">
            <SelectGroup>
              <SelectLabel>Select Quantity</SelectLabel>
              {quantityoptions.map((item: number) => (
                <SelectItem value={item.toString()} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-xs text-red-800">
          {formState.errors.quantity?.join(",")}
        </p>
      </div>
      <div className="flex items-center gap-8">
        <FormSubmit
          text={`${existingItem ? "Update cart" : "Add to cart"}`}
          className="w-max"
        ></FormSubmit>
        {price !== 0 && (
          <p className="my-4">
            Price: <span className="text-lg font-medium">$ {price}</span>
          </p>
        )}
      </div>

      <p className="text-xs text-red-800">
        {formState.errors._form?.join(",")}
      </p>
    </form>
  );
};

export default AddCartForm;
