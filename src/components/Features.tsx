import { CalendarIcon } from "@heroicons/react/24/solid";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { NewspaperIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import FeatureCard from "./FeatureCard";

const featuresArr = [
  {
    id: 1,
    icon: <CalendarIcon className="text-primary size-6" />,
    header: "Calendar",
    description:
      "Keep track of appointments, school events, and special occasions in one centralized calendar. Never miss an important date again.",
  },
  {
    id: 2,
    icon: <ClipboardDocumentListIcon className="text-primary size-6" />,
    header: "Tasks & Chores",
    description:
      "Assign tasks, track progress, set deadlines, and make household duties easier to manage. Everyone knows what needs to be done.",
  },
  {
    id: 3,
    icon: <BellAlertIcon className="text-primary size-6" />,
    header: "Reminders",
    description:
      "Set personalized or shared reminders for bills, medications, gatherings, and important occasions with ease.",
  },
  {
    id: 4,
    icon: <ShoppingCartIcon className="text-primary size-6" />,
    header: "Shopping Lists",
    description:
      "Create and share shopping lists in real time. Whether it's groceries or household essentials, your family can add items on the go.",
  },
  {
    id: 5,
    icon: <ListBulletIcon className="text-primary size-6" />,
    header: "Recipes & Meal Plans",
    description:
      "Save and organize your favorite family recipes. Plan meals for the week, so everyone knows what's for dinner ahead of time.",
  },
  {
    id: 6,
    icon: <NewspaperIcon className="text-primary size-6" />,
    header: "Activity Feed",
    description:
      "Stay updated with a real-time family feed. See recent activity, completed tasks, and upcoming events all in one glance.",
  },
  {
    id: 7,
    icon: <PhotoIcon className="text-primary size-6" />,
    header: "Photos",
    description:
      "Capture and share special moments with your family. Upload and organize photos to create a private space for memories.",
  },
  {
    id: 8,
    icon: <PhoneIcon className="text-primary size-6" />,
    header: "Contacts",
    description:
      "Store emergency contacts, school numbers, and other important details all in one place for easy access.",
  },
];

function Features() {
  return (
    <section className="features pb mb-20">
      <h2 className="text-primary mb-20 text-center text-2xl font-semibold md:text-3xl">
        Your Family’s Hub for Organization
      </h2>
      <div className="xs:grid-cols-2 mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-4">
        {featuresArr.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            header={feature.header}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
