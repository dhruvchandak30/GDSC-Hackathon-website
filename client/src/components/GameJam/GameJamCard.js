import React from "react";
import GameCodexRect from "../../assets/GameCodexRect.png";
import { motion } from "framer-motion";
import "./GameJam.css";
const GameJamCard = ({ title, Desc }) => {
  return (
    <div className="flex  bg-black pt-16  items-center relative flex-col ">
      <div className="flex lg:mr-[45rem] lg:top-10 lg:absolute sm:text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="text-white font-array font-array  lg:text-5xl text-3xl mb-4"
        >
          {title}
        </motion.div>
      </div>
      <div>
        <img src={GameCodexRect} alt="" className="GameJamBG"></img>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 2, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="GameJamDesc"
        >
          {Desc}
        </motion.div>
      </div>
    </div>
  );
};

export default GameJamCard;
