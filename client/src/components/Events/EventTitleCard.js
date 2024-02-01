import React, { useState, useEffect } from "react";

const EventTitleCard = ({ text, onClick, isActive }) => {
  const [localActive, setLocalActive] = useState(false);

  useEffect(() => {
    setLocalActive(isActive);
  }, [isActive]);

  const handleClick = () => {
    setLocalActive(true);
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`border-white border-2 ${
        localActive ? "bg-white text-black" : "hover:bg-white text-white"
      } cursor-pointer hover:text-black lg:text-3xl text-xl lg:py-4 py-1 text-bold lg:w-64 w-32 px-2 flex text-center items-center -skew-x-12 font-array`}
    >
      {text}
    </div>
  );
};

export default EventTitleCard;
