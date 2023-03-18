import React from "react";
import Image from "next/legacy/image";
import password_1 from "../public/assets/projects/password_1.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const password = () => {
  return (
    <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={password_1}
        alt="/"
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">Password Generator</h2>
        <h3>Javascript/HTML/CSS</h3>
      </div>
    </div>
    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>Password Generator is a simple yet effective app that generates a random password based on user-selected criteria. With Password Generator, users can easily create strong and secure passwords for their online accounts by choosing the length of the password and selecting from a range of options, including uppercase and lowercase letters, numbers, and special characters. The app's interface is user-friendly and intuitive, making it easy for users to generate a password in just a few clicks. Password Generator is a valuable tool for anyone looking to enhance their online security and protect their personal information from cyber threats..</p>
         
          <a href='https://adamwagh512.github.io/password-generator/' target='_blank'>
          <button className="px-8 py-2 mt-4 text-white bg-[#0093B9]" >Launch the app</button>
          </a>

          <a href='https://github.com/adamwagh512/password-generator' target='_blank'>
          <button className="px-8 py-2 ml-8 mt-4 text-white bg-[#0093B9]" >Visit the Repository</button>
          </a>

      </div>
      <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
              <p>Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> JavaScript</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> HTML</p> 
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> CSS</p>                  
              </div>
          </div>
      </div>
      <Link href='/#p_projects'>
          <p className="underline cursor-pointer">Back</p>
      </Link>
    </div>
  </div>
  )
}

export default password