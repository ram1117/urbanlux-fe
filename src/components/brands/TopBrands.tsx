import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getTopBrands } from "@/lib/api/apiurls";
import { Suspense } from "react";
import BrandSkeleton from "./BrandSkeleton";
import { IBrandItem } from "@/interfaces";
import Link from "next/link";
import NoData from "@/atoms/NoData";

const TopBrands = async () => {
  const topbrandsResponse = await makeApiRequest(
    API_METHODS.GET,
    getTopBrands(),
  );
  if (!topbrandsResponse?.ok) {
    const error = await topbrandsResponse?.json();
    return <NoData>{error}</NoData>;
  }
  const topbrandsData = await topbrandsResponse.json();

  return (
    <Suspense fallback={<BrandSkeleton></BrandSkeleton>}>
      <h2 className="text-2xl lg:text-4xl font-bold my-4 font-cantarell">
        Top Brands
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0">
        {topbrandsData.map((brand: IBrandItem) => {
          return (
            <li key={brand._id} className=" py-2">
              <h4 className="font-semibold text-base lg:text-lg w-max">
                <Link href={`/brands/${brand._id}`} className="underline">
                  {brand.name}
                </Link>
              </h4>
            </li>
          );
        })}
      </ul>
    </Suspense>
  );
};

export default TopBrands;
