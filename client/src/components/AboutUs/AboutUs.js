import React from "react";
import AboutUsImage from "../../assets/AboutUsImage.png";

const AboutUs = () => {
  return (
    <div className="" id="AboutUsid">
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="flex items-center justify-center my-16"
      >
        <h1 className="font-pricedown text-white text-7xl  AboutUs">
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
