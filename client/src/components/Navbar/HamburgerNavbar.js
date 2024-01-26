import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import hambuger from "../../assets/Hamberger.svg";
// import { motion } from "framer-motion";

const HamburgerNavbar = () => {
  const [bg, setBg] = useState([false, false, false, false]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const hoverHandler = (e) => {
    const temp = [false, false, false, false];
    temp[e] = true;
    setBg(temp);
  };

  const hoverOut = () => {
    setBg([false, false, false, false]);
  };

  return (
    <div>
      <div className="flex items-center justify-between px-4 md:px-16 py-8 ">
        <div>
          <img src={logo} alt="" width="100%" height="100%" />
        </div>
        <div>
          <img
            src={hambuger}
            alt=""
            className="cursor-pointer"
            onClick={handleMenuToggle}
          />
        </div>
        {/* <div
          initial={{
            x: 250,
          }}
          animate={{
            x: menuOpen ? 0 : 250,
          }}
          transition={{
            // delay: 0.5,
            duration: 0.5,
          }}
          className="flex flex-col gap-y-8 justify-center items-center w-[250px] absolute right-0 top-0 pt-24 pb-16 z-[50] px-4"
        >
          <li
            className={`text-center w-20 h-[30px] ${bg[0] ? "back" : ""}`}
            // onMouseEnter={() => hoverHandler(0)}
            // onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer w-full">
              Home
            </h5>
          </li>
          <li
            className={`text-center px-6 h-[30px]  ${bg[1] ? "back" : ""}`}
            // onMouseEnter={() => hoverHandler(1)}
            // onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer">About Us</h5>
          </li>
          <li
            className={`text-center px-6  h-[30px]  ${bg[2] ? "back" : ""}`}
            // onMouseEnter={() => hoverHandler(2)}
            // onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer">Timeline</h5>
          </li>
          <li
            className={`text-center px-6 h-[30px] ${bg[3] ? "back" : ""}`}
            // onMouseEnter={() => hoverHandler(3)}
            // onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer">
              Problem Statements
            </h5>
          </li>
        </div> */}
      </div>
    </div>
  );
};

export default HamburgerNavbar;
