"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export const FaqAccordion = ({ items = [] }) => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            איזה ליווי מקבלים מחברת אפסרו בתהליך ההשקעה בדובאי?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            באפסרו תקבלו ליווי אישי, מתחיל בייעוץ ראשוני, ממשיך בהתאמת פרויקטים
            להשקעה, דרך סיורים מקצועיים בדובאי, ניהול מו״מ מול יזמים, ליווי
            משפטי מלא, ותמיכה בכל האסטרטגייה עד להשלמת העסקה בצורה בטוחה.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            איך בדיוק מתבצע תהליך בחירת הנכס להשקעה?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            מתחילים בפגישת ייעוץ מותאמת אישית, מכינים רשימת פרויקטים מתוך מאגר
            איכות שקיבלנו בשטח. במידת הצורך מארגנים לכם סיור מקצועי בדובאי כדי
            לראות את הנכסים בעיניים, להעריך את הסביבה, ולהחליט בביטחון.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            האם אתם מארגנים עבורי את כל ההתקשרות מול הקבלן והגורמים המקומיים?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            כן – אנחנו תומכים בניהול תקשורת ומו״מ עם היזמים והקבלנים. דואגים
            לתנאים הטובים ביותר, לוחות תשלום מותאמים, והגנה מלאה על האינטרסים
            שלכם.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            האם הליווי נמשך גם אחרי קבלת המפתח?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            בהחלט. אפסרו מספקת ליווי לאחר רכישה כולל חיבור לחברות ניהול נכסים,
            ייעוץ להחזרת השקעה דרך השכרה או מכירה, וליווי שוטף כדי להבטיח תשואה
            מקסימלית.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            למה כדאי לי לבחור בליווי מקצועי ולא להשקיע לבד?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            בשוק בדובאי יש חוקים, תקנות שונים מהמקובל בארץ. אפסרו מבטיחה שהשקעה
            שלכם תהיה מבוססת, עם סינון של פרויקטים אמינים, מו״מ חכם והגנות
            חוקיות, כדי למנוע טעויות יקרות.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            במה אפסרו מתבלטת על פני חברות אחרות?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            אנחנו מדברים עברית, מובילים בתחום הנדל"ן, ליווי צמוד, מבינים לעומק
            את האתגרים והצרכים של משקיע ישראלי בדובאי, ויש לנו נוכחות פיזית בשטח
            מול היוזמים מה שנותן לכם גישה לחשיפה בלעדית.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            האם אתם עוזרים גם בבירוקרטיה: מסמכים, תשלומים, חתימות?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            כן. אפסרו דואגת להכל, אם צריך פתיחת חשבון נאמנות (Escrow), תשלומים
            בהתאם לחוק בדובאי, חתימות אלקטרוניות, תרגום ואימות מסמכים, הכל בצורה
            חלקה ובטוחה.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            מה קורה אם אני לא יכול להגיע פיזית לדובאי?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            גם אם לא נוח לכם להגיע לדובאי, עם אפסרו אפשר להמשיך מרחוק: הצגת
            נכסים בוידאו, חתימות דיגיטליות, עדכונים שוטפים ותיאום מלא עד השלמת
            העסקה, בלי להגיע פיזית לדובאי.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};
