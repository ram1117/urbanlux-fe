import Link from "next/link";
import DesktopMenu from "./desktop/DesktopMenu";
import ImageWrapper from "@/atoms/ImageWrapper";
import IconUser from "@public/icons/iconuser.svg";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <nav className=" p-4 gap-4 flex items-center justify-between bg-dark z-[995]">
      <Link href="/">
        <div className="flex uppercase text-sm lg:text-lg font-cantarell">
          <h2 className="border p-1 text-dark bg-light">Urban</h2>
          <h2 className="border-r border-y p-1 text-light">Trend</h2>
        </div>
      </Link>

      <div className="flex gap-2 items-center">
        <DesktopMenu />
        <Link href="/account" className="">
          <ImageWrapper
            src={IconUser}
            alt="User Icon"
            imageSize="h-6 w-6 lg:h-8 lg:w-8"
            sizes="10vw"
          />
        </Link>
        <Cart />
      </div>
    </nav>
  );
};

export default Navbar;
