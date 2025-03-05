import logo from "../public/images/logo.png";
import SignupBtn from "./SignupBtn";

function Navbar() {
  return (
    <header className="drawer sticky top-0 z-50 h-20">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col justify-center">
        {/* Navbar */}
        <div className="navbar h-20 w-full items-center bg-white shadow-md">
          <div className="mr-2 flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-(--color-secondary)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="-ml-12 flex flex-1 justify-center px-2 lg:mx-2 lg:justify-start">
            <a href="#">
              <img src={logo} alt="FamilySync Logo" className="h-10 w-auto" />
            </a>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="flex flex-row items-center justify-between gap-8">
              {/* Navbar Links */}
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
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="bg-base-200 flex min-h-full w-80 flex-col items-center gap-8 p-4 pt-16">
          {/* Mobile Sidebar */}
          <li>
            <a
              href="#"
              className="text-primary active:text-primary inline-block font-semibold uppercase hover:bg-white hover:text-(--color-primary-700)"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="active:text-primary inline-block font-semibold text-(--color-primary-500) uppercase hover:bg-white hover:text-(--color-primary-700)"
            >
              Log In
            </a>
          </li>
          <li>
            <SignupBtn />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
