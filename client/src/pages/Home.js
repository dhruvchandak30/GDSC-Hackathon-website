import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading/Heading";
import AboutUs from "../components/AboutUs/AboutUs";
import GameCodex from "../components/GameCodex/GameCodex";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <Hero />
      {/* <Heading /> */}
      <AboutUs />
      <GameCodex />
    </div>
  );
};

export default Home;
