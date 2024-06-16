import ImageWrapper from "@/atoms/ImageWrapper";
import { MenubarItem, MenubarContent } from "@/components/ui/menubar";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getCategories } from "@/lib/api/apiurls";
import Link from "next/link";

const CategoriesMenuDk = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getCategories());
  if (!response?.ok) {
    return (
      <MenubarContent className="z-[999]">
        <MenubarItem>
          <Link href="/products">Explore Products</Link>
        </MenubarItem>
      </MenubarContent>
    );
  }
  const categoriesData = await response?.json();

  return (
    <MenubarContent className="z-[999] bg-dark me-2 rounded-none grid grid-cols-1 gap-2">
      {categoriesData.map((item: any) => (
        <MenubarItem
          key={item._id}
          className="focus:text-dark focus:bg-light text-light"
        >
          <Link href={`/categories/${item.category_code}`}>
            <div className="my-2 flex gap-4 w-full items-center">
              <ImageWrapper
                src={item.thumbnail}
                alt="category thumbnail"
                imageSize="h-10 w-10"
              />
              <h3 className="text-sm md:text-lg font-semibold">{item.name}</h3>
            </div>
          </Link>
        </MenubarItem>
      ))}
      <MenubarItem className="focus:text-dark focus:bg-light text-light">
        <Link
          href={"/categories"}
          className="text-center w-full p-2 text-lg font-semibold"
        >
          More Items
        </Link>
      </MenubarItem>
    </MenubarContent>
  );
};

export default CategoriesMenuDk;
