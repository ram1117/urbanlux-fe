"use server";

import { ICategoryFilterFormState } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getFilteredItems } from "@/lib/api/apiurls";

const CategoryFilterAction = async (
  categoryid: string,
  formState: ICategoryFilterFormState,
  formData: FormData,
): Promise<ICategoryFilterFormState> => {
  const prices = formData.getAll("price[]") as string[];
  const brands = formData.getAll("brands");
  const sortby = formData.get("sortby");

  try {
    let bodyData: any = { categoryid };
    if (brands.length > 0) {
      bodyData = { ...bodyData, brands };
    }
    if (prices.length > 0) {
      bodyData = {
        ...bodyData,
        fromprice: parseInt(prices[0]),
        toprice: parseInt(prices[1]),
      };
    }

    if (sortby) {
      bodyData = { ...bodyData, sortby };
    }

    const response = await makeApiRequest(
      API_METHODS.POST,
      getFilteredItems(),
      bodyData,
    );
    if (!response?.ok) {
      const error = await response?.json();
      return { data: [], success: false, errors: { _form: [error.message] } };
    }
    const data = await response.json();

    return { data, errors: {}, success: true };
  } catch (error) {
    if (error instanceof Error)
      return { data: [], success: false, errors: { _form: [error.message] } };
    return {
      data: [],
      success: false,
      errors: { _form: ["Something went wrong"] },
    };
  }
};

export default CategoryFilterAction;
