import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import Dashboard from "../pages/Dashboard";
import MyFamilyPage from "../pages/MyFamilyPage";
import Calendar from "../pages/CalendarPage";
import Tasks from "../pages/TasksPage";
import ShoppingList from "../pages/ShoppingListPage";
import Recipes from "../pages/RecipesPage";
import MealPlan from "../pages/MealPlanPage";
import PhotosPage from "../pages/PhotosPage";
import MessagesPage from "../pages/MessagesPage";
import ContactUs from "../pages/ContactUsPage";
import ProtectedRoutes from "./ProtectedRoutes";

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/my-family",
        element: <MyFamilyPage />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "/shopping-list",
        element: <ShoppingList />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/meal-plan",
        element: <MealPlan />,
      },
      {
        path: "/photos",
        element: <PhotosPage />,
      },
      {
        path: "/messages",
        element: <MessagesPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-pass",
    element: <Forgot />,
  },
]);

export default router;
