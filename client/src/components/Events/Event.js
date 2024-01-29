import React from "react";
import events from "../../assets/events.png";
import AryanEvents from "../../assets/AryanEvents.png";

const Event = () => {
  return (
    <div>
      <div className="flex justify-center align-middle py-16">
        <img alt="Events" src={events}></img>
      </div>
      <div className="flex justify-center">
        <div></div>
        <div>
          <img src={AryanEvents} alt="Events"></img>
        </div>
      </div>
    </div>
  );
};

export default Event;
