import React, { useEffect, useRef } from "react";
import Logo from "../Logo/Logo";

const ConnectSection = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);

  return (
    <div className="my-20 md:mt-40">
      <div>
        {/* <div className="hidden md:flex justify-between w-full">
  
<div ref={box1} className="box1 rotate-12 flex justify-start items-center px-4 py-1 rounded-full bg-black border-4 border-purple-600 mb-5">
<span className="bg-purple-600 rounded-full p-1 text-4xl mr-2">🤝</span>
<span className="text-white text-xl font-bold">Innovative</span>
</div>

<div ref={box2} className="box2 -rotate-[7deg] flex justify-start items-center px-4 py-1 rounded-full bg-black border-4 border-purple-600 mb-5">
<span className="bg-purple-600 rounded-full p-1 text-4xl mr-2">🎯</span>
<span className="text-white text-xl font-bold">Dreamy</span>
</div>

</div> */}

        <div className="flex justify-center items-center">
          <div>
            <div className="font-horizon text-xl md:text-5xl flex ml-16 md:justify-end">
              LET'S
            </div>
            <div className="font-horizon text-3xl md:text-7xl">BUILD</div>
            <div className="font-horizon text-md md:text-4xl">SOMETHING</div>
          </div>
          <div className="-rotate-3 md:mt-9 font-eyesome text-yellow-400 text-3xl md:text-[105px] flex md:justify-end items-center md:items-end">
            Extraordinary
          </div>
        </div>

        <div className="mt-4 md:mt-16">
          <Logo />
        </div>

        {/* <div className="hidden md:flex justify-between w-full">
  
  <div ref={box3} className="box3 -rotate-12 flex justify-start items-center px-3 py-1 rounded-full bg-black border-4 border-purple-600 mb-5">
    <span className="bg-purple-600 rounded-full p-1 text-4xl mr-2">✨</span>
    <span className="text-white text-xl font-bold " >Inspiring</span>
  </div>

  <div ref={box4} className="box4 -rotate-[10deg] flex justify-start items-center px-3 py-1 rounded-full bg-black border-4 border-purple-600 mb-5">
    <span className="bg-purple-600 rounded-full p-1 text-4xl mr-2">🧠</span>
    <span className="text-white text-xl font-bold">Ingenious</span>
  </div>

    </div> */}
      </div>
    </div>
  );
};

export default ConnectSection;
