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
                GDSC LNMIIT X PRESIDENTIAL COUNCIL LNMIIT PRESENTS
              </h3>
              <h1 className="font-pricedown lg:text-9xl text-5xl lg:text-right text-center ">
                GAMEJAM
              </h1>
            </div>
            <div className="flex lg:justify-end justify-center my-14">
              <Link to="https://unstop.com/p/gamecodex-10-lnm-institute-of-information-technology-lnmiit-jaipur-892560">
                <button className="font-array text-xl bg-black text-pink-600 border-b-4 border-r-4 py-2 px-12 border-pink-600 ">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  bg-black pt-16  items-center relative flex-col ">
        <div className="flex lg:mr-[45rem] lg:top-10 lg:absolute sm:text-center">
          <h1 className="text-white font-array font-array  lg:text-5xl text-3xl mb-4">
            Rules and Regulations
          </h1>
        </div>
        <div>
          <img
            src={GameCodexRect}
            alt=""
            className="w-full lg:h-full h-[18rem]"
          ></img>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="absolute text-white lg:bottom-[2rem] lg:left-[25%] lg:w-1/2 md:w-2/3   text-center flex lg:justify-center lg:items-center top-32 lg:text-[18px] text-[13px] py-2 lg:px-8 px-12 font-instagram"
          >
            Get ready to level up your creativity with our game jam theme: 'Game
            within a game'! Ever wanted to dive into a virtual world where every
            move unfolds a new game within the game? Picture yourself navigating
            a maze while solving Sudoku puzzles, or battling dragons in a game
            of chess. But wait, there's more! Imagine your game character
            stepping into another game within your game! How about a racing game
            where you collect puzzle pieces to unlock a hidden treasure hunt
            within? The possibilities are endless! This theme invites you to
            explore uncharted territories, challenge conventions, and redefine
            the gaming experience. Let your imagination run wild and surprise us
            with the ultimate gameception. We can't wait to see what you come up
            with!
          </motion.div>
        </div>
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default GameJam;
