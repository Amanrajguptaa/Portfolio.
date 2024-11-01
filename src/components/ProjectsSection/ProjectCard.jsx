import React, { useMemo } from 'react';

const ProjectCard = ({ item }) => {
  const rotation = useMemo(() => Math.floor(Math.random() * 20 - 10), []);

  return (
    <div
      className={`${item.gradient}  h-96 w-[300px] rounded-xl transform bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10`}
      style={{ transform: `rotate(${rotation}deg)` }}></div>
  );
};

export default ProjectCard;
