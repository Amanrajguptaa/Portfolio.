import React from "react";

const AboutSection = () => {
  return (
    <div id="about" className="my-20 md:mt-40">
      <div className="">

        <div className="flex justify-center items-center">
          <div>
            <h2 className="font-horizon text-4xl md:text-7xl flex justify-end">
              ITS
            </h2>
            <h2 className="font-horizon text-4xl md:text-7xl">ABOUT</h2>
          </div>
          <h2 className="font-eyesome text-6xl md:text-9xl text-yellow-400 -rotate-12">
            Me
          </h2>
        </div>

        <div className="flex mt-5 md:mt-10 ">

          <div className="md:translate-x-36">
          <div className="rounded-full bg-black border border-purple-600 -z-1">
            <img src="/like.png" alt="" />
          </div>
          <p className="hidden md:block font-horizon mt-4 mx-10">POSITIVE</p>
          </div>


          <div className="md:translate-x-[25%]">
          <div className="rounded-full bg-purple-600 border border-purple-600  z-10">
            <img src="/think.png" alt="" />
            </div>
            <p className="hidden md:block font-horizon mt-4 mx-10">ANALYTICAL</p>
            </div>



          <div className="scale-110 z-50">
          <div className="rounded-full md:mt-5">
            <img src="/swag.png" alt="" />
            </div>
            <p className="hidden md:block font-horizon mt-4 mx-10">CONFIDENT</p>

            </div>

          <div className="md:-translate-x-[25%] z-10 ">
          <div className="rounded-full bg-purple-600 border border-purple-600   z-10">
            <img src="/curious.png" alt="" />
            </div>
            <p className="hidden md:block font-horizon mt-4 mx-10">INQUISTIVE</p>

          </div>

          <div className="md:-translate-x-36">
          <div className="rounded-full bg-black border border-purple-600 -z-1">
            <img src="/heart.png" alt="" />
          </div>
          <p className="hidden md:block font-horizon mt-4 ml-16">PASSIONATE</p>
          </div>        
          </div>
      </div>
    </div>
  );
};

export default AboutSection;
