import React from "react";
import Image from "next/image";
import { PortfolioGallery } from "./portfolio-gallery";
const portfolioData = [
  {
    tagColor: "green",
    tagText: "מיקום אסטרטגי",
    tagIcon: "assets/icons/heart.svg",
    tagIconWidth: 11,
    tagIconHeight: 11,
    gallery: {
      top: ["assets/portfolio/new/13.jpg"],
      bottom: ["assets/portfolio/new/11.jpg"],
      left: ["assets/portfolio/new/12.jpg"],
    },
    badges: [
      { text: "Apartment" },
      {
        text: "Damac Riverside",
        icon: "assets/icons/geo.svg",
        iconWidth: 15,
        iconHeight: 11,
      },
    ],
    priceLabel: "מחיר החל מ",
    price: "AED 880,000",
    location: "Dubai Investment Park 2",
    parameters: ["חדרי רחצה 3", "חדרים 5", "130m²"],
    buttonText: "לפרטים נוספים",
  },
  {
    tagColor: "blue",
    tagText: "ביקוש גבוה",
    tagIcon: "assets/icons/diamond.svg",
    tagIconWidth: 12,
    tagIconHeight: 15,
    gallery: {
      top: ["assets/portfolio/new/23.jpg"],
      bottom: ["assets/portfolio/new/21.jpg"],
      left: ["assets/portfolio/new/22.webp"],
    },
    badges: [
      { text: "Apartment" },
      {
        text: "Sobha Solis",
        icon: "assets/icons/geo.svg",
        iconWidth: 15,
        iconHeight: 11,
      },
    ],
    priceLabel: "מחיר החל מ",
    price: "AED 1,000,000",
    location: "Dubai Motor City",
    parameters: ["חדרי רחצה 3", "חדרים 5", "130m²"],
    buttonText: "לפרטים נוספים",
  },
  {
    tagColor: "red",
    tagText: "נותרו דירות בודדות",
    tagIcon: "assets/icons/fire.svg",

    tagIconWidth: 13,
    tagIconHeight: 11,
    gallery: {
      top: ["assets/portfolio/new/33.jpg"],
      bottom: ["assets/portfolio/new/31.jpg"],
      left: ["assets/portfolio/new/32.jpg"],
    },
    badges: [
      { text: "Apartment" },
      {
        text: "Emaar Beachfront",
        icon: "assets/icons/geo.svg",
        iconWidth: 15,
        iconHeight: 11,
      },
    ],
    priceLabel: "מחיר החל מ",
    price: "AED 3,200,000",
    location: "Seapoint",
    parameters: ["חדרי רחצה 3", "חדרים 5", "130m²"],
    buttonText: "לפרטים נוספים",
  },
];

const Portfolio = ({ items = portfolioData }) => {
  return (
    <div className="portfolio-content">
      <ul className="flex-row">
        {items.map((item, index) => (
          <li key={index}>
            <div className="portfolio-card">
              <div className={`card-tag card-tag--${item.tagColor}`}>
                <span>{item.tagText}</span>
                <Image
                  width={item.tagIconWidth}
                  height={item.tagIconHeight}
                  src={item.tagIcon}
                  alt="tag icon"
                />
              </div>
              <PortfolioGallery
                gallery={item.gallery}
                offset={1000 * (index + 1)}
              />
              <div className="portfolio-card-info">
                <ul className="badges flex-row">
                  {item.badges.map((badge, badgeIndex) => (
                    <li key={badgeIndex} className="badge">
                      {badge.icon && (
                        <Image
                          width={badge.iconWidth}
                          height={badge.iconHeight}
                          src={badge.icon}
                          alt="badge icon"
                        />
                      )}
                      {badge.text}
                    </li>
                  ))}
                </ul>
                <div className="portfolio-card-title">
                  <span>{item.priceLabel}</span>
                  <strong>{item.price}</strong>
                </div>
                <div className="portfolio-card-location">{item.location}</div>
                {/* <ul className="portfolio-card-parameters flex-row">
                  {item.parameters.map((parameter, paramIndex) => (
                    <li key={paramIndex}>{parameter}</li>
                  ))}
                </ul> */}
                <a href="#contact-form" style={{ display: "inline-block" }}>
                  {" "}
                  <button style={{ width: "100%" }}>{item.buttonText}</button>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { portfolioData };
export default Portfolio;
