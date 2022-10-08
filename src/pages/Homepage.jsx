import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  return (
    <div>
      <h1>Image Album</h1>
      <div className="pictures">
        {data.map((object) => {
          return <Picture data={object} />;
        })}
      </div>
    </div>
  );
};

export default Homepage;
