import logo from "../public/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0">
      <nav className="flex h-20 w-full items-center justify-start bg-white shadow-md">
        <Link to="/">
          <img src={logo} alt="Logo" className="ml-6 h-10 w-auto" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
