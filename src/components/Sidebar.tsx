import { Link, useLocation } from "react-router-dom";
import logo from "../public/images/logo.png";
import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// Icons
import { MdFamilyRestroom } from "react-icons/md";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { PiCookingPotFill } from "react-icons/pi";
import { GiMeal } from "react-icons/gi";
import { IoMdPhotos } from "react-icons/io";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";

const navLinks = [
  {
    id: 0,
    name: "Home",
    link: "/dashboard",
    icon: <IoHome />,
  },
  {
    id: 1,
    name: "MyFamily",
    link: "/my-family",
    icon: <MdFamilyRestroom />,
  },
  {
    id: 2,
    name: "Calendar",
    link: "/calendar",
    icon: <BsCalendar2DateFill />,
  },
  {
    id: 3,
    name: "Tasks/Chores",
    link: "/tasks",
    icon: <FaTasks />,
  },
  {
    id: 4,
    name: "Shopping Lists",
    link: "/shopping-list",
    icon: <FaShoppingCart />,
  },
  {
    id: 5,
    name: "Recipes",
    link: "/recipes",
    icon: <PiCookingPotFill />,
  },
  {
    id: 6,
    name: "Meal Planning",
    link: "/meal-plan",
    icon: <GiMeal />,
  },
  {
    id: 7,
    name: "Photos",
    link: "/photos",
    icon: <IoMdPhotos />,
  },
  {
    id: 8,
    name: "Messages",
    link: "/messages",
    icon: <AiFillMessage />,
  },
  {
    id: 9,
    name: "Contact Us",
    link: "/contact-us",
    icon: <MdOutlineContactMail />,
  },
];

function Sidebar() {
  const { logOut } = useAuth();
  const { pathname } = useLocation();

  return (
    <nav className="flex h-screen w-full flex-col">
      <div className="mb-10 flex h-20 w-full items-center justify-start bg-white">
        <img src={logo} alt="FamilySync Logo" className="ml-6 h-10 w-auto" />
      </div>
      {/* Navigation Links - Map over navLinks object to nav link buttons - styling based on hover or active state*/}
      <div>
        {navLinks.map((link) => (
          <div key={link.id}>
            <Link
              to={link.link}
              className={`btn btn-block justify-start border-none text-base shadow-none ${
                pathname === link.link
                  ? "text-primary rounded-none bg-white hover:bg-white"
                  : "hover:bg-primary-300 rounded-none bg-transparent text-(--color-text) hover:text-white"
              }`}
            >
              <span className="mx-4">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link
          to="/login"
          className={`btn btn-block justify-start border-none text-base shadow-none ${
            pathname === "/login"
              ? "text-primary rounded-none bg-white hover:bg-white"
              : "hover:bg-primary-300 rounded-none bg-transparent text-(--color-text) hover:text-white"
          }`}
          onClick={logOut}
        >
          <span className="mx-4">
            <IoLogOut />
          </span>
          <span>Log Out</span>
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;
