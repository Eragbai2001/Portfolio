import React, { useState, useEffect } from "react";
import { CardSpotlight } from "../Components/ui/card-spotlight";
import JoshProject from "../Components/ProjectPagecomponents/Project";
import { Link } from "react-router-dom";
import data from "../Data.json";

const ProjectPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-1 justify-items-center w-3/4 mx-auto ">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/project/${item.id}`}
          className="font-poppins outline-none focus:outline-none">
          <CardSpotlight className="mt-44 max-lg:mt-16 w-[240px] h-[360px] border-4 border-primary bg-black rounded-2xl">
            <JoshProject project={item} />
          </CardSpotlight>
        </Link>
      ))}
    </div>
  );
};

export default ProjectPage;
