"use client";

import { IBrandItem, IMerchandiseItem } from "@/interfaces";
import { useEffect, useState } from "react";
import MerchContainer from "@/atoms/MerchContainter";
import { API_METHODS } from "@/lib/api/apiservice";
import { getBrand, getBrandItems } from "@/lib/api/apiurls";
import BrandSectionFilter from "../BrandSectionFilter";
import { useFetchDataPublic } from "@/hooks/usersession.hooks";
import { Skeleton } from "@/components/ui/skeleton";

interface BrandSectionProps {
  brandid: string;
}

const BrandSection = ({ brandid }: BrandSectionProps) => {
  const { data: branddata, loading: brandloading } = useFetchDataPublic(
    API_METHODS.GET,
    getBrand(brandid),
    {},
  ) as {
    data: IBrandItem;
    error: string;
    loading: boolean;
  };

  const [merchItems, setMerchItems] = useState<IMerchandiseItem[]>([]);
  const { data, loading, error } = useFetchDataPublic(
    API_METHODS.GET,
    getBrandItems(brandid),
    {},
  ) as { data: IMerchandiseItem[]; error: string; loading: boolean };

  useEffect(() => {
    if (data) setMerchItems(data);
  }, [data]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 p-4">
      {error && <p className="text-sm italic">{error}</p>}
      <div className="lg:col-span-1">
        <BrandSectionFilter
          setMerchItems={setMerchItems}
          brandid={brandid}
        ></BrandSectionFilter>
      </div>
      <div className="lg:col-span-3">
        <div className="py-2 border-b flex items-end justify-between">
          {brandloading && <Skeleton className="w-[200px] h-4"></Skeleton>}
          {branddata && (
            <h1 className="text-xl lg:text-2xl font-medium">
              {branddata?.name}
            </h1>
          )}
          <p className="text-sm">{merchItems.length} Items Found</p>
        </div>

        {merchItems && (
          <MerchContainer items={merchItems} loading={loading}></MerchContainer>
        )}
      </div>
    </div>
  );
};

export default BrandSection;
