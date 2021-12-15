import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import { projectsInfo } from "../const/const";

const ProjectstSlider = ({images}) => {
  console.log(` {projectsInfo.images`,  projectsInfo)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="project-card__slider">
        <Slider {...settings}>
          {images.map((slide) => {
            return <div key={slide} className="project-card__image-container">
              <a href={slide} className="project-card__link">
                <img src={slide} alt="" width="555" height="400"></img>
              </a>
            </div>
          })}
        </Slider>
      </div>
    );
}

export default ProjectstSlider;