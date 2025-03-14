import Header from "./Header";
import login from "../public/images/login.webp";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <>
      <Header />
      <section className="bg-base-200 flex min-h-screen items-center">
        <div className="card mx-4 w-full max-w-lg shadow-xl sm:mx-8 sm:mx-auto lg:max-w-4xl">
          <div className="bg-base-100 grid grid-cols-1 rounded-xl lg:grid-cols-2">
            <div className="px-4 py-24">
              <h2 className="text-primary mb-8 text-center text-2xl font-semibold">
                Sign in to your FamilySync account:
              </h2>
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
                  <label className="floating-label">
                    <span>Password</span>
                    <input
                      type="text"
                      placeholder="Password"
                      className="input input-md input-primary"
                    />
                  </label>
                  <button className="btn bg-primary active:bg-primary w-full rounded text-base text-white hover:bg-(--color-primary-300)">
                    Sign In
                  </button>
                  <button className="btn text-primary border-primary w-full rounded bg-white text-base hover:bg-neutral-100 active:bg-white">
                    <FcGoogle />
                    Log in with Google
                  </button>
                  <span className="inline-block text-end text-sm">
                    <Link
                      to="/forgot-pass"
                      className="text-primary active:text-primary hover:text-(--color-primary-300)"
                    >
                      Forgot Password?
                    </Link>
                  </span>
                </div>
              </form>
            </div>
            <div className="hidden lg:block">
              <img src={login} alt="" className="rounded-r-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
