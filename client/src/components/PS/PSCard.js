import React from "react";

const PSCard = ({ img, title, desc }) => {
  return (
    <div className="text-white w-[15rem] mx-32  my-8">
      <img
        data-aos="flip-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-once="true"
        src={img}
        className="w-[15rem] cursor-pointer"
        alt={title}
      />
      <div
        data-aos="zoom-in"
        data-aos-once="true"
        className="w-[15rem] flex flex-col"
      >
        <h1 className="font-array text-3xl text-[#F27DFD]">{title}</h1>
        <div className="">
          <p className=" h-max">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default PSCard;
