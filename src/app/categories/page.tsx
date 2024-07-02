"use client";

import ImageWrapper from "@/atoms/ImageWrapper";
import NoData from "@/atoms/NoData";
import { ICategory } from "@/interfaces";
import { API_METHODS } from "@/lib/api/apiservice";
import { getCategories } from "@/lib/api/apiurls";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useFetchDataPublic } from "@/hooks/usersession.hooks";
import LogoLoadingSkeleton from "@/atoms/LogoLoadingSkeleton";

const Page = () => {
  const { data, loading, error } = useFetchDataPublic(
    API_METHODS.GET,
    getCategories(),
    {},
  ) as { data: ICategory[]; loading: boolean; error: string };

  if (error) return <NoData>{error}</NoData>;

  return (
    <main className="min-h-screen text-dark bg-light max-w-[1440px] mx-auto p-8">
      <h1 className="text-2xl lg:text-4xl font-bold my-4 py-4 border-b-2 font-cantarell">
        Our Range
      </h1>
      {loading && <LogoLoadingSkeleton></LogoLoadingSkeleton>}
      {data && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 my-4 lg:my-8">
          {data.map((category) => (
            <li key={category._id}>
              <Card className="bg-light">
                <Link href={`/categories/${category._id}`} className="p-4">
                  <CardContent className="flex gap-4">
                    <div className="col-span-1">
                      <ImageWrapper
                        src={category.thumbnail}
                        alt={"category thumbnail"}
                        imageSize={"w-24 aspect-square"}
                      ></ImageWrapper>
                    </div>
                    <div className="">
                      <h3 className="text-2xl font-cantarell underline">
                        {category.name}
                      </h3>
                      <p className="text-base lg:text-lg font-light">
                        {category.description.split(".")[0]}
                      </p>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Page;
