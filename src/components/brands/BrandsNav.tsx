"use client";

import NavSkeleton from "@/atoms/NavSkeleton";
import { useFetchDataPublic } from "@/hooks/usersession.hooks";
import { IBrandItem } from "@/interfaces";
import { API_METHODS } from "@/lib/api/apiservice";
import { getTopBrands } from "@/lib/api/apiurls";
import Link from "next/link";

const BrandsNavItem = ({ items }: { items: IBrandItem[] }) => {
  return (
    <ul className="flex gap-2 lg:gap-4 flex-row items-center flex-wrap">
      {items.map((item) => (
        <li key={item._id}>
          <Link
            href={`/brands/${item._id}`}
            className="text-xs lg:text-sm underline underline-offset-4"
          >
            {item.name}
          </Link>
        </li>
      ))}
      <li>
        <Link
          href={`/brands`}
          className="text-xs lg:text-sm underline underline-offset-4"
        >
          All Brands..
        </Link>
      </li>
    </ul>
  );
};

const BrandsNav = () => {
  const { loading, data } = useFetchDataPublic(
    API_METHODS.GET,
    getTopBrands(),
    {},
  );

  return (
    <nav className="px-2 py-4 border-b">
      {loading && <NavSkeleton></NavSkeleton>}
      {data && <BrandsNavItem items={data}></BrandsNavItem>}
    </nav>
  );
};

export default BrandsNav;
