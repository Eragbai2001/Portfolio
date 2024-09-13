import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainLayouts = () => {
  return (
    <div className="h-screen bg-black">
      <NavBar /> 
      <Outlet />
    </div>
  );
};

export default MainLayouts;
