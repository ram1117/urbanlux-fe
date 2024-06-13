import Link from "next/link";
import {
  Menubar,
  MenubarTrigger,
  MenubarMenu,
  MenubarSeparator,
} from "../../ui/menubar";
import BrandsMenuDk from "./BrandsMenuDK";
import CategoriesMenuDk from "./CategoriesMenuDK";
import ImageWrapper from "@/atoms/ImageWrapper";
import IconCart from "@public/icons/icon-cart.svg";

const DesktopMenu = async () => {
  return (
    <Menubar className="z-[999] rounded-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger className="text-xs md:text-base rounded-none bg-transparent bg-dark text-light focus:bg-dark focus:text-light data-[state=open]:bg-light data-[state=open]:text-dark">
          Products
        </MenubarTrigger>
        <CategoriesMenuDk />
      </MenubarMenu>
      <MenubarSeparator className="bg-light w-px h-full"></MenubarSeparator>
      <MenubarMenu>
        <MenubarTrigger className="text-xs md:text-base rounded-none bg-transparent bg-dark text-light focus:bg-dark focus:text-light data-[state=open]:bg-light data-[state=open]:text-dark">
          Brands
        </MenubarTrigger>
        <BrandsMenuDk />
      </MenubarMenu>
      <MenubarSeparator className="bg-light w-px h-full"></MenubarSeparator>
      <Link href="/cart" className="px-6">
        <ImageWrapper
          src={IconCart}
          alt="Cart Icon"
          imageSize="h-4 w-4 md:h-6 md:w-6"
          sizes="10vw"
        />
      </Link>
    </Menubar>
  );
};

export default DesktopMenu;
