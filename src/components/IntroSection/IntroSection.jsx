import React from "react";

const IntroSection = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-10 md:my-20">

        <div className="mt-5 md:mt-0">
          <h1 className="font-horizon text-[23px] md:text-6xl">
            AMAN RAJ GUPTA
          </h1>
          <h3 className=" font-horizon text-[12px] md:text-[16px] mt-3 tracking-wider text-gray-300">
            WEB DEVELOPER | PROGRAMMER | TECHNOLOGY ENTHUSIAST
          </h3>

          <p className="font-eyesome text-yellow-400 text-2xl md:text-3xl mt-3 italic hover:text-purple-400 transition-colors duration-300">
            "Bringing visions to life through the language of code"
          </p>
          <a href="https://drive.google.com/file/d/16FS3bj3sCs_xMiHPhIVk2yklqU3Sdk_Q/view?usp=drive_link" target="_blank">
          <button className=" text-sm md:text-lg mt-5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-3xl px-6 py-3 font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            Download Resume
          </button>
          </a>
        </div>

        <img
          className=" z-10 rounded-full md:w-1/4 p-[6px] border-2 border-yellow-400 "
          src="/profile.png"
          alt="profile_photo"
        />

      </div>
    </div>
  );
};

export default IntroSection;
