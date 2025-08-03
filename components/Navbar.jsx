"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import {
  FadeLeft,
  FadeRight,
  FadeUp,
  listItemVariants,
} from "../app/animations/Animations";

const Links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between h-full px-4 bg-slate-50 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Links Section */}
      <div className="hidden w-1/3 gap-4 text-xl md:flex">
        {Links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>

      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center w-1/3 mt-4 cursor-pointer select-none md:hidden lg:flex">
        <Link href="/" className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300 hover:text-blue-600">
            Berkan Özçelik
          </h1>
          <p className="mt-1 text-sm font-medium tracking-widest text-gray-600 uppercase">
            Web Developer <span className="mx-2">|</span> Data Scientist
          </p>
        </Link>
      </div>

      {/*   İcons Section    */}

      <div className="items-center justify-center hidden w-1/3 gap-6 md:flex">
        <Link href="https://github.com/BerkanJs">
          <FaGithub className="text-3xl " />
        </Link>
        <Link
          href="https://www.linkedin.com/in/berkan-%C3%B6z%C3%A7elik-2bb733313/
         
         "
        >
          <FaLinkedin className="text-3xl" />
        </Link>
      </div>

      {/*  Responsive Menu Section    */}

      <div className="z-20 md:hidden">
        {/*   Menu Button   */}
        <button onClick={() => setOpen(!open)} className="relative z-50">
          {open ? (
            <RxCross2 className="text-3xl font-bold text-white transition-all duration-150 animate-bounce " />
          ) : (
            <GiHamburgerMenu className="text-3xl font-bold text-white transition-all duration-150 hover:rotate-12 " />
          )}
        </button>

        {/*   Menu items  */}
        {open && (
          <motion.div
            variants={FadeLeft(0.1)}
            initial={"hidden"}
            whileInView={"visible"}
            className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen gap-8 text-xl text-white bg-black "
          >
            {Links.map((link) => (
              <motion.div
                variants={FadeUp(0.2)}
                initial={"hidden"}
                whileInView={"visible"}
                key={link.url}
              >
                <Link onClick={() => setOpen(!open)} href={link.url}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
