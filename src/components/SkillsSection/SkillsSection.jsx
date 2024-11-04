import React from "react";
import { imagesURI } from "../../constants/ImagesPath.jsx";
import SkillsCard from "./SkillsCard.jsx";

const SkillsSection = () => {
  return (
    <div className="my-20 md:mt-40">
        <h2 className="text-center mt- font-horizon text-4xl md:text-8xl ">SKILLS</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mt-10">
            {imagesURI.map((item,index)=>(
                <SkillsCard  key={index} item={item} />
            ))}
        </div>
    </div>
  );
};

export default SkillsSection;
