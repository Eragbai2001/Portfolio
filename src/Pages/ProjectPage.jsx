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
    <div className="flex justify-center items-center gap-7">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/project/${item.id}`}
          className="flex justify-center flex-col items-center font-poppins ">
          <CardSpotlight className="mt-44 w-[240px] h-[360px] border-4 border-primary bg-black rounded-2xl">
            <JoshProject project={item} />
          </CardSpotlight>
        </Link>
      ))}
    </div>
  );
};

export default ProjectPage;
