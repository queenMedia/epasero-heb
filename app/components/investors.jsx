import React from "react";
import Image from "next/image";
import { RatingStars } from "./rating-stars";

const investorsData = [
  {
    ratingIcon: "assets/icons/google.svg",
    name: "יוסי כהן",
    location: "תל אביב",
    image: "assets/investors/3.png",
    review:
      " חבר המליץ לי עליהם, וכבר מהשיחה הראשונה הרגשתי שאני בידיים טובות. הכול היה ברור ומסודר.",
  },
  {
    ratingIcon: "assets/icons/google.svg",
    name: "רחל לוי",
    location: "חיפה",
    image: "assets/investors/2.png",
    review:
      "לא תכננתי לרכוש, רק להבין את השוק – אבל הם הסבירו כל דבר בסבלנות והראו לי בדיוק מה מתאים לי. בסוף רכשתי נכס שכבר מניב תשואה יפה, הרבה מעל המצופה.",
  },
  {
    ratingIcon: "assets/icons/google.svg",
    name: "דוד מזרחי",
    location: "ירושלים",
    image: "assets/investors/1.png",
    review:
      "מדהים שאפשר לעשות הכול מהארץ. לא הייתי צריך לטוס אפילו פעם אחת. הליווי היה צמוד, גם בעברית, הם מקצועיים מאוד, אמליץ עליהם לחברים שרוצים להשקיע בדובאי.",
  },
];

const Investors = ({ investors = investorsData }) => {
  return (
    <div className="investors-content">
      <ul>
        {investors.map((investor, index) => (
          <li key={index}>
            <div className="investor-card">
              <div className="investor-card__face flex-row">
                <div className="investor-card-person flex-row">
                  <Image
                    width={56}
                    height={56}
                    src={investor.image}
                    alt="investor"
                  />
                  <div className="investor-card-person__name">
                    <strong>{investor.name}</strong>
                    <span>{investor.location}</span>
                  </div>
                </div>
                <div className="investor-card-rating">
                  <RatingStars />
                  <Image
                    width={20}
                    height={20}
                    src={investor.ratingIcon}
                    alt="rating icon"
                  />
                </div>
              </div>
              <div className="investor-card__separator"></div>
              <div className="investor-card__text">
                <p>{investor.review}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { investorsData };
export default Investors;
