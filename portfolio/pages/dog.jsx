import React from "react";
import Image from "next/legacy/image";
import dog_2 from "../public/assets/projects/dog_2.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";


const dog = () => {
  return (
    <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={dog_2}
        alt="/"
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">Your Dog Ate What ?!</h2>
        <h3>HTML/CSS/Javascript/Bulma/APIs</h3>
      </div>
    </div>
    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>"Your Dog Ate What?!" is a group project that aims to address the growing concern of dog owners when their pets accidentally ingest potentially dangerous substances. The project involves developing an app that can quickly identify common household items and foods that are toxic to dogs, providing dog owners with a reliable and convenient tool to assess the situation in real-time. By inputting the name of the item, the app will give an instant response on the level of danger and provide instructions on what to do next. The app's goal is to promote responsible pet ownership and reduce the risk of accidental poisonings, providing peace of mind to dog owners everywhere.</p>
          <a href="https://adamwagh512.github.io/your-dog-ate-what/" target='_blank'>
              <button className="px-8 py-2 mt-4 mr-8 text-white bg-[#0093B9]">Launch The App</button>
          </a>
          <a href='https://github.com/adamwagh512/your-dog-ate-what' target='_blank'>
          <button className="px-8 py-2 mt-4 text-white bg-[#0093B9]" >Visit the Repository</button>
          </a>
      </div>
      <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
              <p>Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> HTML</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Bulma</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Javascript</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Local Storage</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Chomp Food Data API</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Google Maps API</p>
                  
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

export default dog