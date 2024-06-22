"use client";

import FormSubmit from "@/atoms/FormSubmit";
import { IAddCartFormState, IInventory } from "@/interfaces";
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

interface AddCartFormProps {
  inventory: IInventory[];
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  itemid: string;
  image: string;
  name: string;
}

const initialState: IAddCartFormState = { errors: {} };

const AddCartForm = ({
  inventory,
  setPrice,
  itemid,
  image,
  name,
}: AddCartFormProps) => {
  const quantityoptions = Array(10)
    .fill(1)
    .map((e, i) => e + i * 1);

  const bindedAction = AddCartAction.bind(null, itemid, image, name);
  const [formState, formAction] = useFormState(bindedAction, initialState);

  return (
    <form className="my-4 flex flex-col gap-4" action={formAction}>
      <ul className="grid grid-cols-5">
        {inventory.map((item) => (
          <li className="flex gap-2 items-center" key={item._id}>
            <input
              type="radio"
              id={item._id}
              name="inventory"
              value={item._id}
              disabled={item.stock <= 2}
              onChange={() => {
                setPrice(item.price);
              }}
              className="size-input"
            ></input>
            <Label
              htmlFor={item._id}
              className={`w-full text-center cursor-pointer py-2 uppercase border ${item.stock <= 2 ? "text-slate-300" : ""} text-base size-label`}
            >
              {item.size}
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
        <Select name="quantity">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Quantity"></SelectValue>
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

      <FormSubmit text="Add to Cart" className="w-max"></FormSubmit>
      <p className="text-xs text-red-800">
        {formState.errors._form?.join(",")}
      </p>
    </form>
  );
};

export default AddCartForm;
