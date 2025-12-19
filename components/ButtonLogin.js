import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name }) => {
  console.log(isLoggedIn);
  return (
    <Link href={isLoggedIn ? "/dashboard" : "/login"}>
      <button className="btn btn-primary">
        {isLoggedIn ? `G'day, ${name} 👋` : "Login"}
      </button>
    </Link>
  );
};

export default ButtonLogin;
