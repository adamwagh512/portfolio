import React from "react";
import Image from "next/legacy/image";
import schedule_1 from "../public/assets/projects/schedule_1.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const planner = () => {
  return (
    <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={schedule_1}
        alt="/"
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">Workday Scheduler</h2>
        <h3>Javascript/HTML/CSS</h3>
      </div>
    </div>
    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>Workday Planner is a project that helps users effectively plan and organize their work days. Utilizing local storage, the app allows users to save their schedule and access it at any time, even if they close the app or turn off their device. With an easy-to-use interface, users can input their work schedule, and add important tasks. Workday Planner is a valuable tool for anyone looking to increase their productivity and effectively manage their time. With its convenient features and reliable functionality, Workday Planner is a must-have app for busy professionals and students alike.</p>
         
          <a href='https://adamwagh512.github.io/work-day-scheduler/' target='_blank'>
          <button className="px-8 py-2 mt-4 text-white bg-[#0093B9]" >Launch the app</button>
          </a>
          
          <a href='https://github.com/adamwagh512/work-day-scheduler' target='_blank'>
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

export default planner