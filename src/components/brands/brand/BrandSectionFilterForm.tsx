"use client";

import FormSubmit from "@/atoms/FormSubmit";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Slider from "@/components/ui/slider";
import {
  IBrandFilterFormState,
  ICategory,
  IMerchandiseItem,
} from "@/interfaces";
import { Skeleton } from "@/components/ui/skeleton";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getCategoriesClient } from "@/lib/api/apiurls";
import { useEffect, useState } from "react";
import BrandFilterAction from "@/actions/brands/brandfilter.action";
import { useFormState } from "react-dom";

interface BrandFilterProps {
  setMerchItems: React.Dispatch<React.SetStateAction<IMerchandiseItem[]>>;
  brandid: string;
}

const initialState: IBrandFilterFormState = {
  data: [],
  success: false,
  errors: {},
};

const BrandSectionFilterForm = ({
  setMerchItems,
  brandid,
}: BrandFilterProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    makeApiRequest(API_METHODS.GET, getCategoriesClient())
      .then((response) => response?.json())
      .then((data) => setCategories(data));
  }, []);

  const bindedAction = BrandFilterAction.bind(null, brandid);
  const [formState, formAction] = useFormState(bindedAction, initialState);

  useEffect(() => {
    if (formState.success) {
      setMerchItems(formState.data);
    }
  }, [formState, setMerchItems]);

  return (
    <form action={formAction}>
      <h4 className="border-b-2">Price</h4>
      <Slider></Slider>
      <h4 className="border-b-2">Categories</h4>
      {categories.length === 0 && (
        <>
          <Skeleton className="h-2 bg-slate-200 my-4 w-1/2"></Skeleton>
          <Skeleton className="h-2 bg-slate-200 my-4 w-1/2"></Skeleton>
          <Skeleton className="h-2 bg-slate-200 my-4 w-1/2"></Skeleton>
        </>
      )}

      {categories.map((item) => (
        <div key={item._id} className="flex items-center gap-2 my-2">
          <Checkbox id={item.name} name="category" value={item._id}></Checkbox>
          <Label htmlFor={item.name} className="text-lg font-light">
            {" "}
            {item.name}
          </Label>
        </div>
      ))}

      <FormSubmit text="Filter"></FormSubmit>
      <p className="text-xs text-red-800">
        {formState.errors._form?.join(",")}
      </p>
    </form>
  );
};

export default BrandSectionFilterForm;
