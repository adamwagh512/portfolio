import React from "react";
import Image from "next/image";
import HTML from '../public/assets/skills/html-badge.png'
import CSS_badge from '../public/assets/skills/css-badge.png'
import JS_badge from '../public/assets/skills/JavaScript-badge.png'
import Node_badge from '../public/assets/skills/node-badge.png'
import Python_badge from '../public/assets/skills/python-badge.png'
import Jupyter_badge from '../public/assets/skills/jupyter-badge.png'
import Mongo_badge from '../public/assets/skills/mongodb3-badge.png'
import Handlebars_badge from '../public/assets/skills/handlebars-badge.png'
import SQL_badge from '../public/assets/skills/mysql2-badge.png'
import React_badge from '../public/assets/skills/react-badge.png'
import Figma_badge from '../public/assets/skills/figma4-badge.png'
import Next_badge from '../public/assets/skills/nextjs-badge.png'
import Tailwind_badge from '../public/assets/skills/tailwindcss-badge.png'
import Bulma_badge from '../public/assets/skills/bulma3-badge.png'
import Github_badge from '../public/assets/skills/github1-badge.png'
import Learning_badge from '../public/assets/skills/learning-badge.gif'


const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        {/* Grid container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 ">


        {/* HTML badge */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={HTML}
                  alt="html"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>


        {/* CSS Badge  */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={CSS_badge}
                  alt="css"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>          


          {/* Javascript Badge */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={JS_badge}
                  alt="JavaScript"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>          


          {/* Node Badge */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50 ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Node_badge}
                  alt="node"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>          


          {/* Python Badge */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Python_badge}
                  alt="python"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>          


          {/* Jupyter Badge  */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50 backdrop-blur-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Jupyter_badge}
                  alt="html"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Jupyter Notebook</h3>
              </div>
            </div>
          </div>          


          {/* Mongo Badge */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Mongo_badge}
                  alt="mongodb"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>          


          {/* Handlebars */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Handlebars_badge}
                  alt="handlebars"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Handlebars</h3>
              </div>
            </div>
          </div>          
          
          {/* SQL */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={SQL_badge}
                  alt="SQL"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>          

          {/* React */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={React_badge}
                  alt="react"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>          
          
          {/* Figma */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Figma_badge}
                  alt="figma"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>          
          
          {/* NextJS */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Next_badge}
                  alt="html"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Tailwind_badge}
                  alt="tailwind"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>      

          {/* Bulma */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Bulma_badge}
                  alt="figma"
                  height="64"
                  width="64"
                  
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bulma</h3>
              </div>
            </div>
          </div>      

          {/* Github*/}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Github_badge}
                  alt="figma"
                  height="64"
                  width="64"
                  
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>      

          
          {/* Learning Badge */}
          <div className="p-6 shadow-xl hover:scale-110 ease-in duration-300 backdrop-brightness-50">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Learning_badge}
                  alt="learning"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Learning More Every Day</h3>
              </div>
            </div>
          </div>      
        </div>
      </div>
    </div>
  );
};

export default Skills;
