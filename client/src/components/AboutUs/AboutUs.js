import React from "react";
import AboutUsImage from "../../assets/AboutUsImage.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="" id="AboutUsid">
      <motion.div
        className="flex items-center justify-center my-16"
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
        <h1 className="font-pricedown text-white text-7xl  AboutUs">
          About Us
        </h1>
      </motion.div>
      <div className="flex flex-row justify-center">
        <img alt="About US" src={AboutUsImage}></img>
      </div>
      <div></div>
    </div>
  );
};

export default AboutUs;
