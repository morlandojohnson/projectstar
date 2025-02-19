import logo from "../public/images/logo.png";
import SignupBtn from "./SignupBtn";

function Navbar() {
  return (
    <header className="mx-auto flex h-24 items-center justify-between px-12">
      <a href="#">
        <img src={logo} alt="FamilySync Logo" className="h-10 w-auto" />
      </a>
      <nav className="">
        <ul className="flex flex-row items-center justify-between gap-8">
          <li>
            <a
              href="#"
              className="text-primary inline-block font-semibold uppercase hover:text-(--color-primary-700)"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-block font-semibold text-(--color-primary-500) uppercase hover:text-(--color-primary-700)"
            >
              Log In
            </a>
          </li>
          <li>
            <SignupBtn />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
