import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../Data.json"; // Import JSON file directly
import { ChevronLeft, Smartphone, Globe, Github } from "lucide-react";
import { Link } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const selectedItem = data.find((i) => i.id === parseInt(id)); // Find item based on ID
    setItem(selectedItem);
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 max-xl:grid-cols-1 px-6 lg:px-14 items-center mt-10 max-xl:min-h-screen bg-black">
      {/* Left section: Details */}
      <div className="item-details text-white">
        {/* Back button */}
        <div className="rounded-full border border-primary p-3 md:p-4 mt-4 w-10 h-10 flex items-center justify-center">
          <Link to="/" className="text-white hover:text-white">
            <ChevronLeft className="text-primary" />
          </Link>
        </div>

        {/* Item Title */}
        <h2 className="text-primary text-3xl lg:text-4xl font-bold font-poppins mt-7">
          {item.name}
        </h2>

        {/* Description */}
        <div className="w-[90%] lg:w-[35rem] font-poppins leading-tight mt-4 text-sm lg:text-base max-sm:w-[22rem]">
          <p>{item.description}</p>
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h3 className="text-primary text-2xl font-bold mb-2">Key Features</h3>
          {item.KeyFeatures && item.KeyFeatures.length > 0 ? (
            <ul className="list-disc list-inside">
              {item.KeyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          ) : (
            <p>No key features available.</p>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mt-7">
          <h3 className="text-primary text-2xl font-bold mb-2 font-poppins">
            Tech Stack
          </h3>
          <div className="font-poppins">
            {item.Skills.map((feature, index) => (
              <p key={index} className="w-full lg:w-96">
                {feature}
              </p>
            ))}

            {/* Social Links */}
            <div className="flex gap-5 mt-8">
              <div className="rounded-full border border-primary p-3 md:p-4 w-10 h-10 flex items-center justify-center">
                <a
                  href={item.Links.Mobile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white">
                  <Smartphone />
                </a>
              </div>
              <div className="rounded-full border border-primary p-3 md:p-4 w-10 h-10 flex items-center justify-center">
                <a
                  href={item.Links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white">
                  <Globe />
                </a>
              </div>
              <div className="rounded-full border border-primary p-3 md:p-4 w-10 h-10 flex items-center justify-center">
                <a
                  href={item.Links.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white">
                  <Github />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right section: Image */}
      <div className="max-xl:mt-10 w-[22rem] md:w-[25rem] lg:ml-auto h-[560px] border-4 border-primary rounded-2xl bg-gradient-to-b from-black via-black/60 to-[#EC4899]">
        <img
          src={`/${item.Preview}`} // Ensure the path is correct
          alt={item.name}
          className="w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default CardDetails;
  