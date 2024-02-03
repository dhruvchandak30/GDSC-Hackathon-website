import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/Heading/Heading";
import AboutUs from "../components/AboutUs/AboutUs";
import GameCodex from "../components/GameCodex/GameCodex";
import Event from "../components/Events/Event";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/TimeLine/Timeline";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import PS from "../components/PS/PS";

const Home = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <Hero />
      <AboutUs />
      <GameCodex />
      <Event />
      <PS />
      <Timeline />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
