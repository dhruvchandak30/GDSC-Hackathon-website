import React from "react";
import "./GameCodex.css";
import GameCodexImg from "../../assets/GameCodex.png";
import Twitter from "../../assets/twitterlogo.png";
import Insta from "../../assets/instagramlogo.png";
import Git from "../../assets/githublogo.png";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";
import GameCodexRect from "../../assets/GameCodexRect.png";
import {motion} from "framer-motion"

const GameCodex = () => {
  return (
    <div className="flex  items-center relative flex-col my-8">
      <div className="flex lg:mr-[45rem] lg:-top-7 lg:absolute sm:text-center">
        <h1 className="text-white font-array font-array  text-5xl mb-4">
          GameCodex 1.0
        </h1>
      </div>
      <div>
        <img
          src={GameCodexRect}
          alt=""
          className="w-full lg:h-full h-[10rem]"
        ></img>
        <p
          data-aos="zoom-in-up"
          data-aos-once="true"
          data-aos-delay="500"
          className="absolute text-white lg:bottom-32 lg:left-[25%] lg:w-1/2  text-center flex lg:justify-center lg:items-center top-16 lg:text-[18px] text-[11px] py-2 lg:px-8 px-12"
        >
          GDSC LNMIIT presents GameCodeX, the highly anticipated hackathon for
          tech enthusiasts. Themed around GTA 6, this event offers a unique
          blend of insightful talks, hands-on coding challenges, and game
          development contests at The LNMIIT, Jaipur. Join us for a journey of
          discovery, learning, and triumph. GameCodeX is not just about coding;
          well renowned speakers will share their valuable insights on the
          tech-driven world.
        </p>
      </div>
      <motion.div 
        initial={{
          scale: 10,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      className="flex lg:-mt-10 lg:-ml-[40rem]  gap-3 mt-8 lg:flex-row flex-col ">
        <SocialIcon
          url="https://www.instagram.com/gamecodex_lnm/?img_index=1"
          image={Insta}
          text="Instagram"
        />
      </motion.div>
    </div>
  );
};

export default GameCodex;
