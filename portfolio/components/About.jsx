import React from "react";
import Image from "next/image";
import adam_photo from "/../public/assets/images/adam_photo.jpg"

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Image
            className="rounded-xl m-auto pt-5 md:float-left md:h-[65vh] md:w-auto md:pr-5 md:hover:scale-105 ease-in duration-300"
            src= {adam_photo}
            width="150"
            height="100"
          ></Image>
          <h3 className="tracking-widest pt-3">About</h3>
          <h2>Who I Am</h2>
          <p className="text-blue-500 pt-2"> 
            // From Paramedic to Programmer: How my unique background is driving
            innovation in Software Development
          </p>
          <br />
          <p className="tracking-wide">
            Hello, I'm a software developer with a unique background in
            emergency medical services. I spent the past 8 years as a paramedic,
            responding to emergency calls and providing critical care to those
            in need. During this time, I gained invaluable experience in
            problem-solving, decision-making, and working under pressure.
          </p>
          <br />
          <p className="tracking-wide">
            After several years of working in the field, I decided to pursue a
            career in software development, as I was drawn to the idea of using
            technology to make a positive impact on people's lives. I have since
            honed my skills in coding, testing, and debugging software, and I am
            passionate about using my technical expertise to build products that
            can help solve real-world problems. My experience as a paramedic has
            taught me the importance of empathy, attention to detail, and clear
            communication, all of which I apply to my work as a software
            developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
