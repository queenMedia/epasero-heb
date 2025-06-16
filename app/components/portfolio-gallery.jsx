"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

const imageChangeInterval = 10_000;

export const PortfolioGallery = ({
  gallery = { top: [], left: [], bottom: [] },
  offset = 0,
}) => {
  const [currents, setCurrents] = useState({
    top: 0,
    left: 0,
    bottom: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      const interval1 =
        gallery.top.length > 1 &&
        setInterval(() => {
          setCurrents((prev) => ({
            ...prev,
            top: (prev.top + 1) % gallery.top.length,
          }));
        }, imageChangeInterval);
      return () => clearInterval(interval1);
    }, offset);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const interval2 =
        gallery.left.length > 1 &&
        setInterval(() => {
          setCurrents((prev) => ({
            ...prev,
            left: (prev.left + 1) % gallery.left.length,
          }));
        }, imageChangeInterval);
      return () => clearInterval(interval2);
    }, 4_000 + offset);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const interval3 =
        gallery.bottom.length > 1 &&
        setInterval(() => {
          setCurrents((prev) => ({
            ...prev,
            bottom: (prev.bottom + 1) % gallery.bottom.length,
          }));
        }, imageChangeInterval);
      return () => clearInterval(interval3);
    }, 8_000 + offset);
  }, []);

  return (
    <div className="portfolio-card-gallery">
      <div className="portfolio-card-item portfolio-card-item--top">
        {gallery.top.map((image, imgIndex) => (
          <Image
            key={`${imgIndex}-top`}
            alt="portfolio top image"
            fill
            src={image}
            className={`${imgIndex === currents.top ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="portfolio-card-item portfolio-card-item--left">
        {gallery.left.map((image, imgIndex) => (
          <Image
            key={`${imgIndex}-left`}
            alt="portfolio left image"
            fill
            src={image}
            className={`${imgIndex === currents.left ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="portfolio-card-item portfolio-card-item--bottom">
        {gallery.bottom.map((image, imgIndex) => (
          <Image
            key={`${imgIndex}-bottom`}
            alt="portfolio bottom image"
            fill
            src={image}
            className={`${imgIndex === currents.bottom ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};
