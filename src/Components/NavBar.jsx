/* import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/Fonts/Kranky-Regular.ttf";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=" bg-black h-20 ">
      <div
        className="px-20 text-white flex justify-between item-center "
        style={{ fontFamily: "Kranky" }}>
          
        <h1 className="text-4xl mt-5">Josh</h1>
        <div className="mt-5 flex gap-10">
          <NavLink to="/">about</NavLink>
          <NavLink to="/Project">Project</NavLink>
          <NavLink to="/">work with me</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
 */

import { useState } from "react"; // import state
import { NavLink } from "react-router-dom";
import "../assets/Fonts/Kranky-Regular.ttf";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div
      className="flex items-center justify-between py-8 bg-black text-white px-16 h"
      style={{ fontFamily: "Kranky" }}>
      <h1 className="text-4xl mt-5">Josh</h1>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} `}>
            {" "}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8 "
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink to="/about">about</NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink to="/portfolio">Project</NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink to="/contact">work with me</NavLink>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Project</NavLink>
          </li>
          <li>
            <NavLink to="/contact">work with me</NavLink>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
