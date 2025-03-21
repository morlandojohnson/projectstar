import signupImg from "../public/images/signupImg.webp";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { googleSignIn, signUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Google Sign in
  async function handleGoogleSignIn(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/dashboard");
    } catch (error) {
      console.log("Error : ", error);
    }
  }

  // Create account function
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await signUp(email, password);
      console.log("User account created");
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
                Create your FamilySync account:
              </h2>
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4"
              >
                <div className="grid grid-cols-1 gap-6">
                  <label className="floating-label">
                    <span>First Name</span>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="input input-md input-primary"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                  <label className="floating-label">
                    <span>Last Name</span>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="input input-md input-primary"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                  <label className="floating-label flex w-full items-center">
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="input input-md input-primary"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label className="floating-label w-full">
                    <span>Password</span>
                    <input
                      type="password"
                      name="password"
                      className="input validator input-primary"
                      required
                      placeholder="Password"
                      minLength={8}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                    Continue
                  </button>
                  <button
                    className="btn text-primary border-primary w-full rounded bg-white text-base ring hover:bg-neutral-100 active:bg-white"
                    onClick={handleGoogleSignIn}
                  >
                    <FcGoogle />
                    Sign up with Google
                  </button>
                </div>
                <div className="mt-4 text-center">
                  Already have an account?
                  <Link to="/login">
                    <span className="text-primary active:text-primary inline-block pl-2 transition duration-200 hover:cursor-pointer hover:text-(--color-primary-300) hover:underline">
                      Login
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section
          className="flex hidden h-full w-1/2 flex-col items-center lg:block lg:bg-cover"
          style={{ backgroundImage: `url(${signupImg})` }}
        ></section>
      </main>
    </>
  );
}

export default Signup;
