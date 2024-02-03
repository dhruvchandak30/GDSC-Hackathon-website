import React from "react";
import { useEffect } from "react";
import "./timeline.css";
import data from "../data/data";
import time from "../../assets/timeline.svg"

const Timeline = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      items.forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add("in-view");
        } else {
          item.classList.remove("in-view");
        }
      });
    }

    handleScroll(); // Call the function on initial load
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="TimeLineid" className={` timeline w-full px-6 sm:px-12 md:px-16  py-20`}>
     <div className="flex items-center justify-center my-16">
        <img src={time} alt="About Us"></img>
      </div>
      <ul>
        {data.map((e, ind) => (
          <li key={ind}>
            <div className=" text-white bg-[#9D3E47]  h-[300px] flex md:w-[300px] lg:w-[350px] xl:w-[400px] relative bottom-0 lg:p-4">
              <div className=" w-full mx-auto text-center text-base md:text-xl  px-2 items-center flex flex-col justify-center">
                <h1 className="mb-2 md:mb-3 font-array text-2xl">{e.head}</h1>
                <p className="leading-5 sm:leading-6 font-instagram text-lg">{e.content}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
