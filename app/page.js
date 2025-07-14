/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";
import { HeroGallery } from "./components/hero-gallery";
import { Suspense } from "react";

import { About } from "./components/about";
import Process from "./components/process";
import Portfolio from "./components/portfolio";
import Developers from "./components/developers";
import Metrics from "./components/metrics";
// import { RatingStars } from "./components/rating-stars";
// import Investors from "./components/investors";
import { ContactForm } from "./components/contactForm";
import { WhatsappBtn } from "./components/elements/whatsappBtn";
import { ContactFormLinks } from "./components/elements/contactFormLinks";

import { Header } from "./components/header";
import { FaqAccordion } from "./components/faq";
import { WhyInvest } from "./components/why-invest";
import { Reason } from "./components/reason";
import { Testimonials } from "./components/testimonials";
import { MobMenu } from "./components/mob-menu";
import { Newsletter } from "./components/newsletter";

export default function Page() {
  return (
    <>
      <MobMenu />
      <div id="home" className={styles.homePage}>
        <Header renderBottom={() => <HeroGallery />}>
          <div className="hero-content">
            <h1>
              הדרך הבטוחה להשקעות
              <br />
              <span className="accent-text">נדל"ן בדובאי</span>
            </h1>
            <p>השקעות נדל״ן בדובאי עם תשואה של 15%–12% וללא עמלות</p>
            <a href="#contact-form">
              {" "}
              <button>לתיאום פגישת ייעוץ ללא עלות</button>
            </a>
          </div>
        </Header>
        <main>
          <div className="metrics">
            <div className="container">
              <Metrics />
            </div>
          </div>
          <section className="about accent" id="about">
            <div className="container">
              <h2>אודות החברה</h2>
              <p>
                אפסרו נדל"ן מציעה שירות מקצועי ומותאם אישית לכל לקוח, עם ניסיון
                של למעלה מ־8 שנים בשוק הנדל"ן בדובאי.
              </p>
              <About />
              <div className="button-container desk-only">
                <a href="#contact-form">
                  {" "}
                  <button>לתיאום פגישת ייעוץ ללא עלות</button>
                </a>
              </div>
            </div>
          </section>
          {/* <section className="process">
          <div className="container">
            <h2>התהליך שלנו פשוט, שקוף, ובטוח</h2>
            <Process />
            <div className="button-container">
              <a href="#contact-form">
                {" "}
                <button>לתיאום פגישת ייעוץ ללא עלות</button>
              </a>
            </div>
          </div>
        </section> */}
          <section className="about " id="why-invest">
            <div className="container">
              <h2>למה להשקיע בנדל״ן בדובאי?</h2>
              <WhyInvest />
            </div>
          </section>
          <section className="reason" id="reason">
            <div className="container">
              <h2>מה הופך את אפסרו לבחירה המובילה עבור משקיעים ישראלים</h2>
              <p>
                {" "}
                אפסרו היא חברת נדל"ן המתמקמת בדובאי עם צוות ישראלי שחי ונושם את
                השוק. הנוכחות הפיזית שלנו בשטח מבטיחה לכם גישה לפרויקטים ותנאים
                שמשקיעים עצמאיים פשוט לא יכולים להשיג לבד.
              </p>
              <Reason />
            </div>
          </section>
          <section className="testimonials" id="testimonials">
            <div className="container">
              <Testimonials />
            </div>
          </section>
          <section className="developers" id="developers">
            <div className="container">
              <h2>היזמים המובילים בדובאי</h2>
            </div>
            <Developers />
          </section>

          <section className="portfolio accent" id="portfolio">
            <div className="container">
              <h2>הפרויקטים המובילים לשנת 2025</h2>
              <p>
                יותר מ־20,000 דירות ווילות בלעדיות בדובאי, החל מ־150,000 ש"ח הון
                עצמי
              </p>
              <Portfolio />
            </div>
          </section>

          <section id="faq-form" className="faq accent">
            <div className="container">
              <div className="faq-wrapper">
                <div className="faq-wrapper__text">
                  <h2>שאלות נפוצות</h2>
                  <p>
                    אספנו לכם את השאלות הכי נפוצות, וגם אלו שפחות, כדי שתבינו
                    כמה שיותר על דובאי לפני הצעד הכלכלי המשמעותי הזה
                  </p>
                  <p>
                    <strong>לא מצאתם תשובה? דברו איתנו:</strong>
                  </p>
                  <WhatsappBtn className={"vex"} />
                </div>
                <div className="faq-wrapper__qa">
                  <Suspense fallback={<div>Loading...</div>}>
                    <FaqAccordion />
                  </Suspense>
                </div>
              </div>
            </div>
          </section>

          <section id="contact-form" className="contact accent">
            <div className="container">
              <div className="form-wrapper flex-row">
                <div className="form-wrapper__text">
                  <h2>יצירת קשר</h2>
                  <p>
                    <strong>
                      חושבים להשקיע בנדל״ן בדובאי? באפסרו – זה הרבה יותר פשוט,
                      בטוח ומשתלם.
                    </strong>
                  </p>
                  <p>
                    אנחנו לא עוד משרד תיווך – אפסרו היא חברת נדל״ן עם צוות
                    ישראלי שחי ופועל בדובאי, ומביאה לכם גישה בלעדית להזדמנויות
                    שנמצאות בתוך השוק – לא מחוצה לו.
                  </p>
                  <p>
                    עם נוכחות מקומית, ניסיון מוכח, וליווי אישי מ־א׳ ועד ת׳ –
                    תהיו בטוחים שאתם בידיים הנכונות. אם אתם מחפשים תשואה גבוהה,
                    השקעה חכמה או דירה בדובאי לעצמכם – זה הזמן להצטרף למאות
                    ישראלים שכבר עשו את זה דרך אפסרו.
                  </p>

                  <p>אפסרו. הנדל״ן של דובאי – בגישה ישראלית.</p>

                  <WhatsappBtn className={"desk"} />

                  <ContactFormLinks className={"desk"} />
                </div>
                <div className="form-wrapper__form">
                  <h3>כתבו לנו</h3>
                  <ContactForm />
                </div>
                <WhatsappBtn className={"mob"} />
                <ContactFormLinks className={"mob"} />
              </div>
            </div>
          </section>
          <section className="newsletter" id="newsletter">
            <Newsletter />
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            <div className="footer__top flex-row">
              <div className="footer-contacts flex-row">
                <div className="footer-contacts__item">
                  <h3>פרטי התקשרות</h3>
                  <ul>
                    <li>
                      {" "}
                      <span>טלפון :</span>{" "}
                      <a href="tel:+971542336409" style={{ direction: "ltr" }}>
                        <span
                          style={{ direction: "ltr", unicodeBidi: "isolate" }}
                        >
                          +971 54 233 6409
                        </span>
                      </a>
                    </li>
                    <li>
                      דוא"ל:{" "}
                      <a href="mailto:Sales@epaserorealestate.com">
                        Sales@epaserorealestate.com
                      </a>
                    </li>
                  </ul>
                  <p> נציגנו ישמחו לעמוד לרשותכם בכל שאלה</p>
                </div>
                <div className="footer-contacts__item">
                  <h3>שעות פעילות</h3>
                  <p>ימים א'-ה': 18:00 - 09:00</p>
                  <p>יום ו': 17:00- 09:00</p>
                  <p>יום שבת: סגור</p>
                </div>
                <div className="footer-contacts__item">
                  <h3>הסניפים שלנו</h3>
                  <div className="address">
                    <p>
                      <strong>משרדי ישראל</strong>
                    </p>
                    <p>
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/Menachem+Begin+St+11,+Bnei+Brak,+Israel/@32.0928806,34.8252292,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4a2895653fc1:0xc4c881c9b4a39dc0!8m2!3d32.0928761!4d34.8278041?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
                      >
                        מנחם בגין 11, רמת גן
                      </a>
                    </p>
                  </div>
                  <div className="address">
                    <p>
                      <strong>משרדי דובאי</strong>
                    </p>

                    <p>
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/search/+U+-+Bora+Office+Tower,+Office+2601,+Business+Bay,+Dubai,+UAE/@25.1794349,55.2698715,15.75z?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
                      >
                        U - Bora Office Tower, Office 2601, Business Bay, Dubai,
                        UAE
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-statement">
                <Image
                  width={276}
                  height={138}
                  src="assets/epasero_white.png"
                  alt="footer-logo"
                />
                <ul className="footer-navigation flex-row">
                  <li>
                    <a href="#contact-form">צור קשר</a>
                  </li>
                  <li>
                    <a href="#portfolio">פרויקטים</a>
                  </li>
                  <li>
                    <a href="#about">אודות</a>
                  </li>
                  <li>
                    <a href="/">דף הבית</a>
                  </li>
                </ul>
                <ul className="footer-flags flex-row">
                  <li>
                    <span>מדינת ישראל</span>
                    <Image
                      width={24}
                      height={18}
                      src="assets/icons/isr.svg"
                      alt="ISR Flag"
                    />
                  </li>
                  <li>
                    <span>דובאי</span>
                    <Image
                      width={24}
                      height={18}
                      src="assets/icons/uae.svg"
                      alt="UAE Flag"
                    />
                  </li>
                </ul>
                <p>השירות הישראלי המוביל להשקעות נדל״ן בדובאי </p>
              </div>
            </div>
            <div className="footer__links">
              <p>עקבו אחרינו</p>
              <ul className="flex-row">
                <li>
                  <a href="https://www.facebook.com/epaseroIL">
                    <Image
                      width={49}
                      height={49}
                      src="assets/icons/facebook.svg"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/epasero_il">
                    <Image
                      width={49}
                      height={49}
                      src="assets/icons/instagram.svg"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/epasero-group/">
                    <Image
                      width={49}
                      height={49}
                      src="assets/icons/linkedin.svg"
                      alt="linkedin"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://wa.link/6pr94z">
                    <Image
                      width={49}
                      height={49}
                      src="assets/icons/whatsapp.svg"
                      alt="whatsapp"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <a
          href="https://wa.link/6pr94z"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Contact us via WhatsApp"
          className="whatsappBtn"
        >
          <Image
            width={38}
            height={38}
            src="assets/WhatsappIcon.svg"
            className="attachment-large size-large wp-image-2165 perfmatters-lazy entered pmloaded"
            alt=""
          />
        </a>
      </div>
    </>
  );
}
