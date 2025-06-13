"use client";
import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const developersData = [
  { image: "assets/developers/sobha.png" },
  { image: "assets/developers/damac.png" },
  { image: "assets/developers/ellington.png" },
  { image: "assets/developers/binghatti.png" },
  { image: "assets/developers/emaar.png" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Developers = ({ developers = developersData }) => {
  return (
    <div className="developers-content">
      <div className="developers-overlay"></div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={100} // Adjust speed in milliseconds
        keyBoardControl={false}
        arrows={false}
        customTransition="transform 10000ms linear"
        transitionDuration={10000}
      >
        {developers.map((developer, index) => (
          <div key={index} className="carousel-item">
            <Image
              width={196}
              height={80}
              src={developer.image}
              alt="developer"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Developers;
