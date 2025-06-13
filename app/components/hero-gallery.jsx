import React from "react";
import Image from "next/image";

const items = [
  {
    text: {
      strong: "AED 1,000,000",
      name: "Sobha Solis",
    },
    image: "assets/jacauzzi.png",
  },
  {
    text: {
      strong: "AED 1,000,000",
      name: "Sobha Solis",
    },
    image: "assets/jacauzzi.png",
  },
  {
    text: {
      strong: "AED 1,000,000",
      name: "Sobha Solis",
    },
    image: "assets/jacauzzi.png",
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
    <div className="hero-gallery flex-row">
      {items.map((item, index) => (
        <HeroGalleryItem key={index} item={item} />
      ))}
    </div>
  );
};
