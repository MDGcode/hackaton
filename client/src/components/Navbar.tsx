"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { GoProjectRoadmap } from "react-icons/go";
import { TbTimelineEventExclamation } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";

export default function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };
  let content;
  if (nav) {
    content = (
      <div className="fixed w-full h-screen bg-white/10 flex flex-col justify-center items-center z-20">
        <a
          onClick={handleNav}
          href="#main"
          className=" w-3/4 flex justify-center items-center rounded-full shadow-lg bg-[#070807] border text-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
        >
          <AiOutlineHome size={20} />
          <span className="pl-4">Home</span>
        </a>
        <a
          onClick={handleNav}
          href="#timeline"
          className=" w-3/4 flex justify-center items-center rounded-full shadow-lg bg-[#070807] border text-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
        >
          <TbTimelineEventExclamation size={20} />
          <span className="pl-4">Timeline</span>
        </a>
        <a
          onClick={handleNav}
          href="#projects"
          className=" w-3/4 flex justify-center items-center rounded-full shadow-lg bg-[#070807] border text-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
        >
          <GoProjectRoadmap size={20} />
          <span className="pl-4">Projects</span>
        </a>
        <a
          onClick={handleNav}
          href="#resume"
          className=" w-3/4 flex justify-center items-center rounded-full shadow-lg bg-[#070807] border text-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
        >
          <BsPerson size={20} />
          <span className="pl-4">Resume</span>
        </a>
        <a
          onClick={handleNav}
          href="#contact"
          className=" w-3/4 flex justify-center items-center rounded-full shadow-lg bg-[#070807] border text-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
        >
          <AiOutlineMail size={20} />
          <span className="pl-4">Contact</span>
        </a>
      </div>
    );
  }
  return (
    <>
      <div>
        <AiOutlineMenu
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] md:hidden text-blue-950 outline-4 font-extrabold"
          size={20}
          color="white"
        />
        {content}
        <div className="md:block hidden fixed top-1/4 z-10">
          <div className="flex flex-col">
            <a
              href="#main"
              className=" rounded-full shadow-lg bg-transparent border-2 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineHome size={20} color="white" />
            </a>
            <a
              href="#timeline"
              className=" rounded-full shadow-lg bg-transparent border-2 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <TbTimelineEventExclamation size={20} color="white" />
            </a>
            <a
              href="#projects"
              className=" rounded-full shadow-lg text-white bg-transparent border-2 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <GoProjectRoadmap size={20} color="white" />
            </a>
            <a
              href="#resume"
              className=" rounded-full shadow-lg bg-transparent border-2 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <BsPerson size={20} color="white" />
            </a>
            <a
              href="#contact"
              className=" rounded-full shadow-lg bg-transparent border-2 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <AiOutlineMail size={20} color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
