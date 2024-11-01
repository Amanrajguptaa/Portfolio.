import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { cardData } from '../../constants/CardData';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <div className='my-20 md:mt-40 md:px-10 overflow-x-hidden'>
        <h2 className='font-horizon text-4xl md:text-7xl text-center'>PROJECTS</h2>
      <Slider {...settings}>
        {cardData.map((item, index) => (
          <div key={index} className="my-10 mx-10">
            <ProjectCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectsSection;
