"use client";
import { signIn } from "next-auth/react";

const ButtonLogin = ({ session, extraStyle }) => {
  return (
    <button
      className={`btn btn-primary ${extraStyle ? extraStyle : ""}`}
      onClick={() =>
        session
          ? (window.location.href = "/dashboard")
          : signIn(undefined, { callbackUrl: "/dashboard" })
      }
    >
      {session ? "Go to dashboard" : "Login"}
    </button>
  );
};

export default ButtonLogin;
