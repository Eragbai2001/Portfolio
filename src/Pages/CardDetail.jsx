import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../Data.json"; // Import JSON file directly

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
    <div className="item-details text-white">
      <h2>{item.name}</h2> {/* Use item name from the imported data */}
      <p>{item.description}</p>
      <ul>
        {item.features &&
          item.features.map((feature, index) => <li key={index}>{feature}</li>)}
      </ul>
    </div>
  );
};

export default CardDetails;
