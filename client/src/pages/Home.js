import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading/Heading";
import AboutUs from "../components/AboutUs/AboutUs";
import GameCodex from "../components/GameCodex/GameCodex";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Heading />
      <AboutUs />
      <GameCodex />
    </div>
  );
};

export default Home;
