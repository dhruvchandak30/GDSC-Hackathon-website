import React from "react";
import "./GameCodex.css";
import GameCodexImg from "../../assets/GameCodex.png";
import Twitter from "../../assets/Twitter.png";
import Insta from "../../assets/Insta.png";
import Git from "../../assets/Git.png";
import { Link } from "react-router-dom";

const GameCodex = () => {
  return (
    <div className="flex  items-center flex-col my-8">
      <div className="flex mt-2 mr-[35rem] absolute">
        <img src={GameCodexImg} alt="GameCodex 1.0"></img>
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
      <div className="flex -mt-10 mr-64 lg:flex-row flex-col">
        <Link to="https://instagram.com">
          <img src={Insta} alt="Insta"></img>
        </Link>
        <Link to="https://github.com">
          <img src={Git} alt="Git"></img>
        </Link>
        <Link to="https://twitter.com">
          <img src={Twitter} alt="Twitter"></img>
        </Link>
      </div>
    </div>
  );
};

export default GameCodex;
