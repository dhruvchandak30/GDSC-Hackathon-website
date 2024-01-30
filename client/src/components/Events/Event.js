import React, { useState } from "react";
import AryanEvents from "../../assets/AryanEvents.png";
import EventTitleCard from "./EventTitleCard";
import "./Event.css";

const Event = () => {
  const [eventsImage, setEventsImage] = useState(AryanEvents);
  const [EventTitle, setEventTitle] = useState("Code Jam");

  const ChangeEventHandler = (text) => {
    setEventTitle(text);
    if (text === "Hackathon") {
      setEventsImage(AryanEvents);
      setEventTitle(text);
    } else if (text === "Code Jam") {
      setEventsImage(AryanEvents);
    } else if (text === "Talk") {
      setEventsImage();
    } else if (text === "CP") {
      setEventsImage();
    }
  };
  const HideDescriptionHandler = () => {
    const Container = document.getElementById("EventContainer1");
    // console.log(Container.style)
    if (window.innerWidth < 900) {
      if (Container.style.display === "none") {
        console.log("Block");
        Container.style.display = "block";
      } else if (Container.style.display === "block") {
        console.log("None");
        Container.style.display = "none";
      } else {
      }
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

        <div className="flex items-cente relative">
          <div className="EventImage" onClick={HideDescriptionHandler}>
            <img
              src={eventsImage}
              className="items-center flex justify-between"
              alt="Events"
            />
          </div>
          <div
            id="EventContainer1"
            className="text-white EventContainer ml-[10%] mt-[10%] absolute"
          >
            <h1 className="lg:text-5xl text-3xl my-2 font-array">
              {EventTitle}
            </h1>
            <p className="text-white lg:text-xl text-sm lg:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
              reprehenderit optio amet ab temporibus asperiores quasi
              cupiditate. Voluptatum ducimus voluptates voluptas?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
