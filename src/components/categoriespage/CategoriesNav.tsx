"use client";

import NavSkeleton from "@/atoms/NavSkeleton";
import { useFetchDataPublic } from "@/hooks/usersession.hooks";
import { ICategory } from "@/interfaces";
import { API_METHODS } from "@/lib/api/apiservice";
import { getCategories } from "@/lib/api/apiurls";
import Link from "next/link";

const CategoriesNavItems = ({ items }: { items: ICategory[] }) => {
  return (
    <ul className="flex gap-2 lg:gap-4 flex-row items-center flex-wrap">
      {items.map((item) => (
        <li key={item._id}>
          <Link
            href={`/categories/${item._id}`}
            className="text-xs lg:text-sm underline underline-offset-4"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const CategoriesNav = () => {
  const { loading, data } = useFetchDataPublic(
    API_METHODS.GET,
    getCategories(),
    {},
  );

  return (
    <nav className="px-2 py-4 border-b">
      {loading && <NavSkeleton></NavSkeleton>}
      {data && <CategoriesNavItems items={data}></CategoriesNavItems>}
    </nav>
  );
};

export default CategoriesNav;
