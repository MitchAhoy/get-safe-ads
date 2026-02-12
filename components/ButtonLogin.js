import Link from "next/link";

const ButtonLogin = ({ session, extraStyle }) => {
  return (
    <Link href={session ? "/dashboard" : "/api/auth/signin"}>
      <button className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}>
        {session ? `G'day, ${session.user.name ?? "mate"} 👋` : "Login"}
      </button>
    </Link>
  );
};

export default ButtonLogin;
