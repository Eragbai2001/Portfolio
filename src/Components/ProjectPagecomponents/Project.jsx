import React, { useState, useEffect } from "react";
import { CardBody } from "@material-tailwind/react";
import Image from "../../assets/images/image.png";
import { CardSpotlight } from "../../Components/ui/card-spotlight";
import data from "../../Data.json";

const Project = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data); // Load data from JSON
  }, []);

  return (
    <div
      className="grid grid-cols-4 max-lg:grid-cols-1 justify-items-center w-3/4 mx-auto min-h-screen bg-black justify-center"
      id="projects">
      {items.map((item) => (
        <a
          key={item.id}
          href="#projects" // Adjusted for smooth scroll instead of routing
          className="font-poppins outline-none focus:outline-none">
          <CardSpotlight className="mt-44  max-lg:mt-16 w-[240px] h-[360px] border-4 border-primary bg-black rounded-2xl">
            <CardBody className="flex flex-col items-center">
              <img
                src={Image}
                className="w-auto h-full object-cover"
                alt="Default Image"
              />
              <img
                src={item.image} // Dynamically load image from item object
                className="w-auto h-full object-cover mt-7"
                alt={item.name} // Use item's name for alt text
              />
              <div className="pt-10 text-white font-bold font-poppins">
                {item.name} {/* Display item name */}
              </div>
            </CardBody>
          </CardSpotlight>
        </a>
      ))}
    </div>
  );
};

export default Project;
