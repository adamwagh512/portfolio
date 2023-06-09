import React from "react";
import Link from 'next/link'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center md:mt-[17%] lg:mt-0">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-400">
             Front-End | Back-End | MERN Stack Developer
          </p>
          <h1 className="py-4 text-white">
            Hello, my name is <span className="text-[#5651e5]"> Adam Wagh</span>
          </h1>
          <h1 className="py-2 text-white">
            {" "}
            I am a Front-End Web Developer{" "}
          </h1>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto">
          Creative and driven junior front-end web developer with a passion for design and user experience, ready to bring your website to life with cutting-edge technology and innovative visual solutions.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full border p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://www.linkedin.com/in/adam-wagh/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full border p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="https://github.com/adamwagh512"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full border p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="mailto:adamwagh@gmail.com"
                target="_blank"
              >
                <AiOutlineMail />
              </Link>
            </div>

            <div className="rounded-full border p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href="../assets/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <BsPersonLinesFill />
              </Link>
            </div>
            
            {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link 
              href='/#contact'
              >
              <BsFillPersonLinesFill />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
