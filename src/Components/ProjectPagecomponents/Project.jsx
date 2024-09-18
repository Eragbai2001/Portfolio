import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { CardBody } from "@material-tailwind/react";
import Image from "../../assets/images/image.png";
import data from "../../Data.json";


const Project = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data); // Load data from JSON
  }, []);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mx-auto bg-black justify-center px-6 sm:px-16 lg:px-40 py-10"
      id="projects">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/card/${item.id}`} // Use Link for navigation
          className="relative transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none">
          <div className="mt-16 sm:mt-10 lg:mt-44 w-[240px] h-[360px] border-4 border-primary bg-black rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <CardBody
              className="mt-12 flex flex-col items-center relative overflow-hidden"
              title="/ui.aceternity.com"
              href="https://twitter.com/mannupaaji">
              {/* Default image with auto height and width */}
              <img
                src={Image}
                className="w-auto h-full object-cover" // Adjusts automatically
                alt="Default Image"
              />
              {/* Dynamically load item image */}
              <img
                src={item.image} // Dynamically load image from item object
                className="w-auto h-full object-cover mt-7"
                alt={item.name} // Use item's name for alt text
              />
              <div className="pt-10 text-white font-bold font-poppins">
                {item.name} {/* Display item name */}
              </div>
            </CardBody>
            {/* Hover Effect */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Project;
