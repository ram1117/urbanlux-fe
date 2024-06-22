"use server";

import { IBrandFilterFormState } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getFilteredBrands } from "@/lib/api/apiurls";

const BrandFilterAction = async (
  brandid: string,
  formState: IBrandFilterFormState,
  formData: FormData,
): Promise<IBrandFilterFormState> => {
  const prices = formData.getAll("price[]") as string[];
  const categories = formData.getAll("category");

  try {
    let bodyData = {};
    if (categories.length > 0) {
      bodyData = { ...bodyData, categories };
    }
    if (prices.length > 0) {
      bodyData = {
        ...bodyData,
        fromprice: parseInt(prices[0]),
        toprice: parseInt(prices[1]),
      };
    }
    const response = await makeApiRequest(
      API_METHODS.POST,
      getFilteredBrands(brandid),
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

export default BrandFilterAction;
