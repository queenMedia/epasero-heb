import React from "react";
import Image from "next/image";

const processData = [
  {
    image: "assets/meeting.jpg",
    title: "הצגה שקופה של כל הפרטים",
    description: "כל העלויות, התנאים, התשואות הצפויות - הכל על השולחן",
  },
  {
    image: "assets/couple-view.jpg",
    title: "ייעוץ ללא עלות",
    description: "פגישה אישית (זום או פרונטלי) להבנת המטרות וההעדפות שלכם",
  },
  {
    image: "assets/balcony.jpg",
    title: "בחירת פרויקטים מותאמים אישית",
    description: "מתוך התיק הבלעדי שלנו - נבחר 3-5 אפשרויות המתאימות בדיוק לכם",
  },
  {
    image: "assets/business-woman.jpg",
    title: "השקעה נוחה גם מרחוק",
    description:
      "ניתן להשלים את כל התהליך מרחוק, כולל חתימה באופן דיגיטלי ומאובטח.",
  },
  {
    image: "assets/signing.jpg",
    title: "ליווי אישי ללא עלות",
    description: "עורכי דין, תרגומים, אישורים - אנחנו מטפלים בהכל",
  },
  {
    image: "assets/aquire.jpg",
    title: "השלמת התהליך",
    description:
      "מהחתימה ועד המסירה – אנחנו מטפלים בכל הפרטים כדאי שתוכלו להיות רגועים.",
  },
];

const Process = ({ steps = processData }) => {
  return (
    <div className="process-content">
      <ul>
        {steps.map((step, index) => (
          <li key={index}>
            <div className="image">
              {" "}
              <Image fill src={step.image} alt={`process-image-${index}`} />
            </div>
            <strong>{step.title}</strong>
            <span>{step.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { processData };
export default Process;
