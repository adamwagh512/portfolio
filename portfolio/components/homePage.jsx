import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id='homePage' className='pt-14 h-screen'>
        <div>
            <div className='flex items-center m-auto'>
                <Image className='pt-10' src='/../public/assets/console.jpg' width='1000' height='150' />
            </div>
            <div className="flex m-auto items-center justify-between my-4 w-[80%] sm:[80%]">
              <div className="rounded-full p-6 cursor-pointer hover:scale-125 ease in duration-100 border">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full p-6 cursor-pointer hover:scale-125 ease in duration-100 border">
                <FaGithub />
              </div>
              <div className="rounded-full p-6 cursor-pointer hover:scale-125 ease in duration-100 border">
                <AiOutlineMail />
              </div>
              <div className="rounded-full p-6 cursor-pointer hover:scale-125 ease in duration-100 border">
                <FaLinkedinIn />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main