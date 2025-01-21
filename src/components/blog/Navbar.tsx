import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between px-10 py-5 md:px-36  mx-auto">
      <Link
        href={"/"}
        className="md:text-3xl text-2xl font-bold hover:text-yellow-800 duration-200 underline"
      >
        Sanity Blog
      </Link>

      <nav>
        <ul className="flex gap-2 md:gap-6">
          <Link href={"/about"}>
            <li className="hover:underline font-bold  hover:text-cyan-600  duration-200 text-xl cursor-pointer">
              About
            </li>
          </Link>
          <Link href={"/contact"}>
          <li className="hover:underline  font-bold hover:text-cyan-600 duration-200 text-xl cursor-pointer">
            Contact
          </li></Link>
        </ul> 
      </nav>
    </header>
  );
};

export default Navbar;
