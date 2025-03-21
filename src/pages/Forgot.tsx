import Header from "../components/Header";
import forgotImg from "../public/images/forgot-pass.webp";

import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Forgot() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await resetPassword(email);
      console.log("Password reset sent");
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
                Forgot your password?
              </h2>
              <form
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-lg flex-col items-center px-4"
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
                  <button className="btn bg-primary active:bg-primary w-full rounded text-base text-white hover:bg-(--color-primary-300)">
                    Email Me
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section
          className="flex hidden h-full w-1/2 flex-col items-center lg:block lg:bg-cover"
          style={{ backgroundImage: `url(${forgotImg})` }}
        ></section>
      </main>
    </>
  );
}

export default Forgot;
