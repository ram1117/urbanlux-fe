import ImageWrapper from "@/atoms/ImageWrapper";
import { MenubarItem, MenubarContent } from "@/components/ui/menubar";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getTopBrands } from "@/lib/api/apiurls";
import Link from "next/link";
import { Suspense } from "react";
import MenuSkeleton from "../MenuSkeleton";

const BrandsMenuDk = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getTopBrands());
  if (!response?.ok) {
    return (
      <MenubarContent className="z-[999]">
        <MenubarItem>
          <Link href="/products">Explore Products</Link>
        </MenubarItem>
      </MenubarContent>
    );
  }
  const brandData = await response?.json();
  return (
    <Suspense fallback={<MenuSkeleton></MenuSkeleton>}>
      <MenubarContent className="z-[999] bg-dark me-2 rounded-none grid grid-cols-1 gap-2">
        {brandData.map((item: any) => (
          <MenubarItem key={item._id}>
            <Link href={`/products?brand=${item.brand_code}`}>
              <div className="my-2 flex gap-4 w-full items-center text-light hover:text-dark">
                <ImageWrapper
                  src={item.logo}
                  alt="brand-logo"
                  imageSize="h-10 w-10"
                />
                <h3 className="text-sm md:text-lg font-semibold">
                  {item.name}
                </h3>
              </div>
            </Link>
          </MenubarItem>
        ))}
      </MenubarContent>
    </Suspense>
  );
};

export default BrandsMenuDk;
