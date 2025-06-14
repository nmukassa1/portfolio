import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 bg-white z-50">
      <nav className="w-full flex items-center justify-between">
        <Link
          id="linkedIn-link"
          href="https://www.linkedin.com/in/nyah-mukassa-601b47213/"
          className="header-link text-2xl font-bold hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </Link>
        <Link
          id="contact-link"
          href="mailto:nmukassa1@gmail.com"
          className="header-link text-2xl font-bold hover:text-gray-400"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;
