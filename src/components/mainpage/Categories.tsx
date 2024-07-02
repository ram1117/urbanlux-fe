"use client";

import SectionSkeleton from "@/atoms/SectionSkeleton";
import { useFetchDataPublic } from "@/hooks/usersession.hooks";
import { ICategory } from "@/interfaces";
import { API_METHODS } from "@/lib/api/apiservice";
import { getCategories } from "@/lib/api/apiurls";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  const { data, loading, error } = useFetchDataPublic(
    API_METHODS.GET,
    getCategories(),
    {},
  ) as { data: ICategory[]; loading: boolean; error: string };

  if (error) {
    return <></>;
  }

  return (
    <section className="min-h-[50vh] w-full my-4 p-4 lg:p-6">
      <h2 className="font-cantarell text-2xl lg:text-3xl mb-6 font-medium  text-left md:text-center">
        Categories
      </h2>
      {loading && <SectionSkeleton></SectionSkeleton>}
      {data && (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 auto-rows-fr gap-4 ">
          {data.map((item: ICategory) => (
            <CategoryItem category={item} key={item._id} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Categories;
