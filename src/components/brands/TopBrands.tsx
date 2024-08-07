"use client";

import { API_METHODS } from "@/lib/api/apiservice";
import { getTopBrands } from "@/lib/api/apiurls";

import BrandSkeleton from "./BrandSkeleton";
import { IBrandItem } from "@/interfaces";
import Link from "next/link";
import NoData from "@/atoms/NoData";
import { useFetchDataPublic } from "@/hooks/usersession.hooks";

const TopBrands = () => {
  const { data, error, loading } = useFetchDataPublic(
    API_METHODS.GET,
    getTopBrands(),
    {},
  ) as { data: IBrandItem[]; error: string; loading: boolean };

  if (error) return <NoData>{error}</NoData>;

  return (
    <section>
      <h2 className="text-2xl lg:text-4xl font-bold my-4 font-cantarell">
        Top Brands
      </h2>
      {loading && <BrandSkeleton></BrandSkeleton>}
      {data && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0">
          {data.map((brand: IBrandItem) => {
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
      )}
    </section>
  );
};

export default TopBrands;
