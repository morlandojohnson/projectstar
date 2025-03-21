import { Link } from "react-router-dom";
import logo from "../public/images/logo.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  return (
    <section className="flex h-full flex-col items-center">
      <nav className="mb-8 flex h-20 w-full items-center justify-start bg-white">
        <Link to="/">
          <img src={logo} alt="FamilySync Logo" className="ml-6 h-10 w-auto" />
        </Link>
      </nav>
      <ul className="menu w-full gap-2 text-base font-semibold">
        <li>
          <Link to="/wall" className="text-primary">
            Activity Wall
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="text-primary">
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/tasks" className="text-primary">
            Tasks/Chores
          </Link>
        </li>
        <li>
          <Link to="/shoppingList" className="text-primary">
            Shopping Lists
          </Link>
        </li>
        <li>
          <Link to="/mealPlanning" className="text-primary">
            Meal Planning
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="text-primary">
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/photos" className="text-primary">
            Photos
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="text-primary">
            Contacts
          </Link>
        </li>
        <li>
          <Link to="/messages" className="text-primary">
            Messages
          </Link>
        </li>
      </ul>
      <ul className="menu mt-auto mb-4 w-full gap-2 text-base font-semibold">
        <li>
          <Link to="/familySettings" className="text-primary">
            My Family
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-primary">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/messages" className="text-primary" onClick={handleSubmit}>
            Log Out
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;
