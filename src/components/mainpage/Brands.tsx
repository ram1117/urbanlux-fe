import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getTopBrands } from "@/lib/api/apiurls";
import { Suspense } from "react";
import SectionSkeleton from "@/atoms/SectionSkeleton";
import { IBrandItem } from "@/interfaces";
import BrandItem from "./BrandItem";

const Brands = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getTopBrands());
  if (!response?.ok) {
    return <></>;
  }
  const brandData: IBrandItem[] = await response?.json();

  return (
    <Suspense fallback={<SectionSkeleton />}>
      <div className="min-h-screen w-full">
        {brandData.map((item: IBrandItem, index: number) => (
          <BrandItem brandItem={item} key={item._id} index={index} />
        ))}
      </div>
    </Suspense>
  );
};

export default Brands;
