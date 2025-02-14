import logo from "../public/images/logo.png";

function Navbar() {
  return (
    <header className="flex justify-between items-center mx-auto px-12 h-24">
      <a href="#">
        <img src={logo} alt="FamilySync Logo" className="h-10 w-auto" />
      </a>
      <nav className="">
        <ul className="flex">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
