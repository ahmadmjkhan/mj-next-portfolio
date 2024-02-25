import { navLinks } from "@/app/constants";
import Link from "next/link";
import React from "react";
import Navlink from "./Navlink";
import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-peach">
      <Link href={"/"}>
        <h5 className="text-purple text-xl font-semibold">MJ</h5>
      </Link>
      <nav className="flex items-center gap-12 max-tablet:hidden">
        <ul className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Navlink href={link.url} label={link.label} />
            </li>
          ))}
        </ul>

        <Link href={"/contact"} className="btn btn-primary">
          <Phone size={24} />
          Contact Me
        </Link>
      </nav>

      <MobileMenu />
    </header>
  );
};

export default Navbar;
