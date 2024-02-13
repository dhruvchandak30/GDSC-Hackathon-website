import React from "react";
import PSCard from "./PSCard";
import PSData from "./PSData";
import { motion } from "framer-motion";

const PS = () => {
  return (
    <div className="my-8" id="PSId">
      <motion.div
        className="font-pricedown text-white lg:text-7xl text-6xl text-center my-32"
        initial={{
          opacity: 0,

          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        Problem Statements
      </motion.div>
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
