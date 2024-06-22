"use client";

import {
  IBrandItem,
  ICategoryFilterFormState,
  IMerchandiseItem,
} from "@/interfaces";
import { Skeleton } from "../ui/skeleton";
import Slider from "../ui/slider";
import { useEffect, useState } from "react";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getBrandsClient, getCategoryItemsClient } from "@/lib/api/apiurls";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import FormSubmit from "@/atoms/FormSubmit";
import ResetFilterButton from "@/atoms/ResetFilterButton";
import CategoryFilterAction from "@/actions/categories/categoryfilter.action";
import { useFormState } from "react-dom";
import SortFormElement from "@/atoms/SortFormElement";

interface CatSectionFilterFormProps {
  categoryid: string;
  setMerchItems: React.Dispatch<React.SetStateAction<IMerchandiseItem[]>>;
}

const initialState: ICategoryFilterFormState = {
  errors: {},
  success: false,
  data: [],
};

const CatSectionFilterForm = ({
  categoryid,
  setMerchItems,
}: CatSectionFilterFormProps) => {
  const [brands, setBrands] = useState<IBrandItem[]>([]);

  useEffect(() => {
    makeApiRequest(API_METHODS.GET, getBrandsClient())
      .then((response) => response?.json())
      .then((data) => setBrands(data));
  }, []);

  const handleReset = () => {
    makeApiRequest(API_METHODS.GET, getCategoryItemsClient(categoryid))
      .then((response) => response?.json())
      .then((data) => setMerchItems(data));
  };

  const bindedAction = CategoryFilterAction.bind(null, categoryid);
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
      <h4 className="border-b-2">Brands</h4>
      {brands.length === 0 && (
        <>
          <Skeleton className="h-2 bg-slate-200 my-4 w-1/2"></Skeleton>
          <Skeleton className="h-2 bg-slate-200 my-4 w-1/2"></Skeleton>
          <Skeleton className="h-2 bg-slate-200 my-4 w-1/2"></Skeleton>
        </>
      )}
      <ul className="max-h-[50vh] overflow-auto">
        {brands.map((item) => (
          <li key={item._id} className="flex items-center gap-2 my-2">
            <Checkbox id={item.name} name="brands" value={item._id}></Checkbox>
            <Label htmlFor={item.name} className="text-lg font-light">
              {" "}
              {item.name}
            </Label>
          </li>
        ))}
      </ul>
      <SortFormElement></SortFormElement>
      <div className="grid grid-cols-2 gap-4">
        <FormSubmit text="Filter"></FormSubmit>
        <ResetFilterButton handleReset={handleReset}></ResetFilterButton>
      </div>

      <p className="text-xs text-red-800">
        {formState.errors._form?.join(",")}
      </p>
    </form>
  );
};

export default CatSectionFilterForm;
