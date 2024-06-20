import {
  Menubar,
  MenubarTrigger,
  MenubarMenu,
  MenubarContent,
} from "../../ui/menubar";

import Cart from "../Cart";
import UserProfile from "./UserProfile";
import CategoriesMenu from "./CategoriesMenu";
import BrandsMenu from "./BrandsMenu";

const DesktopMenu = async () => {
  return (
    <Menubar className="z-[999] rounded-none bg-transparent border-none">
      <MenubarMenu>
        <MenubarTrigger className="text-xs md:text-base border border-light text-light focus:bg-dark focus:text-light data-[state=open]:bg-light data-[state=open]:text-dark">
          Shop
        </MenubarTrigger>
        <MenubarContent className="rounded-none">
          <section className="w-screen min-h-[50vh] gap-4 grid grid-cols-1 lg:grid-cols-3 p-4 max-h-[70vh] overflow-auto">
            <div className="border-b lg:border-none py-4">
              <h4>Categories</h4>
              <CategoriesMenu></CategoriesMenu>
            </div>
            <div className="border-b lg:border-none py-4">
              <h4>Brands</h4>
              <BrandsMenu></BrandsMenu>
            </div>
            <div className="border-b lg:border-none py-4">
              <UserProfile></UserProfile>
            </div>
          </section>
        </MenubarContent>
      </MenubarMenu>
      <Cart />
    </Menubar>
  );
};

export default DesktopMenu;
