import familySpace from "../public/images/family-space.webp";
import organize from "../public/images/organize.webp";
import connected from "../public/images/connected.webp";

function About() {
  return (
    <section className="about bg-base-300 mb-20 pt-20 pb-20">
      <h2 className="text-primary mb-20 px-2 text-center text-2xl font-semibold md:text-3xl">
        Stay Organized in Three Simple Steps
      </h2>
      <div className="mx-auto flex max-w-7xl flex-col gap-20">
        <div className="flex flex-col justify-center gap-12 md:flex-row">
          <img
            src={familySpace}
            alt="Collage of images. Family together in bed. Two kids reading. A mother laying next to her two children."
            className="order-2 mx-4 rounded-2xl object-cover md:order-1 md:ml-4 md:w-2/5"
          />
          <div className="order-1 flex flex-col md:order-2 md:w-2/5">
            <h3 className="text-secondary mb-4 p-4 text-center text-xl font-semibold uppercase md:text-start">
              Create Your Family Space
            </h3>
            <p className="px-4 text-base md:text-lg">
              Sign up and invite your family members to join your private family
              hub. With just a few clicks, everyone gets access to a shared
              space where schedules, lists, and memories come together.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-12 md:flex-row">
          <div className="m:w-2/5 flex flex-col">
            <h3 className="text-secondary md:tex-start mb-4 ml-4 pt-4 pb-4 text-center text-xl font-semibold uppercase">
              Organize & Customize
            </h3>
            <p className="ml-4 pr-4 text-base md:text-lg">
              Set up your calendar, create tasks, add shopping lists, and
              personalize everything to fit your family’s needs. Everything is
              neatly organized so your family always knows what’s happening.
            </p>
          </div>
          <img
            src={organize}
            alt="Collage of images. A written shopping list. A laptop next to a planner and phone. A family gathered around in the kitchen."
            className="mx-4 rounded-2xl object-cover md:w-2/5"
          />
        </div>
        <div className="flex flex-col justify-center gap-12 md:flex-row">
          <img
            src={connected}
            alt="Collage of images. A family reading inside a tent. Someone scrolling images on a phone in front of a laptop. Someone writing on a weekly planner tablet."
            className="order-2 mx-4 rounded-2xl object-cover md:order-1 md:ml-4 md:w-2/5"
          />
          <div className="md:oder-2 order-1 flex flex-col md:w-2/5">
            <h3 className="text-secondary md:tex-start mb-4 p-4 text-center text-xl font-semibold uppercase">
              Stay Connected
            </h3>
            <p className="px-4 text-lg">
              Get real-time updates, reminders, and notifications so nothing
              falls through the cracks. Whether you're at home or on the go,
              your family stays connected effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
