import { MenubarTrigger, MenubarMenu, MenubarContent } from "../../ui/menubar";

import CategoriesMenu from "./CategoriesMenu";
import BrandsMenu from "./BrandsMenu";
import ImageWrapper from "@/atoms/ImageWrapper";
import MenuImage from "@public/images/menu.jpg";

const DesktopMenu = async () => {
  return (
    // <Menubar className="z-[950] rounded-none bg-transparent border-none">
    <MenubarMenu>
      <MenubarTrigger className="text-xs md:text-base border border-light text-light focus:bg-dark focus:text-light data-[state=open]:bg-light data-[state=open]:text-dark">
        Shop
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
    // </Menubar>
  );
};

export default DesktopMenu;
