import React from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="homePage" className="pt-14 h-screen">
      <div>
        <div className="flex items-center m-auto">
          <Image
            className="pt-10"
            src="/../public/assets/console.jpg"
            width="1000"
            height="150"
          />
        </div>
        <div className="flex m-auto items-center justify-between my-4 w-[80%] sm:[80%]">
          <div className="rounded-full p-6 cursor-pointer hover:scale-125 ease in duration-100 border">
            <a href="https://www.linkedin.com/in/adam-wagh/" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="rounded-full p-6 cursor-pointer hover:scale-125 ease in duration-100 border">
            <a href="https://github.com/adamwagh512">
              <FaGithub />
            </a>
          </div>
          <div className="rounded-full p-6 cursor-pointer hover:scale-125 ease in duration-100 border">
            <a href="mailto:adamwagh@gmail.com">
              <AiOutlineMail />
            </a>
          </div>
          <div className="rounded-full p-6 cursor-pointer hover:scale-125 ease in duration-100 border">
            <a href="../assets/resume.pdf" target="_blank" rel="noreferrer">
              <BsPersonLinesFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
