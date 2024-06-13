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
  console.log(categoriesData);
  return (
    <MenubarContent className="z-[999] bg-dark me-2 rounded-none grid grid-cols-1 md:grid-cols-2 gap-4">
      {categoriesData.map((item: any) => (
        <MenubarItem key={item._id}>
          <Link href={`/products?category=${item.category_code}`}>
            <div className="my-2 flex gap-4 w-full items-center text-light hover:text-dark">
              <ImageWrapper
                src={item.thumbnail}
                alt="category thumbnail"
                imageSize="h-10 w-10 lg:h-20 lg:w-20"
              />
              <h3 className="text-sm md:text-lg font-semibold">{item.name}</h3>
            </div>
          </Link>
        </MenubarItem>
      ))}
    </MenubarContent>
  );
};

export default CategoriesMenuDk;
