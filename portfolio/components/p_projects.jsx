import React from "react";
import shadow_1 from "../public/assets/projects/shadow_1.jpg";
import dog_2 from "../public/assets/projects/dog_2.jpg";
import student_2 from '../public/assets/projects/student_2.jpg';
import data_1 from '../public/assets/projects/data_1.jpg';
import weather_1 from '../public/assets/projects/weather_1.jpg'
import algo_1 from '../public/assets/projects/algo_1.jpg';
import password_1 from '../public/assets/projects/password_1.jpg';
import schedule_1 from '../public/assets/projects/schedule_1.jpg';

import ProjectItem from "../components/ProjectItem";


const Project = () => {
  return (
    <div id='p_projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        {/* Text heading */}
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>
        {/* Actual grid for projeccts */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

        <ProjectItem
          title="Student Organizer"
          description='An app to help students organize their schedules'
          backgroundImg={student_2}
          projectUrl="/student"
        />


        <ProjectItem
          title="Your Dog Ate What?!"
          description='An App that tells you if your dog ate something dangerous'
          backgroundImg={dog_2}
          projectUrl="/dog"
        />

        <ProjectItem
          title="Codewars Katas"
          description='A repository for all my Codewars Katas'
          backgroundImg={algo_1}
          projectUrl="/algos"
        />

        <ProjectItem
          title="Data Science Project"
          description='A data science project using Python'
          backgroundImg={data_1}
          projectUrl="/data"
        />

        <ProjectItem
          title="Battle of the Shadow Tome"
          description= 'Online Multiplayer Game'
          backgroundImg={shadow_1}
          projectUrl="/shadow_tome"
        />

        <ProjectItem
          title="Weather App"
          description='A weather app that utilizes the OpenWeather API'
          backgroundImg={weather_1}
          projectUrl="/weather"
        />

        <ProjectItem
          title="Password Generator"
          description='An app that generates random passwords'
          backgroundImg={password_1}
          projectUrl="/password"
        />

        <ProjectItem
          title="Daily Planner"
          description='An app that allows you to plan your workday'
          backgroundImg={schedule_1}
          projectUrl="/planner"
        />
        
        </div>
      </div>
    </div>
  );
};

export default Project;
