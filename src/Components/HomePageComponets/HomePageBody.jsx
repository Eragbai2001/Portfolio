import React from "react";
import pic from "../../assets/images/Intersect.png";
import Josh from "../../assets/images/Josh.png.jpg";
import "../../assets/Fonts/Poppins-ExtraBold.ttf";
import Footer from "./HomePageLogo";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { BackgroundBeams } from "../ui/Background-beam";

const HomePageBody = () => {
  return (
    <div className=" ">
      <div className=" flex justify-center flex-col items-center font-poppins  ">
        <div className="rounded-full border-4 border-primary w-[172px] h-[172px] overflow-hidden mt-[6.7rem] flex items-center justify-center  z-20">
          <img src={Josh} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-center mt-9">
          <h1 className="text-white text-[35px] mt-3 font-bold  ">
            Hi, I'm Josh
          </h1>
          <h2 className="text-primary font-light text-[22px] max-sm:text-[19px]">
            Mobile and Web Developer
          </h2>
          <div className="text-white text-[22px] flex flex-col items-center mt-4 max-sm:text-[16px] max-xs:text-[13px]">
            <p>Passionate about creating beautiful, responsive, </p>
            <p>and user-friendly application.specialized in</p>
            <p>React,React Native, and Node.js</p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-full border border-primary p-4 mt-4 w-10 h-10 flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/joshua-aideloje-6877a5193/recent-activity/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white">
                <Linkedin />
              </a>
            </div>
            <div className="rounded-full border border-primary p-4 mt-4 w-10 h-10 flex items-center justify-center">
              <a
                href="https://github.com/joshiri360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white">
                <Github />
              </a>
            </div>
            <div className="rounded-full border border-primary p-4 mt-4 w-10 h-10 flex items-center justify-center">
              <a
                href="https://x.com/_devjosh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <Footer />
    </div>
  );
};

export default HomePageBody;
