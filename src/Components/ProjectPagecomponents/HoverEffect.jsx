import React from "react";


const HoverEffect = () => {
  return (
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
  );
};

export default HoverEffect;
