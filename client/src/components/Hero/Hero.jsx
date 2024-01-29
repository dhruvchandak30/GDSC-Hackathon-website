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
        <div className="bg1 lg:h-[350px] h-[500px] lg:w-3/4 w-[90%] absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg2 lg:h-[355px] h-[505px] w-full absolute top-[47%] lg:top-[45%] left-[48%] transform -translate-x-1/2 -translate-y-1/2 flex lg:flex-row flex-col justify-center lg:items-end pb-20 gap-y-8 items-center">
            <div className="lg:absolute lg:top-[10%] lg:left-[15%]">
              <img src={heading} alt="" />
            </div>
            <div className="lg:absolute lg:top-[50%] lg:-translate-y-1/2 lg:right-[10%]">
              <img src={title} alt="" />
            </div>
          </div>
        </div>
        <div className=" absolute lg:bottom-14 bottom-20 lg:right-48 transform -translate-x-1/2 right-1/2  w-32">
          <img src={register} alt="" className="cursor-pointer" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
