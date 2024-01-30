import React from "react";
import AboutUsImage from "../../assets/AboutUsImage.png";

const AboutUs = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center my-16">
        <h1 className="font-pricedown text-white lg:text-7xl  AboutUs">
          About Us
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <img alt="About US" src={AboutUsImage}></img>
      </div>
      <div></div>
    </div>
  );
};

export default AboutUs;
