import React, { useEffect, useRef } from "react";

const AboutSection = () => {
  // const emj2 = useRef(null);
  // const emj3 = useRef(null);
  // const emj4 = useRef(null);
  // const emj5 = useRef(null);

  // useEffect(() => {
  //   gsap.from(emj1.current, {
  //     x:"-220%",
  //     duration:0.5,
  //     opacity:0,
  //      scrollTrigger: {
  //       trigger: emj1.current,
  //       scroller:"body",
  //       start: 'top 80%',
  //       end: 'top 50%',
  //       scrub: true,

  //     },
  //   });

  //   gsap.from(emj2.current, {
  //     x:"-200%",
  //     duration:0.5,
  //     opacity:0,
  //      scrollTrigger: {
  //       trigger: emj2.current,
  //       scroller:"body",
  //       start: 'top 80%',
  //       end: 'top 50%',
  //       scrub: true,

  //     },
  //   });

  //   gsap.from(emj3.current, {
  //     duration:0.5,
  //     scale:0.7,
  //     opacity:0.5,
  //      scrollTrigger: {
  //       trigger: emj3.current,
  //       scroller:"body",
  //       start: 'top 80%',
  //       end: 'top 50%',
  //       scrub: true,

  //     },
  //   });

  //   gsap.from(emj4.current, {
  //     x:"200%",
  //     duration:0.5,
  //     opacity:0,
  //      scrollTrigger: {
  //       trigger: emj4.current,
  //       scroller:"body",
  //       start: 'top 80%',
  //       end: 'top 50%',
  //       scrub: true,

  //     },
  //   });

  //   gsap.from(emj5.current, {
  //     x:"220%",
  //     duration:0.5,
  //     opacity:0,
  //      scrollTrigger: {
  //       trigger: emj5.current,
  //       scroller:"body",
  //       start: 'top 80%',
  //       end: 'top 50%',
  //       scrub: true,

  //     },
  //   });
  // }, []);

  return (
    <div className=" my-20 md:mt-40">
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
          <div className="flex justify-center items-center ">
            <div className="flex flex-col  md:translate-x-44 -z-1">
              <div className="rounded-full w-full bg-black border border-purple-600  ">
                <img src="/like.png" alt="" />
              </div>
              <p className="hidden md:block font-horizon  md:text-md mt-4 md:mx-10">POSITIVE</p>
            </div>

            <div className="flex flex-col md:translate-x-1/3 z-10 ">
              <div className="rounded-full w-full bg-purple-600 border border-purple-600">
                <img src="/think.png" alt="" />
              </div>
              <p className="hidden md:block font-horizon md:text-md mt-4 md:mx-12">ANALYTICAL</p>
            </div>

            <div className="flex flex-col md:translate-y-4 z-20">
              <div className="w-full ">
                  <img className=" " src="/swag.png" alt="" />
              </div>
              <p className="hidden md:block font-horizon  md:text-md mt-4 md:mx-16">CONFIDENT</p>
            </div>

            <div className="flex flex-col md:-translate-x-[35%] z-10">
              <div className="rounded-full w-full bg-purple-600 border border-purple-600 p-2 md:p-5">
                <img src="/curious.png" alt="" />
              </div>
              <p className="hidden md:block font-horizon  md:text-md mt-4 md:mx-12">INQUISTIVE</p>
            </div>

            <div className="flex flex-col md:-translate-x-40 -z-1">
              <div className="rounded-full w-full bg-black border border-purple-600  ">
                <img src="/heart.png" alt="" />
              </div>
              <p className="hidden md:block font-horizon md:text-md mt-4 md:mx-12">PASSIONATE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
