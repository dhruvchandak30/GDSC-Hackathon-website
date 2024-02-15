import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [bg, setBg] = useState([false, false, false, false, false]);
  const nav = useNavigate();

  const hoverHandler = (e) => {
    const temp = [false, false, false, false, false];
    temp[e] = true;
    setBg(temp);
  };

  const hoverOut = () => {
    setBg([false, false, false, false, false]);
  };

  const goToHome = () => {
    nav("/");
    return true;
  };

  const scrollAboutUs = async () => {
    const response = await goToHome();
    if (response) {
      var elem = document.getElementById("AboutUsid");
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTimeLine = async () => {
    const response = await goToHome();
    if (response) {
      var elem = document.getElementById("TimeLineid");
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollPS = async () => {
    const response = await goToHome();
    if (response) {
      var elem = document.getElementById("PSId");
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between px-16 py-8 ">
        <div>
          <img src={logo} alt="" width="100%" height="100%" />
        </div>
        <ul className="flex gap-x-6 ">
          <li
            onClick={() => nav("/")}
            className={`text-center w-fit px-8 h-[30px] cursor-pointer ${
              bg[0] ? "back" : ""
            }`}
            onMouseEnter={() => hoverHandler(0)}
            onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer w-full font-instagram">
              Home
            </h5>
          </li>
          <li
            onClick={() => nav("/gamejam")}
            className={`text-center w-fit px-8 h-[30px] cursor-pointer  ${
              bg[1] ? "back" : ""
            }`}
            onMouseEnter={() => hoverHandler(1)}
            onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer w-full font-instagram">
              GameJam
            </h5>
          </li>
          <li
            onClick={scrollAboutUs}
            className={`text-center px-6 h-[30px] cursor-pointer ${
              bg[2] ? "back" : ""
            }`}
            onMouseEnter={() => hoverHandler(2)}
            onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer font-instagram">
              About Us
            </h5>
          </li>
          <li
            onClick={scrollTimeLine}
            className={`text-center px-6  h-[30px] cursor-pointer ${
              bg[3] ? "back" : ""
            }`}
            onMouseEnter={() => hoverHandler(3)}
            onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer font-instagram">
              Timeline
            </h5>
          </li>
          <li
            onClick={scrollPS}
            className={`text-center w-fit px-4 ps-6 h-[30px] cursor-pointer ${
              bg[4] ? "back" : ""
            }`}
            onMouseEnter={() => hoverHandler(4)}
            onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer  font-instagram">
              Problem Statements
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
