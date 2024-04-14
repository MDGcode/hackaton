"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { BiHomeAlt2 } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

export default function Sidenav() {
  const location = useLocation();
  const { pathname } = location;
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
          href="/"
          className=" w-3/4 flex justify-center border-[#FAE043] items-center rounded-full shadow-[#2b2a3a]/20 shadow-xl bg-[#271F73] border text-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
        >
          <BiHomeAlt2 size={20} color="#FAE043" />
          <span className="pl-4 font-istok">Home</span>
        </a>
        <a
          onClick={handleNav}
          href="/instagram"
          className=" w-3/4 flex justify-center border-[#FAE043] items-center rounded-full shadow-[#2b2a3a]/20 shadow-xl bg-[#271F73] border text-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
        >
          <IoLogoInstagram size={20} color="#FAE043" />
          <span className="pl-4 font-istok">Instagram</span>
        </a>
        <a
          onClick={handleNav}
          href="/x"
          className=" w-3/4 flex justify-center border-[#FAE043] items-center rounded-full shadow-[#2b2a3a]/20 shadow-xl bg-[#271F73] border text-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
        >
          <FaXTwitter size={20} color="#FAE043" />
          <span className="pl-4 font-istok">Twitter</span>
        </a>
        <a
          onClick={handleNav}
          href="/settings"
          className=" w-3/4 flex justify-center border-[#FAE043] items-center rounded-full shadow-[#2b2a3a]/20 shadow-xl bg-[#271F73] border text-white m-2 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
        >
          <IoSettingsOutline size={20} color="#FAE043" />
          <span className="pl-4 font-istok">Settings</span>
        </a>
      </div>
    );
  }
  return (
    <>
      <div className=" ">
        <AiOutlineMenu
          onClick={handleNav}
          className="fixed top-4 right-4 z-[99] md:hidden text-bl ue-950 outline-4 font-extrabold"
          size={20}
          color="#FAE043"
        />
        {content}
        <div className="md:block hidden fixed top-1/10 z-10 bg-[#271F73] h-full">
          <div className="flex flex-col">
            <a
              href="/"
              className=" my-5 px-8 py-3 cursor-pointer  ease-in duration-200 hover:bg-white/30 rounded-r-xl "
            >
              <BiHomeAlt2
                size={80}
                color="#FAE043"
                className="hover:scale-110 ease-in duration-200"
              />
            </a>

            <a
              href="/instagram"
              className=" my-5 px-8 py-3 cursor-pointer  ease-in duration-200 hover:bg-white/30 rounded-r-xl "
            >
              <IoLogoInstagram
                size={80}
                color="#FAE043"
                className="hover:scale-110 ease-in duration-200"
              />
            </a>
            <a
              href="/x"
              className=" my-5 px-8 py-3 cursor-pointer  ease-in duration-200 hover:bg-white/30 rounded-r-xl "
            >
              <FaXTwitter
                size={80}
                color="#FAE043"
                className="hover:scale-110 ease-in duration-200"
              />
            </a>
            <a
              href="/settings"
              className=" my-5 px-8 py-3 cursor-pointer bottom-0 mt-24 ease-in duration-200 hover:bg-white/30 rounded-r-xl "
            >
              <IoSettingsOutline
                size={80}
                color="#FAE043"
                className="hover:scale-110 ease-in duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
