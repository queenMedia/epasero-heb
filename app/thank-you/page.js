import Image from "next/image";
import { Header } from "../components/header";
export const metadata = {
  title: "תודה על פנייתכם",
  description: `הפרטים שלכם התקבלו בהצלחה. נציג מטעמנו יצור איתכם קשר תוך 24 שעות
            לייעוץ אישי והצגת הזדמנויות השקעה מותאמות לצרכיכם הספציפיים בשוק
            הנדל"ן בדובאי.`,
};

export default function ThankYouPage() {
  return (
    <Header>
      <div className="hero-content">
        <div className="container">
          <h1 className="thank-you-title">תודה על פנייתכם</h1>
          <p className="info-text">
            הפרטים שלכם התקבלו בהצלחה. נציג מטעמנו יצור איתכם קשר תוך 24 שעות
            לייעוץ אישי והצגת הזדמנויות השקעה מותאמות לצרכיכם הספציפיים בשוק
            הנדל"ן בדובאי.
          </p>
          <div style={{ textAlign: "center" }}>
            {" "}
            <a href="/">
              {" "}
              <button>חזרה לדף הבית</button>
            </a>
          </div>
        </div>
      </div>
    </Header>
  );
}
