import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import hambuger from "../../assets/Hamberger.svg";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

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
            className="cursor-pointer z-[100]"
            onClick={handleMenuToggle}
          />
        </div>
        {menuOpen ? (
          <div className=" bg-[#000000b5]  w-[90%] sm:w-[75%] left-1/2 -translate-x-1/2 absolute top-20 pt-24 pb-16 z-[50] px-4">
            <RxCross2
              className="text-white absolute right-4 top-4 cursor-pointer"
              size={28}
              onClick={() => setMenuOpen(false)}
            />
            <div className="flex flex-col gap-y-4 justify-center items-center">
              <li
                className={`text-center sm:w-[50%] w-[90%] bg-black py-2 px-6 list-none`}
                onClick={() => setMenuOpen(false)}
              >
                <h5 className="text-[#FFFFFF] heading cursor-pointer w-full">
                  Home
                </h5>
              </li>
              <li
                className={`text-center sm:w-[50%] w-[90%]  bg-black py-2 px-6 list-none`}
                onClick={() => setMenuOpen(false)}
              >
                <h5 className="text-[#FFFFFF] heading cursor-pointer">
                  About Us
                </h5>
              </li>
              <li
                className={`text-center sm:w-[50%] w-[90%] bg-black py-2 px-6 list-none`}
                onClick={() => setMenuOpen(false)}
              >
                <h5 className="text-[#FFFFFF] heading cursor-pointer">
                  Timeline
                </h5>
              </li>
              <li
                className={`text-center sm:w-[50%] w-[90%]  bg-black py-2 px-6 list-none`}
                onClick={() => setMenuOpen(false)}
              >
                <h5 className="text-[#FFFFFF] heading cursor-pointer">
                  Problem Statements
                </h5>
              </li>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HamburgerNavbar;
