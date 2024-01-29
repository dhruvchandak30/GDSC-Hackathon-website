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
      <div className="flex flex-row justify-center">
        <img alt="aboutUS" src={img1}></img>
        <img alt="aboutUS" src={Ramsha1}></img>
        <img alt="aboutUS" src={img3}></img>
      </div>
    </div>
  );
};

export default AboutUs;
