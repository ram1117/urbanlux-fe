import { Menubar, MenubarTrigger, MenubarMenu } from "../../ui/menubar";
import BrandsMenuDk from "./BrandsMenuDK";
import Cart from "./Cart";
import CategoriesMenuDk from "./CategoriesMenuDK";
import UserProfile from "./UserProfile";

const DesktopMenu = async () => {
  return (
    <Menubar className="z-[999] rounded-none bg-transparent border-none">
      <MenubarMenu>
        <MenubarTrigger className="text-xs md:text-base rounded-none bg-transparent bg-dark text-light focus:bg-dark focus:text-light data-[state=open]:bg-light data-[state=open]:text-dark">
          Shop
        </MenubarTrigger>
        <CategoriesMenuDk />
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="text-xs md:text-base rounded-none bg-transparent bg-dark text-light focus:bg-dark focus:text-light data-[state=open]:bg-light data-[state=open]:text-dark">
          Brands
        </MenubarTrigger>
        <BrandsMenuDk />
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="text-xs md:text-base rounded-none bg-transparent bg-dark text-light focus:bg-dark focus:text-light data-[state=open]:bg-light data-[state=open]:text-dark">
          Account
        </MenubarTrigger>
        <UserProfile />
      </MenubarMenu>
      <Cart />
    </Menubar>
  );
};

export default DesktopMenu;
