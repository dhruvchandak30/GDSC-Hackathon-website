import React from "react";
import "./AboutUs.css";
import img1 from "../../assets/Crowd1.jpg";
import Ramsha1 from "../../assets/Ramsha1.png";
import img3 from "../../assets/Crowd2.jpg";
import AboutUsImg from "../../assets/AboutUs.png";

const AboutUs = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center my-16">
        <img src={AboutUsImg} alt="About Us"></img>
      </div>
      <div className="flex items-center justify-center flex-shrink-0">
        <div
          className="trapezoid1 outline outline-3 -outline-offset-8 outline-white bg-blue-400 h-[350px] skew-x-12 skew-y-12 lg:w-1/5"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex items-center justify-center -ml-24 -mr-24">
          <img
            src={Ramsha1}
            className="BossImage w-2/3 outline outline-3 -outline-offset-8 outline-white"
            alt="Boss"
          ></img>
        </div>
        <div
          className="trapezoid3 outline outline-3 -outline-offset-8 outline-white bg-blue-400 h-[350px] -skew-x-12 -skew-y-12 lg:w-1/5"
          style={{
            backgroundImage: `url(${img3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutUs;
