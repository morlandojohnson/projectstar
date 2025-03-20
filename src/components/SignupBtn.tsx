import { Link } from "react-router-dom";

function SignupBtn() {
  return (
    <Link
      to="/signup"
      className="bg-secondary inline-block rounded-3xl px-6 py-2 font-semibold text-white uppercase hover:bg-(--color-secondary-600) active:bg-(--color-secondary-400)"
    >
      Sign Up
    </Link>
  );
}

export default SignupBtn;
