import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Add react-scroll for smooth scrolling

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // close the menu when an anchor link is clicked
  };

  return (
    <div
      className="sticky top-0 z-50 flex items-center justify-between max-sm:py-2 py-5 bg-black text-white max-sm:px-7 px-14"
      style={{ fontFamily: "Kranky" }}>
      <h1 className="text-4xl mt-5 font-poppins">Josh</h1>
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
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // close the menu
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
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={handleNavLinkClick}
                  className="cursor-pointer">
                  Home
                </ScrollLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={handleNavLinkClick}
                  className="cursor-pointer">
                  Projects
                </ScrollLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <ScrollLink
                  to="work with me"
                  smooth={true}
                  duration={500}
                  onClick={handleNavLinkClick}
                  className="cursor-pointer">
                  work with me
                </ScrollLink>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="work with me"
              smooth={true}
              duration={500}
              className="cursor-pointer">
              work with me
            </ScrollLink>
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
