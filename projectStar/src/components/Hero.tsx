import hero from "../public/images/hero.webp";
import SignupBtn from "./SignupBtn";

function Hero() {
  return (
    <section className="hero mt-10 p-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6">
        <div className="hero--text max-fit content-center">
          <h1 className="text-primary mb-12 pt-16 text-5xl font-bold">
            Stay Organized.
            <span className="text-secondary mt-2 block">Stay Connected.</span>
          </h1>
          <p className="mb-12 max-w-3/4 text-lg">
            Manage your family's schedules, tasks, shopping lists, and more -
            all in one place. Simplify life and bring your family together
            effortlessly.
          </p>
          <SignupBtn />
        </div>
        <div className="justify-items-center">
          <img
            src={hero}
            alt="Image of a family sitting in a field of flowers"
            className="max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>
    // <div className="hero bg-base-200 min-h-screen">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <img src={hero} className="max-w-lg rounded-lg" />
    //     <div className="p-4">
    //       <h1 className="text-primary text-5xl font-bold">
    //         Stay Organized.
    //         <span className="text-secondary mt-2 block">Stay Connected.</span>
    //       </h1>
    //       <p className="max-w-2/3 py-6 text-lg">
    //         Manage your family's schedules, tasks, shopping lists, and more -
    //         all in one place. Simplify life and bring your family together
    //         effortlessly.
    //       </p>
    //       <SignupBtn />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero;
