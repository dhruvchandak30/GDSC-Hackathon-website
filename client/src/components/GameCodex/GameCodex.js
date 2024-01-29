import React from "react";
import "./GameCodex.css";
import GameCodexImg from "../../assets/GameCodex.png";
import Twitter from "../../assets/twitterlogo.png";
import Insta from "../../assets/instagramlogo.png";
import Git from "../../assets/githublogo.png";
import { Link } from "react-router-dom";
import SocialIcon from "./SocialIcon";

const GameCodex = () => {
  return (
    <div className="flex  items-center  flex-col my-8">
      <div className="flex  mr-[35rem] absolute">
        <h1 className="text-white font-array font-array  text-5xl">
          GameCodex 1.0
        </h1>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="304"
          viewBox="0 0 978 304"
          fill="none"
        >
          <path
            d="M0 0H978L872 303.5H82L0 0Z"
            fill="#AE454F"
            fill-opacity="0.9"
          />

          <text class="verse" style={{ color: "white" }} y="30%">
            <tspan dy="1.2em" x="10" dx="4em">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sagittis risus at orci porta, ut egestas erat
            </tspan>
            <tspan dy="1.5em" x="20" dx="4em">
              convallis. Cras tincidunt nec quam ac suscipit. Aenean ultrices
              diam quis ullamcorper lobortis. Duis sed purus sed
            </tspan>
            <tspan dy="1.5em" x="10" dx="5em">
              lectus gravida iaculis ut quis ante. Proin id tristique lectus,
              quis sagittis est. Sed elementum nunc nunc, quis
            </tspan>
            <tspan dy="1.5em" x="10" dx="4em">
              tristique justo efficitur a. Sed vitae erat ac leo dignissim
              elementum eu dictum magna. Praesent suscipit
            </tspan>
          </text>
        </svg>
      </div>
      <div className="flex -mt-10 mr-64 gap-3 lg:flex-row flex-col">
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
