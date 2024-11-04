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
              src="/works.png"
              alt="hero"
              className="mx-auto rounded-2xl object-cover w-full h-full "
              draggable={false}
            />
          </ContainerScroll>
      </div>
    </div>
  );
};

export default ScrollSection;
