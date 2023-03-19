import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import Logo from '../public/assets/images/AdamWagh_logo.jpg'
import Mobile_logo from "../public/assets/images/mobile_logo.jpg"

// Many individual styling comments were left out because I can automatically see them. To ensure that you can see them as well please make sure you are using
// The Tailwind CSS IntelliSense extention in your IDE.

const navbar = () => {
  // useState hook that sets nav to false by default
  const [nav, setNav] = useState(false);
  // declares a function called handleNav that sets nav to the opposite of whatever it was
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    // Controls the size and positioning of the navbar
    <div className="fixed top-0 w-full h-20 shadow-xl z-[100]">
      {/* Handles styling and positioning within navbar */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#262627]">
        {/* Imports image and controls sizing */}
        <Image
          src={Logo}
          alt="logo"
          width="125"
          height="50"
        />
        {/* The following div contains an unordered list */}
        <div>
          {/*This unordered list contains the links to all the sections of my portfolio, it is hidden by default and only shows up when screen size >= med  */}
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#p_projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        {/* The following div will only be visible when the screen size > med, and we will use it to display our menu on mobile devices */}
        <div onClick={handleNav} className="md:hidden">
          {/* accessing icon from react icons dependency(to install: npm add react-icons) */}
          {/* Increased Icon size */}
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* Overlay for when the mobile menu is activated */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Styling for the mobile menu bar */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-{75%} sm:w-[60%] md:[45%] h-screen bg-[#1f2937] p-10 ease-in duration-500"
              : // We set this to -100% fixed left so we can have the nice ease in feature
                "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            {/* Top part of the mobile menu */}
            <div className="flex w-full items-center justify-between">
              {/* Controls mobile logo */}
              <Image
                src={Mobile_logo}
                width="120"
                height="35"
                alt="logo"
              />
              {/* Controls button to close mobile menu */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg border p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* Controls headline*/}
            <div className="border-b border-[#4E4E50] my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something extraordinary
              </p>
            </div>
          </div>
          {/* This div controls styling for mobile menu links */}
          <div className="py-4 flex flex-col">
            {/* Menu options for mobile menu */}
            <ul className="uppercase">
              <Link href="/">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#p_projects">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            {/* This div is responsible for rendereing 'Lets Connect' near the bottom of the mobile menu */}
            <div className="pt-6">
              <p className="uppercase tracking-widest text-[#0093B9]">
                Lets Connect
              </p>
              {/* This div is responsible for rendering social media icons to the bottom of the screen */}
              <div className="flex items-center justify-between my-4 w-[80%] sm:[80%]">
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease in duration-100 border">
                <a href="https://www.linkedin.com/in/adam-wagh/" target='_blank'>
                  <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease in duration-100 border">
                  <a href="https://github.com/adamwagh512">
                  <FaGithub />
                  </a>
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease in duration-100 border">
                  <a href="mailto:adamwagh@gmail.com">
                  <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease in duration-100 border">
                  <a href="../assets/resume.pdf"
                      target="_blank"
                      rel="noreferrer">
                  <BsPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
