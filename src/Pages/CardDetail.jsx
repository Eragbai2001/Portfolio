import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../Data.json"; // Import JSON file directly
import { ChevronLeft, Smartphone, Globe, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card";
import { PinContainer } from "../Components/ui/3d-pin";

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
    <div
      className="relative grid grid-cols-2 max-xl:grid-cols-1 px-9 lg:px-28
    items-center mt-10 max-xl:min-h-screen ">
      {/* Left section: Details */}
      <div className="item-details text-white ">
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
        <div className="w-[90%] xl:w-[39rem] max-xl:[32rem] font-poppins leading-tight mt-4 text-base lg:text-xl max-sm:w-[22rem]">
          <p>{item.description}</p>
        </div>

        {/* Key Features */}
        <div className="mt-6">
          <h3 className="text-primary text-2xl font-bold mb-2">Key Features</h3>
          {item.KeyFeatures && item.KeyFeatures.length > 0 ? (
            <ul className="list-disc list-inside text-xl">
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
          <div className="font-poppins w-[30rem] max-xl:w-[20rem]">
            {item.Skills.map((feature, index) => (
              <p key={index} className=" lg:w-96 text-lg">
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
                  href={item.Links.Web}
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
      <div className=" max-sm:ml-8 w-[17rem] xl:w-[30rem] lg:ml-auto h-[560px]  rounded-2xl   flex items-center justify-center relative max-xl:min-h-[40rem]   ">
        <PinContainer
          className="bg-gradient-to-b from-black via-black/60 to-[#EC4899] border-2 border-primary h-[560px] w-[22rem] max-lg:w-[25rem] xl:w-[30rem] rounded-2xl "
          title={item.Links.link}
          href={item.Links.Web}>
          <img
            src={`/${item.Preview}`}
            alt={item.name}
            className="w-full h-full object-cover rounded-2xl opacity-90 transition-transform duration-500 hover:scale-105 hover:opacity-100"
          />
        </PinContainer>
      </div>
    </div>
  );
};

export default CardDetails;
