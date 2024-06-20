import ImageWrapper from "@/atoms/ImageWrapper";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getCategories } from "@/lib/api/apiurls";
import Link from "next/link";
import { Suspense } from "react";
import MenuSkeleton from "../MenuSkeleton";

const CategoriesMenu = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getCategories());
  if (!response?.ok) {
    return (
      <ul className="text-dark">
        <li className="">
          <Link
            href={"/categories"}
            className="text-center w-full p-2 text-lg font-semibold"
          >
            All Categories
          </Link>
        </li>
      </ul>
    );
  }
  const categoriesData = await response?.json();

  return (
    <Suspense fallback={<MenuSkeleton></MenuSkeleton>}>
      <ul className="text-dark">
        {categoriesData.map((item: any) => (
          <li key={item._id} className="">
            <Link href={`/categories/${item._id}`}>
              <div className="my-2 flex gap-4 w-full items-center">
                <ImageWrapper
                  src={item.thumbnail}
                  alt="category thumbnail"
                  imageSize="h-10 w-10"
                  sizes="(max-width:768px)20vw,10vw"
                />
                <h3 className="text-sm md:text-base font-medium">
                  {item.name}
                </h3>
              </div>
            </Link>
          </li>
        ))}
        <li className="ms-10 font-medium my-4">
          <Link
            href={"/categories"}
            className="text-center w-full p-2 underline"
          >
            All Categories
          </Link>
        </li>
      </ul>
    </Suspense>
  );
};

export default CategoriesMenu;
