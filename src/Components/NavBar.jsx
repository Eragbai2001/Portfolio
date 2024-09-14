import { useState } from "react"; // import state
import { NavLink } from "react-router-dom";
import "../assets/Fonts/Kranky-Regular.ttf";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // close the menu when a NavLink is clicked
  };

  return (
    <div
      className="flex items-center justify-between max-sm:py-2 py-5 bg-black text-white max-sm:px-7 px-14 "
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
                <NavLink to="/" onClick={handleNavLinkClick}>about</NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink to="/project" onClick={handleNavLinkClick}>Project</NavLink>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLink to="/contact" onClick={handleNavLinkClick}>work with me</NavLink>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <NavLink to="/">about</NavLink>
          </li>
          <li>
            <NavLink to="/project">Project</NavLink>
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