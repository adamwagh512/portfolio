import React from "react";
import Image from "next/legacy/image";
import algo_1 from "../public/assets/projects/algo_1.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const algos = () => {
  return (
    <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={algo_1}
        alt="/"
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">Codewars Katas</h2>
        <h3>Javascript/Python</h3>
      </div>
    </div>
    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>A Github repository of Codewars kata solutions is an excellent showcase my thought process and problem-solving skills. The repository contains a collection of well-documented solutions to various katas, providing insight into how I approach and solve complex programming challenges. The solutions are well-organized and easy to navigate, making it a valuable resource for aspiring programmers looking to learn new techniques and approaches. By sharing my thought process and solutions, I hope to contribute to the programming community's growth and development, and inspiring others to improve their coding skills.</p>
         
          <a href='https://github.com/adamwagh512/dataStructuresAndAlgos' target='_blank'>
          <button className="px-8 py-2 mt-4 text-white bg-[#0093B9]" >Visit the Repository</button>
          </a>
      </div>
      <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
              <p>Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> JavaScript</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Python</p>                
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

export default algos