"use client";

import MerchContainer from "@/atoms/MerchContainter";
import { ICategory, IMerchandiseItem } from "@/interfaces";
import { API_METHODS } from "@/lib/api/apiservice";
import { getCategory, getCategoryItems } from "@/lib/api/apiurls";
import { useEffect, useState } from "react";
import CategoriesSectionFilter from "./CategoriesSectionFilter";
import { useFetchDataPublic } from "@/hooks/usersession.hooks";
import { Skeleton } from "../ui/skeleton";

interface CategoriesSectionProps {
  categoryid: string;
}

const CategoriesSection = ({ categoryid }: CategoriesSectionProps) => {
  const { data: categorydata, loading: categoryloading } = useFetchDataPublic(
    API_METHODS.GET,
    getCategory(categoryid),
    {},
  ) as {
    data: ICategory;
    loading: boolean;
  };
  const [merchItems, setMerchItems] = useState<IMerchandiseItem[]>([]);
  const { data, loading, error } = useFetchDataPublic(
    API_METHODS.GET,
    getCategoryItems(categoryid),
    {},
  ) as { data: IMerchandiseItem[]; error: string; loading: boolean };

  useEffect(() => {
    if (data) setMerchItems(data);
  }, [data]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 p-4">
      {error && <p className="text-sm italic">{error}</p>}
      <div className="lg:col-span-1">
        <CategoriesSectionFilter
          setMerchItems={setMerchItems}
          categoryid={categoryid}
        ></CategoriesSectionFilter>
      </div>
      <div className="lg:col-span-3">
        <div className="py-2 border-b flex items-end justify-between">
          {categoryloading && <Skeleton className=" w-[200px] h-4"></Skeleton>}
          {categorydata && (
            <h1 className="text-xl lg:text-2xl font-medium">
              {categorydata?.name}
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

export default CategoriesSection;
