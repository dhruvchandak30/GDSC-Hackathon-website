import React from "react";
import PSCard from "./PSCard";
import PSData from "./PSData";

const PS = () => {
  return (
    <div className="my-8" id="PSId">
      <div
        data-aos="fade-up"
        data-aos-once="true"
      
        className="font-pricedown text-white lg:text-7xl text-6xl text-center my-32"
      >
        Problem Statements
      </div>
      <div className="flex lg:flex-row  lg:flex-wrap flex-col justify-evenly items-center">
        {PSData.map((item) => (
          <PSCard
            key={item.id}
            img={item.img}
            title={item.title}
            desc="Coming Soon ..."
          />
        ))}
      </div>
      {/* <div className="font-array text-center text-4xl text-white">
        Coming Soon ...
      </div> */}
    </div>
  );
};

export default PS;
