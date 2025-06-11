import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 bg-white z-50">
      {/* <Link href="/" className="">
        Nyah Mukassa
      </Link> */}

      <nav className="w-full flex items-center justify-between">
        {/* <Link href="#projects" className="hover:text-gray-400">
          Projects
        </Link> */}
        <Link href="/" className="text-2xl font-bold hover:text-gray-400">
          Linkedin
        </Link>
        <Link href="" className="text-2xl font-bold hover:text-gray-400">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
