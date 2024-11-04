import React, { useMemo } from "react";

const ProjectCard = ({ item }) => {
  const rotation = useMemo(() => Math.floor(Math.random() * 20 - 10), []);

  return (
      <a href={item.projectLink} target="_blank">
        <div
          className={`${item.gradient}  h-[400px] w-[300px] rounded-xl transform bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-2`}
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <img
            className="object-cover rounded-xl"
            src={item.projectImage}
            alt=""
          />
          <h3 className="font-bold text-center mt-3 text-black font-horizon text-xs">
            {item.projectName}
          </h3>
          <p className="text-xs mt-3 text-black">{item.projectDesp}</p>

          <div className="flex mt-3 gap-5">
            {item.projectTech.map((item, index) => (
              <div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="h-8"
                    src={item.TechStackImage}
                    alt=""
                    srcset=""
                  />
                  <p className="text-black font-bold text-xs">
                    {item.TechStackName}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a href={item.projectLink} target="_blank">
            <button
              className={`${item.gradient} mt-3 rounded-md text-black px-2 py-1 border-none font-horizon text-xs`}
            >
              View Project
            </button>
          </a>
        </div>
      </a>
  );
};

export default ProjectCard;
