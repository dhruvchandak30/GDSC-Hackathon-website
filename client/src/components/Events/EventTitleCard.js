import React from "react";

const EventTitleCard = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-white  border-white border-2 hover:text-black cursor-pointer hover:bg-white lg:text-3xl text-xl py-4 text-bold lg:w-64 w-32 px-2  flex text-center items-center -skew-x-12 font-array"
    >
      {text}
    </div>
  );
};

export default EventTitleCard;
