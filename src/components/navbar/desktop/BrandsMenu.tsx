import ImageWrapper from "@/atoms/ImageWrapper";
import { API_METHODS, makeApiRequest } from "@/lib/api/apiservice";
import { getTopBrands } from "@/lib/api/apiurls";
import Link from "next/link";
import { MenubarItem } from "@/components/ui/menubar";

const BrandsMenu = async () => {
  const response = await makeApiRequest(API_METHODS.GET, getTopBrands());
  if (!response?.ok) {
    return (
      <MenubarItem className="text-dark text-lg font-semibold" asChild>
        <Link
          href={"/brands"}
          className="text-center w-full p-2 text-lg font-semibold"
        >
          All brands
        </Link>
      </MenubarItem>
    );
  }
  const brandData = await response?.json();
  return (
    <ul className="text-dark">
      {brandData.map((item: any) => (
        <MenubarItem key={item._id} asChild>
          <Link href={`/brands/${item._id}`}>
            <div className="my-2 flex gap-4 w-full items-center">
              <ImageWrapper
                src={item.logo}
                alt="brand-logo"
                imageSize="h-10 w-10"
                sizes="(max-width:768px)20vw,10vw"
              />
              <h3 className="text-sm md:text-base font-medium">{item.name}</h3>
            </div>
          </Link>
        </MenubarItem>
      ))}
      <MenubarItem className="ms-10 font-medium my-4" asChild>
        <Link
          href={"/brands"}
          className="text-center w-full p-2 text-base underline"
        >
          All Brands
        </Link>
      </MenubarItem>
    </ul>
  );
};

export default BrandsMenu;
