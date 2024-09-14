import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavBar />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayouts;