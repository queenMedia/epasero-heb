import React from "react";
import Image from "next/image";

const items = [
  {
    text: {
      strong: "AED 1,000,000",
      name: "Ellington PIC",
    },
    image:
      "https://epaserorealestate.com/cdn/prod/One_River_Point_hausandhaus_7_21528380dc_9c036dbe32.webp",
  },
  {
    text: {
      strong: "AED 1,000,000",
      name: "Emaar Properties ",
    },
    image:
      "https://epaserorealestate.com/cdn/prod/altus_dch_hausandhaus_7_389e464b9f_1_1bce080df5.webp",
  },
  {
    text: {
      strong: "AED 1,000,000",
      name: "Sobha",
    },
    image:
      "https://epaserorealestate.com/cdn/prod/Sobha_Elwood_Clubhouse_4_139e71fec0_4f3a77992e.webp",
  },
];

const HeroGalleryItem = ({ item }) => {
  if (!item.text || !item.image) return null;
  return (
    <div className="hero-gallery_item flex-row">
      <div className="hero-gallery-text">
        <strong>{item.text.strong}</strong>
        <span>{item.text.name}</span>
      </div>
      <div className="hero-gallery-image">
        <Image
          width={111}
          height={84}
          className="hero-gallery-image"
          src={item.image}
          alt=""
        />
      </div>
    </div>
  );
};

export const HeroGallery = () => {
  return (
    <div className="hero-gallery-cotnainer">
      <div className="hero-gallery flex-row">
        {items.map((item, index) => (
          <HeroGalleryItem key={index} item={item} />
        ))}
      </div>
      <div className="subtle-arrow">
        <span></span>
        <span></span>
        {/* <span></span> */}
      </div>
      <div className="subtle-arrow right">
        <span></span>
        <span></span>
        {/* <span></span> */}
      </div>
    </div>
  );
};
