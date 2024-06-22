import ImageWrapper from "@/atoms/ImageWrapper";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getCategories } from "@/lib/api/apiurls";
import Link from "next/link";
import { MenubarItem } from "@/components/ui/menubar";

const CategoriesMenu = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getCategories());
  if (!response?.ok) {
    return (
      <MenubarItem className="text-dark" asChild>
        <li className="">
          <Link
            href={"/categories"}
            className="text-center w-full p-2 text-lg font-semibold"
          >
            All Categories
          </Link>
        </li>
      </MenubarItem>
    );
  }
  const categoriesData = await response?.json();

  return (
    <ul className="text-dark">
      {categoriesData.map((item: any) => (
        <MenubarItem key={item._id} className="" asChild>
          <Link href={`/categories/${item._id}`}>
            <div className="my-2 flex gap-4 w-full items-center">
              <ImageWrapper
                src={item.thumbnail}
                alt="category thumbnail"
                imageSize="h-10 w-10"
                sizes="(max-width:768px)20vw,10vw"
              />
              <h3 className="text-sm md:text-base font-medium">{item.name}</h3>
            </div>
          </Link>
        </MenubarItem>
      ))}
      <MenubarItem className="ms-10 font-medium my-4" asChild>
        <Link href={"/categories"} className="text-center w-full p-2 underline">
          All Categories
        </Link>
      </MenubarItem>
    </ul>
  );
};

export default CategoriesMenu;
