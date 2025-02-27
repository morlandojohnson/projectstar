import hero from "../public/images/hero.webp";
import SignupBtn from "./SignupBtn";

function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content mt-35 text-center lg:mt-20">
        <div className="max-w-md">
          <h1 className="text-primary mb-12 text-4xl font-bold md:text-5xl">
            Stay Organized.
            <span className="text-secondary mt-2 block">Stay Connected.</span>
          </h1>
          <p className="mb-12 text-base md:text-lg">
            Manage your family's schedules, tasks, shopping lists, and more -
            all in one place. Simplify life and bring your family together
            effortlessly.
          </p>
          <SignupBtn />
        </div>
      </div>
    </div>
  );
}

export default Hero;
