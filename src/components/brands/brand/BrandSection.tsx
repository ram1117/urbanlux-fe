"use client";

import { IMerchandiseItem } from "@/interfaces";
import { useEffect, useState } from "react";
import MerchContainer from "@/atoms/MerchContainter";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getBrandItemsClient } from "@/lib/api/apiurls";
import BrandSectionFilter from "../BrandSectionFilter";

interface BrandSectionProps {
  brandid: string;
}

const BrandSection = ({ brandid }: BrandSectionProps) => {
  const [merchItems, setMerchItems] = useState<IMerchandiseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    makeApiRequest(API_METHODS.GET, getBrandItemsClient(brandid))
      .then((response) => response?.json())
      .then((data) => setMerchItems(data))
      .catch((error) => setError(error.message));
    setLoading(false);
  }, [brandid]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 p-4">
      {error && <p className="text-sm italic">{error}</p>}
      <div className="lg:col-span-1">
        <BrandSectionFilter
          setMerchItems={setMerchItems}
          brandid={brandid}
        ></BrandSectionFilter>
      </div>
      <MerchContainer items={merchItems} loading={loading}></MerchContainer>
    </div>
  );
};

export default BrandSection;
