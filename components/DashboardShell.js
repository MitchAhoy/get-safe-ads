"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { signOut } from "next-auth/react";

const DashboardShell = ({ session, children }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-base-200 flex">
      <aside className="w-45 bg-base-100 border-r border-base-200 p-6 flex flex-col m-h-full">
        <div className="flex flex-col flex-1">
          <div className="relative inline-block">
            <div className="flex flex-row relative z-50">
              <button
                className="btn btn-ghost no-animation"
                onClick={() => setMenuIsActive(!menuIsActive)}
              >
                <span className="relative inline-block">
                  <Image
                    src={session.user.image}
                    width={24}
                    height={24}
                    alt="User profile picture"
                    className="rounded-full"
                  />
                  <span>
                    <span className="border-muted absolute rounded-full border bg-green-500 -bottom-0.5 right-0 h-2 w-2"></span>
                  </span>
                </span>
                <span>
                  <span>{session.user.name}</span>
                </span>

                <ChevronDown color="gray" />
              </button>
              {menuIsActive && (
                <ul
                  tabIndex="-1"
                  className={
                    "menu menu-sm dropdown-content bg-base-100 rounded-box mt-1 w-52 p-2 shadow absolute top-full"
                  }
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={() => signOut({ callbackUrl: "/" })}>Logout</a>
                  </li>
                </ul>
              )}
            </div>
          </div>

          <div className="mt-8">
            <ul className="menu menu-sm p-0 gap-2">
              <li>
                <a className="rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  Dashboard
                </a>
              </li>

              <li>
                <a className="rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                  Placements
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default DashboardShell;
