"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation.jsx";
const ScrollSection = () => {
  return (
    <div className="my-20 mt-40">
      <div>
          <ContainerScroll
            className="w-[400px] md:w-full"
            titleComponent={
              <>
                <h1 className=" text-3xl md:text-6xl font-horizon text-white">
                  I HELP MAKE <br />
                  <span className="text-xl md:text-6xl  font-horizon">
                    WEBSITES{" "}
                    <span className="text-3xl md:text-7xl font-eyesome text-yellow-400">
                      Interactive
                    </span>
                  </span>
                </h1>
              </>
            }
          >
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/kbxzbm80/paper/f/h/z/a4-purple-paper-40-coloured-paper-officekart-original-imaft6krmyh6dscz.jpeg?q=20&crop=false"
              alt="hero"
              className="mx-auto rounded-2xl object-cover w-full h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
      </div>
    </div>
  );
};

export default ScrollSection;
