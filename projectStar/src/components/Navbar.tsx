import logo from "../public/images/logo.png";

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
            <a
              href="#"
              className="bg-secondary inline-block rounded-3xl px-6 py-2 font-semibold text-white uppercase hover:bg-(--color-secondary-600) active:bg-(--color-secondary-400)"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
