import Header from "./Header";
import forgotImg from "../public/images/forgot-pass.webp";

function Forgot() {
  return (
    <>
      <Header />
      <section className="bg-base-200 flex min-h-screen items-center">
        <div className="card mx-4 w-full max-w-lg shadow-xl sm:mx-8 sm:mx-auto lg:max-w-4xl">
          <div className="bg-base-100 grid grid-cols-1 rounded-xl lg:grid-cols-2">
            <div className="px-4 py-24">
              <h2 className="text-primary mb-8 text-center text-2xl font-semibold">
                Forgot your password?
              </h2>
              <p className="text-primary mb-8 px-10 text-center md:px-14">
                We'll send you an email to reset your password
              </p>
              <form
                action=""
                className="mx-auto flex max-w-lg flex-col items-center gap-8 px-4"
              >
                <div className="grid grid-cols-1 gap-8">
                  <label className="floating-label flex w-full items-center">
                    <span>Email Address</span>
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="input input-md input-primary"
                    />
                  </label>
                  <button className="btn bg-primary active:bg-primary w-full rounded text-base text-white hover:bg-(--color-primary-300)">
                    Email Me
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block">
              <img src={forgotImg} alt="" className="rounded-r-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forgot;
