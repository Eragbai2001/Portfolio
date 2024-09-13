import React from "react";
import logo from "../../assets/images/Vector.png";

const HomePageLogo = () => {
  return (
    <div className="bg-black px-16 flex items-center h-[24rem] max-sm:h-[20.6rem] max-xs:h-[21.45rem] ">
      {" "}
      <img src={logo} className="w-[60px] " />
    </div>
  );
};

export default HomePageLogo;
