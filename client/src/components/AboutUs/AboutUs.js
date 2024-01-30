import React from "react";
import img1 from "../../assets/Crowd1.jpg";
import Ramsha1 from "../../assets/Ramsha1.png";
import img3 from "../../assets/Crowd2.jpg";

const AboutUs = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center my-16">
        <h1 className="font-pricedown text-white lg:text-7xl  AboutUs">
          About Us
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <img alt="aboutUS" className="" src={img1}></img>
        <img alt="aboutUS" className="" src={Ramsha1}></img>
        <img alt="aboutUS" src={img3}></img>
      </div>
      <div></div>
    </div>
  );
};

export default AboutUs;
