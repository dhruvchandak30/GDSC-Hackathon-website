import React, { useState } from "react";
import AryanEvents from "../../assets/AryanEvents.png";
import EventTitleCard from "./EventTitleCard";

const Event = () => {
  const [eventsImage, setEventsImage] = useState(AryanEvents);

  const ChangeEventHandler = (text) => {
    if (text === "Hackathon") {
      setEventsImage(AryanEvents);
    } else if (text === "Code Jam") {
      setEventsImage(AryanEvents);
    } else if (text === "Talk") {
      setEventsImage();
    } else if (text === "CP") {
      setEventsImage();
    }
  };

  return (
    <div>
      <div className="flex justify-center align-middle py-16">
        <h1 className="font-pricedown lg:text-8xl text-3xl  text-white ">
          Events
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col p-4 gap-4 justify-evenly">
          <EventTitleCard
            onClick={() => ChangeEventHandler("Code Jam")}
            text="Code Jam"
          />
          <EventTitleCard
            onClick={() => ChangeEventHandler("Hackathon")}
            text="Hackathon"
          />
          <EventTitleCard
            onClick={() => ChangeEventHandler("Talk")}
            text="Talk"
          />
          <EventTitleCard onClick={() => ChangeEventHandler("CP")} text="CP" />
        </div>
        f
        <div className="flex items-center">
          <img
            src={eventsImage}
            className=" items-center flex justify-between"
            alt="Events"
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
