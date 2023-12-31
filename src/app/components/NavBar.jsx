import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
]

const NavBar = () => {
  return (
    <nav>
      <div className="mx-auto flex flex-wrap items-center justify-between p-8">
        <Link href={"/"} className="text-5xl font-semibold text-white">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) =>
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
