import React from "react";
import Image from "next/legacy/image";
import shadow_1 from "../public/assets/projects/shadow_1.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const shadow_tome = () => {
  return (
    <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={shadow_1}
        alt="/"
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">Battle of the Shadow Tome</h2>
        <h3>Online Multiplayer Game</h3>
      </div>
    </div>
    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>Battle of the Shadow Tome is an exciting and engaging turn-based online multiplayer game that allows users to create and customize their own unique characters and battle it out against other players from around the world. Developed in collaboration by Todd Ayers, Andrew Cooke, and Jaden Rodriguez, the game features an intuitive user interface and retro graphics that make the battles come to life. With a wide range of customization options and challenging gameplay, Battle of the Shadow Tome promises hours of entertainment for fans of the strategy and RPG genres.</p>
          <p>I am currently looking for somewhere new to host this project, as Heroku is no longer free. Check back soon!</p>
         
          <a href='https://github.com/toddayres06/Project2' target='_blank'>
          <button className="px-8 py-2 mt-4 text-white bg-[#0093B9]" >Visit the Repository</button>
          </a>
          
          <button className="px-8 py-2 mt-4 ml-5 text-white bg-gray-400" >App temporarily Unavailable</button>
          
      </div>
      <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
              <p>Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Sequelize</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Express.JS</p>   
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> MySQL</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Handlebars JS</p>  
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Bootstrap</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> HTML</p>  
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> CSS</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> JavaScript</p>               
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

export default shadow_tome