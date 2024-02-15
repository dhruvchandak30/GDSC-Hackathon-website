import React from "react";

const EventDescCard = ({ title, text }) => {
  return (
    <div>
      <h1 className="lg:text-5xl text-3xl lg:my-2 font-array">{title}</h1>
      <p className="text-white lg:text-xl text-[12px] lg:w-2/3 lg:p-2  font-instagram">
        {text}
      </p>
    </div>
  );
};

export default EventDescCard;
