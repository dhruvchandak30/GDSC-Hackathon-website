import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [bg, setBg] = useState([false, false, false, false]);

  const hoverHandler = (e) => {
    const temp = [false, false, false, false];
    temp[e] = true;
    setBg(temp);
  };

  const hoverOut = () => {
    setBg([false, false, false, false]);
  };
  const scrollAboutUs = () => {
    var elem = document.getElementById("AboutUsid");
    elem.scrollIntoView({ behavior: "smooth" });
  };
  const scrollTimeLine = () => {
    var elem = document.getElementById("TimeLineid");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  const scrollPS = () => {
    var elem = document.getElementById("PSId");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between px-16 py-8 ">
        <div>
          <img src={logo} alt="" width="100%" height="100%" />
        </div>
        <ul className="flex gap-x-6 ">
          <li
            className={`text-center w-fit px-8 h-[30px]  ${
              bg[0] ? "back" : ""
            }`}
            onMouseEnter={() => hoverHandler(0)}
            onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer w-full">
              Home
            </h5>
          </li>
          <li
            onClick={scrollAboutUs}
            className={`text-center px-6 h-[30px]  ${bg[1] ? "back" : ""}`}
            onMouseEnter={() => hoverHandler(1)}
            onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer">About Us</h5>
          </li>
          <li
            onClick={scrollTimeLine}
            className={`text-center px-6  h-[30px]  ${bg[2] ? "back" : ""}`}
            onMouseEnter={() => hoverHandler(2)}
            onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer">Timeline</h5>
          </li>
          <li
            onClick={scrollPS}
            className={`text-center w-fit px-4 ps-6 h-[30px] ${
              bg[3] ? "back" : ""
            }`}
            onMouseEnter={() => hoverHandler(3)}
            onMouseLeave={hoverOut}
          >
            <h5 className="text-[#FFFFFF] heading cursor-pointer">
              Problem Statements
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
