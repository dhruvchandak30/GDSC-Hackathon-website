import React from "react";
import { Link } from "react-router-dom";
import "./GameCodex.css";
import SocialBG from "../../assets/SocialBG.png";

const SocialIcon = ({ image, url, text }) => {
  return (
    <div className="SocialBG bg-cover bg-center w-[13rem] h-max p-2">
      <Link to={url}>
        <div className="text-black font-array text-center ml-12 items-center m-2 gap-3   flex flex-row">
          <img alt={text} src={image}></img>
          <h1>{text}</h1>
        </div>
      </Link>
    </div>
  );
};

export default SocialIcon;
