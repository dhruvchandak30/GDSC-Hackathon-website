import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import heading from "../../assets/heading.svg";
import title from "../../assets/homeLine.svg";
import register from "../../assets/register.svg";
import "./style.css";
import HamburgerNavbar from "../Navbar/HamburgerNavbar";
import { motion } from "framer-motion";

const Hero = () => {
  const [wid, setWid] = useState(window.innerWidth);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (wid < 1020) setStatus(true);
    else setStatus(false);
  }, [wid]);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1450);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="homebg h-screen ">
      {status ? <HamburgerNavbar /> : <Navbar />}
      <div className="relative h-[85%]">
        <motion.div
          initial={{
            x: "-100%",
            y: "-50%",
          }}
          animate={{
            x: "-50%",
            y: "-50%",
          }}
          transition={{ duration: 0.2 }}
          className="bg1 sm:h-[350px] h-[300px] lg:w-3/4 w-[70%] mx-auto absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            initial={{
              x: "100%",
              y: "-50%",
            }}
            animate={{
              x: "-50%",
              y: "-50%",
            }}
            transition={{ duration: 0.2 }}
            className="bg2 sm:h-[355px] h-[305px] w-full absolute top-[47%] lg:top-[45%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 flex sm:flex-row flex-col justify-center lg:items-end pb-8 gap-y-4 items-center"
          >
            <div className="text-white sm:absolute  sm:top-[10%] sm:left-[12%]">
              {/* <img src={heading} alt="" /> */}
              <motion.h1
                initial={{
                  scale: 10,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="font-pricedown text-7xl lg:text-9xl textborder mb-4"
              >
                {" "}
                GAME
              </motion.h1>
              <motion.h1
                initial={{
                  scale: 10,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="font-pricedown text-7xl lg:text-9xl relative textborder"
              >
                codex{" "}
                <span className=" text-3xl sm:text-5xl absolute bottom-0 sm:bottom-2 -right-12 am:-right-14">
                  1.0
                </span>
              </motion.h1>
            </div>
            <div className=" container text-[#EC576D] absolute lg:top-[50%] top-[72%]  lg:left-[55%] sm:-translate-y-1/2 left-[7%] ">
              {/* <img src={title} alt="" /> */}
              <h1 className="text1 font-array text-3xl lg:text-5xl ">
                Dev Hackathon By
              </h1>
              {isVisible && (
                <h1 className="text2 font-array text-3xl lg:text-5xl ">
                  GDSC, LNMIIT
                </h1>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className=" absolute sm:bottom-[-20%] bottom-[-20%] sm:right-[18%] transform translate-x-1/2 w-32 right-[30%]"
          >
            <img src={register} alt="" className="cursor-pointer" />{" "}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
