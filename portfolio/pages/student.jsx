import React from "react";
import Image from "next/legacy/image";
import student_2 from "../public/assets/projects/student_2.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const student = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={student_2}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">StudySchedule</h2>
          <h3>App still in development</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>StudySchedule is an app currently in development that aims to help busy college students plan and manage their schedules effectively. Developed by programmers Adam Wagh and Aaron Anglin, the app offers a simple, user-friendly interface that allows students to schedule their study time, set reminders, and keep track of important deadlines. With StudySchedule, students can optimize their time, avoid procrastination, and reduce stress, helping them to achieve their academic goals. The app is being designed with the specific needs of college students in mind, and will be available soon.
            </p>
            <a href="https://drive.google.com/file/d/1dp9iycqFDawHtbJvrgk6rARwm_rKUAtK/view" target='_blank'>
                <button className="px-8 py-2 mt-4 mr-8 text-white bg-[#0093B9]">Demo</button>
            </a>
            {/* <button className="px-8 py-2 mt-4 text-white bg-[#0093B9]" >Code</button> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
                <p>Technologies</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                    <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> NextJS</p>
                    <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Tailwind</p>
                    <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Javascript</p>
                    <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> MongoDB Atlas</p>
                </div>
            </div>
        </div>
        <Link href='/#p_projects'>
            <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default student;
