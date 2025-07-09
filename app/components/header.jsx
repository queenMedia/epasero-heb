import React from "react";
import Image from "next/image";

export const Header = ({ children, renderBottom = () => {} }) => {
  return (
    <header>
      <video
        className="video-background"
        loop
        muted
        playsInline
        autoPlay
        // poster="assets/video-1-preview.png"
      >
        <source src="assets/bg-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="top-line fixed">
        <div className="container">
          <div className="flex-row top-line-content">
            <a href="/#contact-form">
              <button> לשיחת ייעוץ</button>
            </a>
          </div>
        </div>
      </div>

      <div className="top-line">
        <div className="container">
          <div className="flex-row top-line-content">
            <Image
              width={250}
              height={125}
              src="assets/epasero_white.png"
              alt="logo"
              className="logo"
            />
          </div>
        </div>
      </div>

      <div className="hero-composition">{children}</div>
      {renderBottom()}
    </header>
  );
};
