import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import GameCodexRect from "../../assets/GameCodexRect.png";
import { motion } from "framer-motion";
import six from "../../assets/six.png";
import "../GameCodex/GameCodex.css";
import { useState, useEffect } from "react";
import HamburgerNavbar from "../Navbar/HamburgerNavbar";
import { Link } from "react-router-dom";
import "./GameJam.css";
import GameJamCard from "./GameJamCard";

const GameJamData = [
  {
    title: "Theme: Game within a Game",
    Desc: "Get ready to level up your creativity with our game jam theme: 'Game within a game'! Imagine your game character stepping into another game within your game! Picture a racing game where you collect puzzle pieces to unlock a hidden treasure hunt within.Unleash your imagination, challenge conventions, and redefine the gaming experience. Surprise us with the ultimate gameception. We can't wait to see what you come up with!",
  },
  {
    title: "What is a Game Jam?",
    Desc: "A game jam is an event where individuals or teams come together to create a game within a set timeframe, usually ranging from a few hours to a few days. It's a celebration of game development, fostering innovation, experimentation, and camaraderie among participants. Game jams are not only an excellent opportunity to sharpen your skills and expand your portfolio but also a chance to connect with like-minded individuals in the gaming community",
  },
  {
    title: "Getting Started",
    Desc: "Join our exciting game jam adventure by registering on our website! Whether you're flying solo or teaming up with up to 5 fellow developers, there's a place for you. Once the theme is unveiled, unleash your imagination during a lively brainstorming session. With a generous week-long timeframe, dive into game development, embracing the spirit of exploration and experimentation. Remember, perfection isn't the goal – it's about the journey! When your masterpiece is ready, submit it on the Itch GameJam Page before the clock runs out. For comprehensive rules, submission guidelines, and supported platforms, Check out the game jam page itch page sent to you on your registered email ids'. Let's embark on this creative journey together and craft unforgettable gaming experiences!",
  },
];

const GameJam = () => {
  const [wid, setWid] = useState(window.innerWidth);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (wid < 1020) setStatus(true);
    else setStatus(false);
  }, [wid]);

  return (
    <div className="bg-black   text-white">
      <div className="sixImage lg:h-full lg:w-full">
        <div className="">{status ? <HamburgerNavbar /> : <Navbar />}</div>
        <div className=" flex lg:flex-row flex-col lg:mt-40  items-center lg:justify-around ml-36">
          <div></div>
          <div className="lg:mt-0 ">
            <div>
              <h3 className="font-instagram font-bold lg:text-2xl lg:w-full w-[10rem]">
                GDSC LNMIIT PRESENTS
              </h3>
              <h1 className="font-pricedown lg:text-9xl text-5xl lg:text-right text-center ">
                GAMEJAM
              </h1>
            </div>
            <div className="flex lg:justify-end justify-center my-14">
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfupxa-3jUAT9SHpTWh2HErhehp2YNs10jzrRK-JQTEL9Ckmg/viewform?vc=0&c=0&w=1&flr=0 ">
                <button className="font-array text-xl bg-black text-pink-600 border-b-4 border-r-4 py-2 px-12 border-pink-600 ">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <GameJamCard title={GameJamData[0].title} Desc={GameJamData[0].Desc} />
        <GameJamCard title={GameJamData[1].title} Desc={GameJamData[1].Desc} />
        <GameJamCard title={GameJamData[2].title} Desc={GameJamData[2].Desc} />
      </div>

      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default GameJam;
