import React from "react";
import { Link } from "react-router-dom";
import "./GameCodex.css";

const SocialIcon = ({ image, url, text }) => {
  return (
    <div className="SocialIcons">
      <Link to={url}>
        <div className="text-black p-2 m-2 gap-3   flex flex-row bg-white">
          <img alt={text} src={image}></img>
          <h1>{text}</h1>
        </div>
      </Link>
    </div>
  );
};

export default SocialIcon;
