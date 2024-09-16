import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../Data.json"; // Import JSON file directly
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Smartphone } from "lucide-react";
import { Globe } from "lucide-react";
import { Github } from "lucide-react";

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
    <div className="grid grid-cols-2 max-xl:grid-cols-1 px-14 items-center mt-10  max-xl:min-h-screen bg-black">
      <div className="item-details text-white ">
        <div className="rounded-full border border-primary p-4 mt-4 w-10 h-10 flex items-center justify-center">
          <Link to="/" className="text-white hover:text-white">
            <ChevronLeft className="text-primary" />
          </Link>
        </div>
        <h2 className="text-primary text-3xl font-bold font-poppins mt-7">
          {item.name}
        </h2>
        <div className="w-[35rem] font-poppins leading-tight mt-2 max-sm:w-[22rem] ">
          <p>{item.description}</p>
        </div>

        {/* Safely access Key Features */}
        <div className="mt-4">
          <h3 className="text-primary text-2xl font-bold mb-2">Key Features</h3>
          {item.KeyFeatures && item.KeyFeatures.length > 0 ? ( // This ensures that KeyFeatures exists before attempting to render the list.
            <ul className="list-disc list-inside">
              {item.KeyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          ) : (
            <p>No key features available.</p> // Show message if KeyFeatures is empty or undefined
          )}
        </div>
        <div className="mt-7">
          <h3 className="text-primary text-2xl font-bold mb-2 font-poppins">
            Tech Stack
          </h3>
          <div className="font-poppins">
            {item.Skills.map((feature, index) => (
              <p key={index} className="w-96">
                {feature}
              </p>
            ))}
            <div className="flex gap-5 mt-7 ">
              <div className="rounded-full border border-primary p-4 mt-4 w-10 h-10 flex items-center justify-center">
                <a
                  href={item.Links.Mobile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white">
                  <Smartphone />
                </a>
              </div>
              <div className="rounded-full border border-primary p-4 mt-4 w-10 h-10 flex items-center justify-center">
                <a
                  href={item.Links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white">
                  <Globe />
                </a>
              </div>
              <div className="rounded-full border border-primary p-4 mt-4 w-10 h-10 flex items-center justify-center">
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

      <div className="max-xl:mt-10 max-lg:w-[22rem] w-[25rem] lg:ml-auto h-[560px] border-4 border-primary rounded-2xl bg-gradient-to-b from-black via-black/60 to-[#EC4899]">
        <img
          src={`/${item.Preview}`} // Ensure the path is correct
          alt={item.name}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default CardDetails;
