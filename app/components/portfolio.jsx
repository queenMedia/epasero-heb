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
        "https://epaserorealestate.com/cdn/prod/DAMAC_RIVERSIDE_VIEWS_hausandhaus_14_e6e69b2463_c9fea6cdaf.webp",
      ],
      bottom: [
        "https://epaserorealestate.com/cdn/prod/DAMAC_RIVERSIDE_VIEWS_hausandhaus13_f4fe349508_e0122132e9.webp",
      ],
      left: [
        "https://epaserorealestate.com/cdn/prod/DAMAC_RIVERSIDE_VIEWS_hausandhaus_2_6e1617b26b_2be8dd77d8.webp",
      ],
    },
    badges: [
      { text: "Apartment" },
      {
        text: "Damac Riverside Views",
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
      top: [
        "https://epaserorealestate.com/cdn/prod/Sobha_Solis_hausandhaus_10_9521ebfaac_1_1f3bd42d93.webp",
      ],
      bottom: [
        "https://epaserorealestate.com/cdn/prod/Sobha_Solis_hausandhaus_11_a585ab9626_1_867a7eb5c8.webp",
      ],
      left: [
        "https://epaserorealestate.com/cdn/prod/Sobha_Solis_hausandhaus_8_e3337a1aa0_1_249f844cf4.webp",
      ],
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
      top: [
        "https://epaserorealestate.com/cdn/prod/Seapoint_emaar_beachfront_haushaus_1_9fad9b0fd2_e2d6b1a12a.webp",
        // "assets/portfolio/oasis/top2.png",
      ],
      bottom: [
        "https://epaserorealestate.com/cdn/prod/Seapoint_emaar_beachfront_haushaus_4_14b68158bd_ff62aff187.webp",
      ],
      left: [
        "https://epaserorealestate.com/cdn/prod/Seapoint_emaar_beachfront_haushaus_1_9fad9b0fd2_e2d6b1a12a.webp",
      ],
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
