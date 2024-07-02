import { MenubarTrigger, MenubarMenu, MenubarContent } from "../../ui/menubar";

import CategoriesMenu from "./CategoriesMenu";
import BrandsMenu from "./BrandsMenu";
import ImageWrapper from "@/atoms/ImageWrapper";
import MenuImage from "@public/images/menu.jpg";
import IconMerchandise from "@public/icons/iconshop.svg";

const DesktopMenu = async () => {
  return (
    <MenubarMenu>
      <MenubarTrigger className="focus:bg-dark focus:text-light data-[state=open]:bg-dark data-[state=open]:text-light px-0">
        <ImageWrapper
          src={IconMerchandise}
          alt="Bookmark Icon"
          imageSize="h-6 w-6"
          sizes="10vw"
        />
      </MenubarTrigger>
      <MenubarContent className="rounded-none">
        <section className="w-screen min-h-[50vh] gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 max-h-[70vh">
          <div className="border-b lg:border-none py-4 lg:py-0">
            <h4>Shop for</h4>
            <CategoriesMenu></CategoriesMenu>
          </div>
          <div className="border-b lg:border-none py-4 lg:py-0">
            <h4>Brands</h4>
            <BrandsMenu></BrandsMenu>
          </div>
          <ImageWrapper
            src={MenuImage}
            alt={"fashion image"}
            imageSize={"w-full aspect-square hidden lg:block"}
          ></ImageWrapper>
        </section>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default DesktopMenu;
