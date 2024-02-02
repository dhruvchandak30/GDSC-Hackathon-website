import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import heading from "../../assets/heading.svg";
import title from "../../assets/homeLine.svg";
import register from "../../assets/register.svg";
import "./style.css";
import HamburgerNavbar from "../Navbar/HamburgerNavbar";

const Hero = () => {
  const [wid, setWid] = useState(window.innerWidth);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (wid < 1020) setStatus(true);
    else setStatus(false);
  }, [wid]);
  return (
    <div className="homebg h-screen ">
      {status ? <HamburgerNavbar /> : <Navbar />}
      <div className="relative h-[85%]">
        <div className="bg1 sm:h-[350px] h-[300px] lg:w-3/4 w-[90%] absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg2 sm:h-[355px] h-[305px] w-full absolute top-[47%] lg:top-[45%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 flex sm:flex-row flex-col justify-center lg:items-end pb-8 gap-y-4 items-center">
            <div className="text-white sm:absolute  sm:top-[10%] sm:left-[12%]">
              {/* <img src={heading} alt="" /> */}
              <h1 className="font-pricedown text-7xl lg:text-9xl textborder mb-4"> GAME</h1>
              <h1 className="font-pricedown text-7xl lg:text-9xl relative textborder">
                codex <span className=" text-3xl sm:text-5xl absolute bottom-0 sm:bottom-2 -right-12 am:-right-14">1.0</span>
              </h1>
            </div>
            <div className="text-[#EC576D] sm:absolute sm:top-[50%] sm:-translate-y-1/2 sm:right-[10%]">
              {/* <img src={title} alt="" /> */}
              <h1 className="font-array text-3xl lg:text-5xl">Dev Hackathon <br /> By <br /> GDSC, LNMIIT</h1>
            </div>
          </div>
        </div>
        <div className=" absolute sm:bottom-14 bottom-20 sm:right-[22%] transform translate-x-1/2 w-32 right-[30%]">
          <img src={register} alt="" className="cursor-pointer" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
