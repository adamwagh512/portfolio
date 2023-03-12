import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const navbar = () => {
  return (
    // Controls the size and positioning of the navbar
    <div className="fixed top-0 w-full h-20 shadow-xl z-[100]">
      {/* Handles styling and positioning within navbar */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#4E4E50]" >
        {/* Imports image and controls sizing */}
        <Image
          src="/../public/assets/AdamWagh_logo.jpg"
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
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
            </Link>
          </ul>
        </div>
        {/* The following div will only be visible when the screen size > med, and we will use it to display our menu on mobile devices */}
        <div className="md:hidden">
          {/* accessing icon from react icons dependency(to install: npm add react-icons) */}
          {/* Increased Icon size */}
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
};

export default navbar;