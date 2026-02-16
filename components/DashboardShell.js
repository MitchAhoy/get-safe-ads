"use client";
import { Shield, ChevronDown } from "lucide-react";
import Image from "next/image";

const DashboardShell = ({ session, children }) => {
  return (
    <div className="min-h-screen bg-base-200 flex">
      <aside className="w-80 bg-base-100 border-r border-base-200 p-6 flex flex-col m-h-full">
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 justify-items-center">
              <Shield />
              <span className="text-xl font-semibold">Get Safe Ads</span>
            </div>
          </div>

          <div className="mt-8">
            <ul className="menu menu-md p-0 gap-1">
              <li>
                <a className="active rounded-xl">
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
            </ul>
          </div>
        </div>

        <div className="flex flex-row">
          <button className="btn btn-ghost  w-full">
            <Image
              src={session.user.image}
              width={24}
              height={24}
              alt="User profile picture"
            />

            <span>
              <span>{session.user.name}</span>
            </span>

            <ChevronDown />
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default DashboardShell;
