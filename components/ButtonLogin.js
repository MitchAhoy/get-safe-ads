"use client";
import { signIn } from "next-auth/react";

const ButtonLogin = ({ session, extraStyle }) => {
  return (
    <button
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      onClick={() => signIn(undefined, { callback: "/dashboard" })}
    >
      {session ? `G'day, ${session.user.name ?? "mate"} 👋` : "Login"}
    </button>
  );
};

export default ButtonLogin;
