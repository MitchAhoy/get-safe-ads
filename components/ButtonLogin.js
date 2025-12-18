import Link from "next/link";
import Button from "daisyui";

const ButtonLogin = ({ isLoggedIn }) => {
  return (
    <Link href={isLoggedIn ? "/dashboard" : "/login"}>
      <button className="btn btn-outline btn-secondary">Login</button>
    </Link>
  );
};

export default ButtonLogin;
