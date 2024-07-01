import Link from "next/link";
import DesktopMenu from "./desktop/DesktopMenu";
import Cart from "./cart/Cart";
import UserProfile from "./desktop/UserProfile";
import { Menubar } from "../ui/menubar";
import ImageWrapper from "@/atoms/ImageWrapper";
import IconBookmark from "@public/icons/iconbookmark.svg";

interface NavbarProps {
  initialUser: any;
}

const Navbar = ({ initialUser }: NavbarProps) => {
  return (
    <nav className=" p-4 gap-4 flex items-center justify-between bg-dark z-[995]">
      <Link href="/">
        <div className="flex uppercase text-sm lg:text-lg font-cantarell">
          <h2 className="border p-1 text-dark bg-light">Urban</h2>
          <h2 className="border-r border-y p-1 text-light">Trend</h2>
        </div>
      </Link>

      <div className="flex gap-3 items-center">
        <Menubar className="z-[950] gap-3 rounded-none bg-transparent border-none">
          <DesktopMenu />
          <UserProfile initialUser={initialUser}></UserProfile>
        </Menubar>
        <Link href={"/saved"}>
          <ImageWrapper
            src={IconBookmark}
            alt="Bookmark Icon"
            imageSize="h-6 w-6"
            sizes="10vw"
          />
        </Link>
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
