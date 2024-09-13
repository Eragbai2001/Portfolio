import React, { useState, useEffect } from "react";
import {
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "../../assets/images/image.png";

const Project = ({ project }) => {
  return (
    <div className="">
      <CardBody className="flex flex-col items-center">
        <img src={Image} className="w-auto h-full object-cover" />
        <img
          src={project.image} // Dynamically load image
          className="w-auto h-full object-cover mt-7"
        />
        <div className="pt-10 text-white font-bold font-poppins">
          {project.name}
        </div>
      </CardBody>
    </div>
  );
};

export default Project;
