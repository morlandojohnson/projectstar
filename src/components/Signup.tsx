import signupImg from "../public/images/signupImg.webp";
import Header from "./Header";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function Signup() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  return (
    <>
      <Header />
      {/*Signup Section*/}
      <section className="bg-base-200 flex min-h-screen items-center">
        <div className="card mx-4 w-full max-w-lg shadow-xl sm:mx-8 sm:mx-auto lg:max-w-5xl">
          <div className="bg-base-100 grid grid-cols-1 rounded-xl lg:grid-cols-2">
            <div className="px-4 py-16">
              <h2 className="text-primary mb-8 text-center text-2xl font-semibold">
                Create your FamilySync account:
              </h2>
              <form action="">
                <div className="mb-4">
                  <form
                    action=""
                    className="mx-auto flex max-w-lg flex-col items-center gap-8 px-4"
                  >
                    <div className="grid grid-cols-1 gap-8">
                      <label className="floating-label">
                        <span>First Name</span>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          className="input input-md input-primary"
                        />
                      </label>
                      <label className="floating-label">
                        <span>Last Name</span>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          className="input input-md input-primary"
                        />
                      </label>
                      <label className="floating-label flex w-full items-center">
                        <span>Email Address</span>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="input input-md input-primary"
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
                      <button className="btn text-primary border-primary w-full rounded bg-white text-base hover:bg-neutral-100 active:bg-white">
                        <FcGoogle />
                        Sign in with Google
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
              </form>
            </div>
            <div className="hidden lg:block">
              <img src={signupImg} alt="" className="rounded-r-xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
