import familySpace from "../public/images/family-space.webp";
import organize from "../public/images/organize.webp";

function About() {
  return (
    <section className="about bg-base-200 mt-10 pt-10">
      <div className="grid-2 mx-auto grid max-w-7xl gap-4">
        <img
          src={familySpace}
          alt="Three image collage of families gathering."
          className="col-end-1 mb-8 max-w-md justify-self-center rounded-2xl p-2"
        />
        <div className="column col-start-1 flex flex-col justify-center gap-4 p-4">
          <p className="text-secondary text-md font-bold uppercase">
            Create Your Family Space
          </p>
          <p className="">
            Sign up and invite your family members to join your private family
            hub.
          </p>
        </div>
        <div className="column col-start-0 flex flex-col justify-start gap-4 p-4">
          <p className="text-secondary text-md font-bold uppercase">
            Organize & Customize
          </p>
          <p>
            Set up your calendar, create tasks, add shopping lists, and
            personalize everything to fit your family’s needs.
          </p>
        </div>
        <img
          src={organize}
          alt="Three image collage of a shopping list, computer, and family in kitchen."
          className="col-span-1 mb-8 max-w-md justify-self-center rounded-2xl p-2"
        />

        <img src="#" alt="" />
        <div className="col-span-2">
          <p>Lorem, ipsum dolor.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            enim!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
