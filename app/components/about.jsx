import React from "react";
import Image from "next/image";

const About = ({ items = aboutData }) => {
  return (
    <div className="about-content flex-row">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div className="icon">
              <Image width={25} height={25} src={item.icon} alt="" />
            </div>
            <div className="rtl-wrapper">
              <strong>{item.value}</strong>
              <strong>{item.label}</strong>
            </div>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <div className="about-image">
        <Image
          width={650}
          height={553}
          src="assets/dubai-view.jpg"
          alt="dubai-view"
        />
      </div>
    </div>
  );
};

const aboutData = [
  {
    icon: "assets/icons/about_pic1.svg",
    value: "הלקוח במרכז",
    label: "ולא המכירה",
    description:
      "אנו מתאימים את הנכס הנכון לפי צרכיו האישיים של כל לקוח, על מנת למצוא את ההשקעה המיטבית עבורך.",
  },
  {
    icon: "assets/icons/about_pic2.svg",
    value: "",
    label: "שירות ללא עלות",
    description: "כל התמיכה שצריך כדי לרכוש נכס בדובאי – ללא תשלום נוסף.",
  },
  {
    icon: "assets/icons/about_pic3.svg",
    value: "גישה לנכסים בלעדיים",
    label: "לפני כולם",
    description:
      "אנו עובדים עם היזמים הגדולים בדובאי, ומאפשרים ללקוחותינו גישה מוקדמת לנכסים נבחרים עוד לפני שהם מוצעים לציבור הרחב.",
  },
  {
    icon: "assets/icons/about_pic4.svg",
    value: "ליווי ישראלי אישי",
    label: "בדובאי ובארץ",
    description:
      "רלרשותך צוות מקצועי, דובר עברית, עם שלוחה בישראל וצוות מקומי בדובאי. ליווי מלא מהפגישה הראשונה ועד לניהול הנכס בפועל.",
  },
];

export { About, aboutData };
