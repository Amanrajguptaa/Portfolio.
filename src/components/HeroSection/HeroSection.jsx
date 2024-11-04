import React, { useRef, useEffect } from "react";

const HeroSection = () => {
  const splineRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =

      "https://unpkg.com/@splinetool/viewer@1.9.35/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    const hideLogo = () => {
      const splineViewer = document.querySelector("spline-viewer");

      if (splineViewer) {
        const shadowRoot = splineViewer.shadowRoot;

        if (shadowRoot) {
          const logoElement = shadowRoot.querySelector("#logo");
          if (logoElement) {
            logoElement.style.display = "none";
          }
        }
      }
    };

    const observer = new MutationObserver(() => {
      hideLogo();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-[250px] max-h-screen flex flex-col justify-center items-center -z-10">

       <div className="mt-20 md:mt-[450px]"> 
        <div className="flex flex-col justify-center items-center">
        <h1 className="font-horizon text-[26px] md:text-7xl">I Build</h1>
        <h1 className="font-horizon text-[20px] md:text-7xl">Amazing Websites</h1>
        <h2 className="font-eyesome text-4xl md:text-7xl -mt-1 md:-mt-3 text-yellow-400 warp">at Warp Speed</h2>
        </div>

        <div className="hidden md:block">
          <spline-viewer
            ref={splineRef}
            url="https://prod.spline.design/ZuUTJycJDYxLIQYg/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          ></spline-viewer>
        </div> 
        </div>

    </div>
  );
};

export default HeroSection;
