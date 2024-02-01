import React from "react";
import PSCard from "./PSCard";
import PSData from "./PSData";

const PS = () => {
  return (
    <div className="my-8">
      <div className="font-pricedown text-white lg:text-7xl text-6xl text-center my-32">
        Problem Statements
      </div>
      <div className="flex lg:flex-row  lg:flex-wrap flex-col justify-evenly items-center">
        {PSData.map((item) => (
          <PSCard
            key={item.id}
            img={item.img}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default PS;
