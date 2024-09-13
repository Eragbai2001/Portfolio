import React from "react";
import logo from "../../assets/images/Vector.png";

const HomePageLogo = () => {
  return (
    <div className=" px-14 mt-24">
      {" "}
      <img src={logo} className="w-[60px] animate-upDown" />
    </div>
  );
};

export default HomePageLogo;
