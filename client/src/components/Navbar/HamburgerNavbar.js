import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import hambuger from "../../assets/Hamberger.svg";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const HamburgerNavbar = () => {
  const nav = useNavigate();
  const [bg, setBg] = useState([false, false, false, false,false]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const goToHome = () => {
    nav("/");
    return true;
  };

  const scrollAboutUs = async () => {
    setMenuOpen(false)
    const response = await goToHome();
    if (response) {
      var elem = document.getElementById("AboutUsid");
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollTimeLine = async () => {
    setMenuOpen(false)
    const response = await goToHome();
    if (response) {
      var elem = document.getElementById("TimeLineid");
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollPS = async () => {
    setMenuOpen(false)
    const response = await goToHome();
    if (response) {
      var elem = document.getElementById("PSId");
      elem.scrollIntoView({ behavior: "smooth" });
    }
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
                onClick={() => {setMenuOpen(false)
                nav("/")}}
              >
                <h5 className="text-[#FFFFFF] heading cursor-pointer w-full">
                  Home
                </h5>
              </li>
              <li
                className={`text-center sm:w-[50%] w-[90%]  bg-black py-2 px-6 list-none`}
                onClick={() => {setMenuOpen(false)
                nav("/gamejam")}}
              >
                <h5 className="text-[#FFFFFF] heading cursor-pointer">
                  GameJam
                </h5>
              </li>
              <li
                className={`text-center sm:w-[50%] w-[90%]  bg-black py-2 px-6 list-none`}
                onClick={scrollAboutUs}
              >
                <h5 className="text-[#FFFFFF] heading cursor-pointer">
                  About Us
                </h5>
              </li>
              <li
                className={`text-center sm:w-[50%] w-[90%] bg-black py-2 px-6 list-none`}
                onClick={scrollTimeLine}
                >
                <h5 className="text-[#FFFFFF] heading cursor-pointer">
                  Timeline
                </h5>
              </li>
              <li
                className={`text-center sm:w-[50%] w-[90%]  bg-black py-2 px-6 list-none`}
                onClick={scrollPS}
                >
                <Link to="/gamejam">
                  <h5 className="text-[#FFFFFF] heading cursor-pointer">
                    Problem Statements
                  </h5>
                </Link>
              </li>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HamburgerNavbar;
