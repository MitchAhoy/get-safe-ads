import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name, extraStyle }) => {
  return (
    <Link href={isLoggedIn ? "/dashboard" : "/login"}>
      <button className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}>
        {isLoggedIn ? `G'day, ${name} 👋` : "Login"}
      </button>
    </Link>
  );
};

export default ButtonLogin;
