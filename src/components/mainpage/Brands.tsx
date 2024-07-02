"use client";

import { API_METHODS } from "@/lib/api/apiservice";
import { getTopBrands } from "@/lib/api/apiurls";
import SectionSkeleton from "@/atoms/SectionSkeleton";
import { IBrandItem } from "@/interfaces";
import BrandItem from "./BrandItem";
import { useFetchDataPublic } from "@/hooks/usersession.hooks";
import Link from "next/link";
import { Button } from "../ui/button";

const Brands = () => {
  const { loading, error, data } = useFetchDataPublic(
    API_METHODS.GET,
    getTopBrands(),
    {},
  ) as { data: IBrandItem[]; loading: boolean; error: string };

  if (error) {
    return <></>;
  }

  return (
    <section className="min-h-[50vh] w-full my-4 p-4 lg:p-6">
      <h2 className="font-cantarell text-2xl lg:text-3xl mb-6 font-medium text-left md:text-center">
        Explore Brands
      </h2>
      {loading && <SectionSkeleton></SectionSkeleton>}
      {data && (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 auto-rows-fr gap-4">
          {data.map((item: IBrandItem) => (
            <BrandItem brandItem={item} key={item._id} />
          ))}
          <li className="flex items-center justify-center border rounded-md">
            <Button variant={"link"}>
              <Link href={"/brands"}>More Brands</Link>
            </Button>
          </li>
        </ul>
      )}
    </section>
  );
};

export default Brands;
