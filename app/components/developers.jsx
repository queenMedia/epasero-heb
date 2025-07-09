"use client";
import React from "react";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const developersData = [
  { image: "assets/partners/new-imgs/358.png" },
  { image: "assets/partners/new-imgs/union-properties-logo.png.webp" },
  { image: "assets/partners/new-imgs/118.png" },
  { image: "assets/partners/new-imgs/tiger-group-logo.png.webp" },
  { image: "assets/partners/new-imgs/sobha-realty-logo.png.webp" },
  { image: "assets/partners/new-imgs/select-group-logo.svg" },
  { image: "assets/partners/new-imgs/Samana.png" },
  { image: "assets/partners/new-imgs/Riviera-e1740061068284.png" },
  {
    image: "assets/partners/new-imgs/revolution.png",
  },
  { image: "assets/partners/new-imgs/logo_rak.png" },
  { image: "assets/partners/new-imgs/logo.png" },
  { image: "assets/partners/new-imgs/peacehome.webp" },
  { image: "assets/partners/new-imgs/pantheon-dev.png" },
  { image: "assets/partners/new-imgs/ORO24.png" },
  { image: "assets/partners/new-imgs/Omniyat-e1740061081561.png" },
  { image: "assets/partners/new-imgs/object-1-logo-black.png.webp" },
  { image: "assets/partners/new-imgs/nakheel-logo.svg" },
  { image: "assets/partners/new-imgs/Meraas1.svg" },
  { image: "assets/partners/new-imgs/252.webp" },
  { image: "assets/partners/new-imgs/mag-logo.svg" },
  { image: "assets/partners/new-imgs/cropped-LEOS-Logo.webp" },
  { image: "assets/partners/new-imgs/Imtiaz-logo.png.webp" },
  { image: "assets/partners/new-imgs/iman-developers.webp" },
  { image: "assets/partners/new-imgs/invest-group-overseas-logo.png" },
  { image: "assets/partners/new-imgs/Fakhruddin.webp" },
  { image: "assets/partners/new-imgs/Emaar_logo.svg" },
  { image: "assets/partners/new-imgs/ellington.svg" },
  { image: "assets/partners/new-imgs/8b651d5d4efeb6bb3859e307693edad5.jpg" },
  { image: "assets/partners/new-imgs/deyaar-logo.svg" },
  { image: "assets/partners/new-imgs/dar-logo.png" },
  { image: "assets/partners/new-imgs/Danube-Properties.svg" },
  { image: "assets/partners/new-imgs/damac-logo.svg" },
  { image: "assets/partners/new-imgs/Дизайн-без-названия.png" },
  { image: "assets/partners/new-imgs/images.png" },
  { image: "assets/partners/new-imgs/Binghatti-Logo.svg" },
  { image: "assets/partners/new-imgs/dev_img_185_beyond-logo.png" },
  { image: "assets/partners/new-imgs/1735912312552.jpeg" },
  { image: "assets/partners/new-imgs/arada-developer-logo.svg" },
  { image: "assets/partners/new-imgs/aqua-dubai.png" },
  {
    image:
      "assets/partners/new-imgs/a002a5_ebe0662c4bee43f38c267c6e60af2114mv2.png",
  },
  { image: "assets/partners/new-imgs/AlFuttaimlogoEn.png" },
  { image: "assets/partners/new-imgs/aldar-logo.svg" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 4,
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
              width={213}
              height={76}
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
