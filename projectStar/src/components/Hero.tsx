import hero from "../public/images/hero.webp";

function Hero() {
  return (
    <section className="border-2 border-black">
      <div className="border-red max-w-7x1 flex border-2">
        <div className="border-blue border-2">
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            ducimus similique molestias perspiciatis repellat.
          </p>
          <a href="#">Sign Up</a>
        </div>
        <div className="border-green border-2">
          <img
            src={hero}
            alt="Image of a family sitting in a field of flowers"
            className="max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
