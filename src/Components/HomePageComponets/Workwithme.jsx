import React from "react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";

const Workwithme = () => {
  return (
    <div
      className="bg-black min-h-screen px-8 md:px-14 py-10 grid grid-cols-1 md:grid-cols-2 items-center"
      id="work with me">
      {/* About Section */}
      <div className="border-r-0 md:border-r-4 border-primary py-10 md:py-40 flex flex-col items-center md:items-center">
        <h1 className="font-poppins text-primary text-3xl md:text-4xl">
          About
        </h1>
        <div className="text-white font-poppins text-[17px] md:text-[19px] mt-6 md:mt-16 max-w-[90%] md:max-w-[40rem]">
          <p>
            I'm Joshua Aideloje, a versatile software engineer passionate about
            creating seamless digital experiences across web and mobile
            platforms.
          </p>
          <p className="mt-6 md:mt-8">
            With expertise in React and React Native, I enjoy tackling complex
            challenges and delivering innovative solutions.
          </p>
          <p className="mt-6 md:mt-8">
            Outside of coding, I geek out over anime, Marvel, and all things
            techy and fun.
          </p>
        </div>
      </div>

      {/* Work With Me Section */}
      <div className="flex flex-col items-center md:items-center justify-center py-10 md:py-40">
        <h1 className="font-poppins text-primary text-3xl md:text-4xl">
          Work With Me
        </h1>
        <div className="text-white font-poppins text-[17px] md:text-[19px] items-center flex flex-col mt-10 md:mt-14">
          <p>Aideloje Joshua</p>
          <p className="mt-4 md:mt-9">aidelojejoshua@gmail.com</p>
          <p className="mt-4 md:mt-9">+2347045473755</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8">
          <div className="rounded-full border border-primary p-3 md:p-4 w-10 h-10 flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/joshua-aideloje-6877a5193/recent-activity/all/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white">
              <Linkedin />
            </a>
          </div>
          <div className="rounded-full border border-primary p-3 md:p-4 w-10 h-10 flex items-center justify-center">
            <a
              href="https://github.com/joshiri360"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white">
              <Github />
            </a>
          </div>
          <div className="rounded-full border border-primary p-3 md:p-4 w-10 h-10 flex items-center justify-center">
            <a
              href="https://x.com/_devjosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white">
              <Twitter />
            </a>
          </div>
        </div>
        <h1 className="text-3xl font-poppins font-bold text-white mt-8">
          JOSH
        </h1>
      </div>
    </div>
  );
};

export default Workwithme;
