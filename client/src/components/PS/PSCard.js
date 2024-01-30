import React from "react";

const PSCard = ({ img, title, desc }) => {
  return (
    <div className="text-white w-[15rem] mx-32  my-8">
      <img src={img} className="w-[15rem]" alt={title} />
      <div className="w-[15rem] flex flex-col">
        <h1 className="font-array text-3xl text-[#F27DFD]">{title}</h1>
        <div className="">
        <p className=" h-max">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PSCard;
