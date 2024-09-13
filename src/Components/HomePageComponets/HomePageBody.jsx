import React from "react";
import pic from "../../assets/images/Intersect.png";
import logo from "../../assets/images/Vector.png";
import "../../assets/Fonts/Poppins-ExtraBold.ttf";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";

const HomePageBody = () => {
  return (
    <div className="bg-black  flex justify-center flex-col items-center font-poppins  ">
      <img src={pic} className="w-[172px] mt-10 " />
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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white">
              <Github />
            </a>
          </div>
          <div className="rounded-full border border-primary p-4 mt-4 w-10 h-10 flex items-center justify-center">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBody;
