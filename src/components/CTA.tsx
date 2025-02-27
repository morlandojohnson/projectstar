import SignupBtn from "./SignupBtn";

function CTA() {
  return (
    <section className="bg-base-300 pt-20 pb-20">
      <h2 className="text-primary mx-auto max-w-3/4 pb-12 text-center text-2xl font-semibold md:max-w-1/2 md:text-3xl">
        Ready to get started?{" "}
        <span className="block">Start organizing your family today!</span>
      </h2>
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <SignupBtn />
      </div>
    </section>
  );
}

export default CTA;
