import familySpace from "../public/images/family-space.webp";
import organize from "../public/images/organize.webp";
import connected from "../public/images/connected.webp";

function About() {
  return (
    <section className="about bg-base-300 mb-20 pt-20 pb-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-20">
        <div className="flex flex-row justify-center gap-12">
          <img
            src={familySpace}
            alt=""
            className="ml-4 w-2/5 rounded-2xl object-cover"
          />
          <div className="flex w-2/5 flex-col">
            <h2 className="text-secondary mb-4 p-4 text-xl font-semibold uppercase">
              Create Your Family Space
            </h2>
            <p className="px-4 text-lg">
              Sign up and invite your family members to join your private family
              hub. With just a few clicks, everyone gets access to a shared
              space where schedules, lists, and memories come together.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-12">
          <div className="flex w-2/5 flex-col">
            <h2 className="text-secondary mb-4 ml-4 pt-4 pb-4 text-xl font-semibold uppercase">
              Organize & Customize
            </h2>
            <p className="ml-4 pr-4 text-lg">
              Set up your calendar, create tasks, add shopping lists, and
              personalize everything to fit your family’s needs. Everything is
              neatly organized so your family always knows what’s happening.
            </p>
          </div>
          <img
            src={organize}
            alt=""
            className="w-2/5 rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-row justify-center gap-12">
          <img
            src={connected}
            alt=""
            className="ml-4 w-2/5 rounded-2xl object-cover"
          />
          <div className="flex w-2/5 flex-col">
            <h2 className="text-secondary mb-4 p-4 text-xl font-semibold uppercase">
              Stay Connected
            </h2>
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
