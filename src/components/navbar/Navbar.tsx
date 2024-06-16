import Link from "next/link";
import DesktopMenu from "./desktop/DesktopMenu";

const Navbar = () => {
  return (
    <nav className="p-4 gap-4 flex flex-col md:flex-row items-center md:justify-between bg-dark z-[995]">
      <Link href="/">
        <div className="flex uppercase text-sm lg:text-lg font-cantarell">
          <h2 className="border p-1 text-dark bg-light">Urban</h2>
          <h2 className="border-r border-y p-1 text-light">Trend</h2>
        </div>
      </Link>
      <DesktopMenu />
    </nav>
  );
};

export default Navbar;
