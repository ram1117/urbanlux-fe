import NoData from "@/atoms/NoData";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getBrands } from "@/lib/api/apiurls";
import { Suspense } from "react";
import SectionSkeleton from "@/atoms/SectionSkeleton";
import { IBrandItem } from "@/interfaces";
import BrandItem from "./BrandItem";

const Brands = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getBrands());
  if (!response?.ok) {
    return <NoData />;
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
