"use client";

import MerchContainer from "@/atoms/MerchContainter";
import { IMerchandiseItem } from "@/interfaces";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getCategoryItemsClient } from "@/lib/api/apiurls";
import { useEffect, useState } from "react";
import CategoriesSectionFilter from "./CategoriesSectionFilter";

interface CategoriesSectionProps {
  categoryid: string;
}

const CategoriesSection = ({ categoryid }: CategoriesSectionProps) => {
  const [merchItems, setMerchItems] = useState<IMerchandiseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    makeApiRequest(API_METHODS.GET, getCategoryItemsClient(categoryid))
      .then((response) => {
        if (!response?.ok) {
          response?.json().then((error) => setError(error.message));
        }
        return response?.json();
      })
      .then((data) => {
        if (data) {
          setMerchItems(data);
          setLoading(false);
        }
      })
      .catch((error) => setError(error.message));
  }, [categoryid]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 p-4">
      {error && <p className="text-sm italic">{error}</p>}
      <div className="lg:col-span-1">
        <CategoriesSectionFilter
          setMerchItems={setMerchItems}
          categoryid={categoryid}
        ></CategoriesSectionFilter>
      </div>
      <MerchContainer items={merchItems} loading={loading}></MerchContainer>
    </div>
  );
};

export default CategoriesSection;
