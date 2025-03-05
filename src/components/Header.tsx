import logo from "../public/images/logo.png";

function Header() {
  return (
    <header className="sticky top-0">
      <nav className="flex h-20 w-full items-center justify-center bg-white shadow-md lg:justify-start">
        <a href="#">
          <img src={logo} alt="Logo" className="h-10 w-auto lg:ml-6" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
