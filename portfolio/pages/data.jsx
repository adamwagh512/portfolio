import React from "react";
import Image from "next/legacy/image";
import data_1 from "../public/assets/projects/data_1.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const data = () => {
  return (
    <div className="w-full">
    <div className="w-screen h-[30vh] lg:h-[40vh] relative">
      <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
      <Image
        className="absolute z-1"
        layout="fill"
        objectFit="cover"
        src={data_1}
        alt="/"
      />
      <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
        <h2 className="py-2">US Medical Insurance Analysis</h2>
        <h3>Data Analysis Project</h3>
      </div>
    </div>
    <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
      <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>Medical Insurance Analysis is a project I completed as part of their Data Analyst career path from Codecademy. The project involved importing a csv file containing medical insurance data and using Python programming language to perform in-depth analysis on the data. The project aimed to explore and analyze trends and patterns in medical insurance costs, as well as to identify factors that influence the cost of medical insurance. Through the use of various Python libraries and tools, the project successfully uncovered key insights and trends, providing valuable insights for healthcare providers, policymakers, and insurance companies. Overall, the Medical Insurance Analysis project showcases my ability to use data analysis tools and techniques to gain valuable insights and inform decision-making in a real-world context.</p>
         
          <a href='https://github.com/adamwagh512/us_medical_insurance' target='_blank'>
          <button className="px-8 py-2 mt-4 text-white bg-[#0093B9]" >Visit the Repository</button>
          </a>

          <a href='https://github.com/adamwagh512/us_medical_insurance/blob/main/python-portfolio-project-starter-files/us-medical-insurance-costs.ipynb' target='_blank'>
          <button className="px-8 py-2 mt-4 ml-8 text-white bg-[#0093B9]" >View The Analysis</button>
          </a>
      </div>
      <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
              <p>Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Jupyter</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Python</p>
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Codecademy</p> 
                  <p className="text-grey-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" /> Excel</p>
            
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

export default data