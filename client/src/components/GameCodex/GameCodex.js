import React from "react";
import "./GameCodex.css";
import GameCodexImg from "../../assets/GameCodex.png";
import Twitter from "../../assets/twitterlogo.png";
import Insta from "../../assets/instagramlogo.png";
import Git from "../../assets/githublogo.png";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";
import GameCodexRect from "../../assets/GameCodexRect.png";

const GameCodex = () => {
  return (
    <div className="flex  items-center relative flex-col my-8">
      <div className="flex lg:mr-[45rem] lg:-top-7 lg:absolute sm:text-center">
        <h1 className="text-white font-array font-array  text-5xl mb-4">
          GameCodex 1.0
        </h1>
      </div>
      <div>
        <img src={GameCodexRect} alt="" className="w-full"></img>
        <p className="absolute text-white lg:bottom-32 lg:left-[25%] lg:w-1/2 text-center flex lg:justify-center lg:items-center top-16 lg:text-[18px] text-[11px] py-2 px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className="flex lg:-mt-10 lg:mr-64 gap-3 mt-8 lg:flex-row flex-col items-center justify-center">
        <SocialIcon
          url="https://instagram.com"
          image={Insta}
          text="Instagram"
        />
        <SocialIcon
          url="https://github.com/dhruvchandak30"
          image={Git}
          text="Github"
        />
        <SocialIcon url="https://twitter.com" image={Twitter} text="Twitter" />
      </div>
    </div>
  );
};

export default GameCodex;
