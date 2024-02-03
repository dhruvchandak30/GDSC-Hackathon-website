import React from "react";
import logo from "../../assets/gdsclogo.svg";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollAboutUs = () => {
    var elem = document.getElementById("AboutUsid");
    elem.scrollIntoView({ behavior: "smooth" });
  };
  const scrollEvents = () => {
    var elem = document.getElementById("EventID");
    elem.scrollIntoView({ behavior: "smooth" });
  };

  const scrollPS = () => {
    var elem = document.getElementById("PSId");
    elem.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="pt-16 pb-4">
      <div className="flex lg:flex-row flex-col justify-evenly">
        <div className="flex items-center  justify-center gap-x-2">
          <div className="text-white">
            <h1 className="font-pricedown text-5xl">GAME</h1>
            <h1 className="font-pricedown text-5xl">
              codex <span className="text-xl">1.0</span>
            </h1>
            <ul className="flex gap-x-4 mt-4 ms-2">
              <FaGithub />
              <FaTwitter />
              <FaInstagram />
            </ul>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="flex lg:flex-row lg:w-1/2 justify-around  items-center lg:p-0  p-4">
          <div className="text-white">
            {/* <h1 className="text-3xl font-bold mb-4">Navigate to</h1> */}
            <ul className="flex flex-col gap-y-2 text-center font-medium text-xl">
              <li onClick={scrollAboutUs} className="cursor-pointer">
                About us
              </li>
              <li onClick={scrollEvents} className="cursor-pointer">
                Events
              </li>
              <li onClick={scrollPS} className="cursor-pointer">
                Problem Statements
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">Location</h1>
            <div className="border-2 border-white lg:w-[250px] h-[150px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22854.66655837726!2d75.89942105947914!3d26.934854449450757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1689738363994!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                allowFullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-[#FFFFFF80] w-[75%] mx-auto mt-10"></div>
      <div className="flex text-white items-center justify-center py-2">
        <img src={logo} alt="" />
        <p>Designed and Developed by GDSC, LNMIIT</p>
      </div>
    </div>
  );
};

export default Footer;
