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
      top: [
        "assets/portfolio/damac/top.png",
        "assets/portfolio/damac/top2.png",
      ],
      bottom: ["assets/portfolio/damac/bottom.png"],
      left: ["assets/portfolio/damac/left.png"],
    },
    badges: [
      { text: "Apartment" },
      {
        text: "Business Bay",
        icon: "assets/icons/geo.svg",
        iconWidth: 15,
        iconHeight: 11,
      },
    ],
    priceLabel: "מחיר החל מ",
    price: "AED 19,000,000",
    location: "Damac, Chelsea Residences",
    parameters: ["חדרי רחצה 3", "חדרים 5", "130m²"],
    buttonText: "לפרטים נוספים",
  },
  {
    tagColor: "red",
    tagText: "ביקוש גבוה",
    tagIcon: "assets/icons/fire.svg",
    tagIconWidth: 12,
    tagIconHeight: 15,
    gallery: {
      top: [
        "assets/portfolio/damac/top.png",
        "assets/portfolio/damac/top2.png",
      ],
      bottom: ["assets/portfolio/damac/bottom.png"],
      left: ["assets/portfolio/damac/left.png"],
    },
    badges: [
      { text: "Apartment" },
      {
        text: "Business Bay",
        icon: "assets/icons/geo.svg",
        iconWidth: 15,
        iconHeight: 11,
      },
    ],
    priceLabel: "מחיר החל מ",
    price: "AED 1,482,828",
    location: "Damac, Samana Parkville",
    parameters: ["חדרי רחצה 3", "חדרים 5", "130m²"],
    buttonText: "לפרטים נוספים",
  },
  {
    tagColor: "blue",
    tagText: "נותרו דירות בודדות",
    tagIcon: "assets/icons/diamond.svg",
    tagIconWidth: 13,
    tagIconHeight: 11,
    gallery: {
      top: [
        "assets/portfolio/damac/top.png",
        "assets/portfolio/damac/top2.png",
      ],
      bottom: ["assets/portfolio/damac/bottom.png"],
      left: ["assets/portfolio/damac/left.png"],
    },
    badges: [
      { text: "Apartment" },
      {
        text: "Business Bay",
        icon: "assets/icons/geo.svg",
        iconWidth: 15,
        iconHeight: 11,
      },
    ],
    priceLabel: "מחיר החל מ",
    price: "AED 1,300,000",
    location: "Damac, The Oasis",
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
                <ul className="portfolio-card-parameters flex-row">
                  {item.parameters.map((parameter, paramIndex) => (
                    <li key={paramIndex}>{parameter}</li>
                  ))}
                </ul>
                <button>{item.buttonText}</button>
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
