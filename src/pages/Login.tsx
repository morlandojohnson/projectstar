import Header from "../components/Header";
import login from "../public/images/login.webp";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { googleSignIn, logIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleGoogleSignIn(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await logIn(email, password);
      console.log("User logged in");
      navigate("/dashboard");
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  return (
    <>
      <main className="flex h-screen w-full flex-col lg:flex-row">
        <section className="flex h-full flex-col lg:w-1/2">
          <Header />
          <div className="bg-base-flex h-full flex-col items-center p-4 lg:p-20">
            <div className="px-4 py-20 lg:py-16">
              <h2 className="text-primary mb-8 text-center text-2xl font-semibold">
                Sign in to your FamilySync account:
              </h2>
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4"
              >
                <div className="grid grid-cols-1 gap-6">
                  <label className="floating-label flex w-full items-center">
                    <span>Email Address</span>
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="input input-md input-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label className="floating-label">
                    <span>Password</span>
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-md input-primary"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  <button className="btn bg-primary active:bg-primary w-full rounded text-base text-white hover:bg-(--color-primary-300)">
                    Sign In
                  </button>
                  <button
                    className="btn text-primary border-primary w-full rounded bg-white text-base ring hover:bg-neutral-100 active:bg-white"
                    onClick={handleGoogleSignIn}
                  >
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
              <div className="mt-4 text-center">
                Don't have an account?
                <Link to="/signup">
                  <span className="text-primary active:text-primary inline-block pl-2 transition duration-200 hover:cursor-pointer hover:text-(--color-primary-300) hover:underline">
                    Sign up
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="flex hidden h-full w-1/2 flex-col items-center lg:block lg:bg-cover"
          style={{ backgroundImage: `url(${login})` }}
        ></section>
      </main>
    </>
  );
}

export default Login;
