import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 p-4 gap-4 flex justify-between bg-dark z-[999]">
      <Link href="/">
        <div className="flex uppercase text-sm lg:text-lg font-cantarell">
          <h2 className="border p-1 text-dark bg-light">Urban</h2>
          <h2 className="border-r border-y p-1 text-light">Luxury</h2>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
