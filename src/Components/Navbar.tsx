"use client";

import React, { useContext } from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Navlink from "./Navlink";
import { AppContext } from "@/Context/DataContext";
import Link from "next/link";

const Navbar = () => {
  const { save, add } = useContext(AppContext);

  return (
    <div className="border border-slate-800 py-2">
      <div className="navbar container mx-auto bg-black shadow-sm">

        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Navlink />
            </ul>
          </div>

          <a className="flex gap-2 text-xl">
            <Image
              src={logo}
              alt="Logo"
              width={30}
              height={30}
            />

            <h1 className="font-bold">FITLOG</h1>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3 px-1">
            <Navlink />
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2">
          
        <div className="flex items-center gap-8">
  <Link href={'/plan'}><button className="flex items-center gap-2 text-sm text-white">
    Plan
    <span className="flex h-5 w-7 items-center justify-center rounded-2xl bg-[#D7FF00] text-xs font-bold text-black">
      {add.length}
    </span>
  </button></Link>

 <Link href={'/plan'}>
  <button className="flex items-center gap-2 text-sm text-slate-500">
    Saved
    <span className="flex h-5 w-7 items-center justify-center rounded-2xl border border-slate-700 text-xs">
      {save.length}
    </span>
  </button>
 </Link>
</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;