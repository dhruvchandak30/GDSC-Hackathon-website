import React, { useEffect, useState } from "react";
import AryanEvents from "../../assets/AryanEvents.jpg";
import HackathonImage from "../../assets/HackathonImage.jpg";
import Talk from "../../assets/Talk.jpg";
import CP from "../../assets/CP.jpg";
import EventTitleCard from "./EventTitleCard";
import "./Event.css";
import EventDescCard from "./EventDescCard";
import { motion } from "framer-motion";

const EventData = [
  {
    title: "Code Jam",
    text: "An exciting platform for all the game developers out there to showcase their game development skills on the basis of the problem statement which will be provided to them along with the release of the problem statement for the hackathon.",
    img: AryanEvents,
  },
  {
    title: "Hackathon",
    text: "An exciting platform for all the game developers out there to showcase their game development skills on the basis of the problem statement which will be provided to them along with the release of the problem statement for the hackathon.",
    img: HackathonImage,
  },
  {
    title: "Talk",
    text: "GameCodeX isn’t all about those coding and development stuff. Well-renowned speakers will take up the stage to share valuable insights and throw lights on what’s going on in this tech-driven world. ",
    img: Talk,
  },
  {
    title: "CP",
    text: "GameCodeX gives you a chance to display your programming skills with a coding contest lined up on the same day. The problem statements shall be provided, and you need to step up to prove your mettle against your worthy competitors and emerge victorious amongst all.",
    img: CP,
  },
];

const Event = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [events, setEventsData] = useState(EventData[1]);

  const [EventImageVisibility, setEventImage] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      setEventImage(true);
    }
  }, [EventImageVisibility]);

  const ChangeEventHandler = (text) => {
    setActiveCard(text);
    switch (text) {
      case "Hackathon":
        setEventsData(EventData[1]);
        break;
      case "Code Jam":
        setEventsData(EventData[0]);
        break;
      case "Talk":
        setEventsData(EventData[2]);
        break;
      case "CP":
        setEventsData(EventData[3]);
        break;
      default:
        break;
    }
  };

  const ShowHideDescriptionHandler = () => {
    setEventImage(!EventImageVisibility);
  };

  return (
    <div
      id="EventID"
      className="my-16 flex flex-col justify-center items-center"
    >
      <motion.div
        className="flex justify-center align-middle py-16"
        initial={{
          opacity: 0,

          y: 150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <h1 className="font-pricedown text-7xl text-white">Events</h1>
      </motion.div>

      <div className="flex lg:flex-row flex-col lg:justify-center ">
        <div className="flex lg:flex-col flex-wrap p-4 gap-4 justify-evenly">
          <motion.div
            className="card"
            initial={{
              opacity: 0,

              x: -350,
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1.5, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <EventTitleCard
              onClick={() => ChangeEventHandler("Hackathon")}
              text="Hackathon"
              isActive={activeCard === "Hackathon"}
            />
          </motion.div>
          <motion.div
            className="card"
            initial={{
              opacity: 0,

              x: -350,
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1.5, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <EventTitleCard
              onClick={() => ChangeEventHandler("Code Jam")}
              text="Code Jam"
              isActive={activeCard === "Code Jam"}
            />
          </motion.div>
          <motion.div
            className="card"
            initial={{
              opacity: 0,

              x: -350,
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1.5, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <EventTitleCard
              onClick={() => ChangeEventHandler("Talk")}
              text="Talk"
              isActive={activeCard === "Talk"}
            />
          </motion.div>
          <motion.div
            className="card"
            initial={{
              opacity: 0,

              x: -350,
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1.5, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <EventTitleCard
              onClick={() => ChangeEventHandler("CP")}
              text="CP"
              isActive={activeCard === "CP"}
            />
          </motion.div>
        </div>

        <div className="flex items-center relative">
          <div
            className=""
            onMouseEnter={ShowHideDescriptionHandler}
            onClick={ShowHideDescriptionHandler}
          >
            <img
              src={events.img}
              id="EventImagee"
              className="items-center flex p-4 lg:-skew-x-6 justify-between w-[35rem] lg:h-[25rem]"
              alt="Events"
              style={{
                filter: !EventImageVisibility
                  ? "brightness(100%)"
                  : "brightness(50%)",
              }}
            />
          </div>
          {EventImageVisibility && (
            <div
              id="EventContainer1"
              className={`text-white  absolute ml-[10%] lg:mt-[10%] lg:p-0 p-8`}
            >
              <EventDescCard title={events.title} text={events.text} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
