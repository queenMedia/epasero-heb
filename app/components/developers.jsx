"use client";
import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const developersData = [
  { image: "assets/partners/1.png" },
  { image: "assets/partners/2.png" },
  { image: "assets/partners/3.png" },
  { image: "assets/partners/4.png" },
  { image: "assets/partners/5.png" },
  { image: "assets/partners/6.png" },
  { image: "assets/partners/7.png" },
  { image: "assets/partners/8.png" },
  { image: "assets/partners/9.png" },
  { image: "assets/partners/10.png" },
  { image: "assets/partners/11.png" },
  { image: "assets/partners/12.png" },
  { image: "assets/partners/13.png" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 568, min: 0 },
    items: 2,
  },
  // mobile: {
  //   breakpoint: { max: 464, min: 0 },
  //   items: 2,
  // },
};

const Developers = ({ developers = developersData }) => {
  return (
    <div className="developers-content">
      <div className="developers-overlay"></div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={50} // Adjust speed in milliseconds
        keyBoardControl={false}
        arrows={false}
        customTransition="transform 5000ms linear"
        transitionDuration={5000}
      >
        {developers.map((developer, index) => (
          <div key={index} className="carousel-item">
            <Image
              width={150}
              height={100}
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
