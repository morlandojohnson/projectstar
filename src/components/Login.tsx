import Header from "./Header";
import login from "../public/images/login.webp";

function Login() {
  return (
    <>
      <Header />
      <section className="pt-8">
        <div className="mx-auto min-h-screen max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex w-full flex-col items-center justify-center pt-40 lg:pt-0">
              <h2 className="text-primary mb-12 px-4 text-center text-2xl font-bold">
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
                  <label className="floating-label w-full">
                    <span>Password</span>
                    <input
                      type="password"
                      className="input validator input-primary"
                      required
                      placeholder="Password"
                      minLength={8}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                    />
                    <p className="validator-hint">
                      Must be more than 8 characters, including
                      <br />
                      At least one number
                      <br />
                      At least one lowercase letter
                      <br />
                      At least one uppercase letter
                    </p>
                  </label>
                  <button className="btn bg-primary active:bg-primary w-full rounded text-base text-white hover:bg-(--color-primary-300)">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block">
              <img src={login} alt="" className="max-w-5/6 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
