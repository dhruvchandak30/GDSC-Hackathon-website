import React from "react";
import { motion } from "framer-motion";

const PSCard = ({ img, title, desc }) => {
  return (
    <div className="text-white w-[15rem] mx-32  my-8">
      <img
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
        src={img}
        className="w-[15rem] cursor-pointer"
        alt={title}
      />
      <motion.div
        className=""
        initial={{
          opacity: 0,
          y: 50,
          z: 350,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          z: 0,
          transition: {
            duration: 1.5, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <h1 className="font-array text-3xl text-[#F27DFD]">{title}</h1>
        <div className="">
          <p className=" h-max">{desc}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default PSCard;
