/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "./page.module.css";
import { HeroGallery } from "./components/hero-gallery";

import { About } from "./components/about";
import Process from "./components/process";
import Portfolio from "./components/portfolio";
import Developers from "./components/developers";
import Metrics from "./components/metrics";
import { RatingStars } from "./components/rating-stars";
import Investors from "./components/investors";
import { ContactForm } from "./components/contactForm";

export default function Page() {
  return (
    <div className={styles.page}>
      <header>
        <video
          className="video-background"
          loop
          muted
          playsInline
          autoPlay
          // poster="assets/video-1-preview.png"
        >
          <source src="assets/hero-video.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="top-line">
          <div className="container">
            <div className="flex-row top-line-content">
              <Image
                width={134}
                height={45}
                src="assets/logo.png"
                alt="logo"
                className="logo"
              />
              <a href="">לשיחת ייעוץ</a>
            </div>
          </div>
        </div>
        <div className="hero-composition">
          <div className="hero-content">
            <h1>הדרך הבטוחה להשקעות נדל"ן בדובאי</h1>
            <p>
              השקעת נדל״ן בדובאי עם תשואה של 15%–12% וללא עמלות – זה לא רק חכם,
              זה נכון
            </p>
            <button>לתיאום פגישת ייעוץ ללא עלות</button>
          </div>
        </div>
        <HeroGallery />
      </header>
      <main>
        <div className="metrics">
          <div className="container">
            <Metrics />
          </div>
        </div>
        <section className="about accent">
          <div className="container">
            <h2>אודות החברה</h2>
            <p>
              אנחנו מציעים שירות מקצועי ומותאם אישית לכל לקוח, עם ניסיון רב בשוק
              הנדל"ן בדובאי
            </p>
            <div className="button-container">
              <button>לתיאום פגישת ייעוץ ללא עלות</button>
            </div>
            <About />
          </div>
        </section>
        <section className="process">
          <div className="container">
            <h2>התהליך שלנו - פשוט, שקוף, מאובטח</h2>
            <Process />
            <div className="button-container">
              <button>לתיאום פגישת ייעוץ ללא עלות</button>
            </div>
          </div>
        </section>
        <section className="developers">
          <div className="container">
            <h2>היזמים המובילים בדובאי</h2>
            <Developers />
          </div>
        </section>

        <section className="portfolio accent">
          <div className="container">
            <h2>דוגמאות לנכסים בתיק שלנו</h2>
            <p>
              יותר מ־20,000 דירות ווילות בלעדיות בדובאי, החל מ־100,000 ש"ח הון
              עצמי
            </p>
            <Portfolio />
          </div>
        </section>

        <section className="investors">
          <div className="container">
            <div className="rating-wrapper">
              <div className="rating">
                <Image
                  width={46}
                  height={46}
                  src="assets/icons/google.svg"
                  alt="google"
                />
                <div className="rating-info">
                  <strong>Google Rating</strong>
                  <div className="rating-accent">
                    <strong>4.8</strong>
                    <RatingStars />
                  </div>
                  <span>See all our reviews</span>
                </div>
              </div>
            </div>
            <h2>הצטרפו לאלפי משקיעים מרוצים</h2>
            <Investors />
          </div>
          <div className="investors-view">
            <div className="investors-view-composition">
              <h2>יותר ויותר ישראלים כבר גילו את הפוטנציאל בדובאי</h2>
              <p>
                שוק הנדל״ן בדובאי ממשיך לצמוח - עם תשואות מרשימות ויציבות לאורך
                זמן
              </p>
              <button>לתיאום פגישת ייעוץ ללא עלות</button>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <div className="logo-wrapper">
              <Image
                width={58}
                height={58}
                src="assets/icons/brid.svg"
                alt="logo"
              />
            </div>
            <h2>מוכנים להתחיל? בואו נתחיל לדבר</h2>
            <p>השאירו פרטים ונציג יחזור אליכם תוך פחות מ 24 שעות. </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer-statement">
              <Image
                width={250}
                height={96}
                src="assets/footer-logo.png"
                alt="footer-logo"
              />
              <ul className="footer-navigation">
                <li>צור קשר</li>
                <li>פרויקטים</li>
                <li>אודות</li>
                <li>דף הבית</li>
              </ul>
              <ul className="footer-flags">
                <li>
                  <Image
                    width={49}
                    height={49}
                    src="assets/icons/uae.svg"
                    alt="UAE Flag"
                  />
                  <span>United Arab Emirates</span>
                </li>
                <li>
                  <Image
                    width={49}
                    height={49}
                    src="assets/icons/isr.svg"
                    alt="ISR Flag"
                  />
                  <span>United Arab Emirates</span>
                </li>
              </ul>
              <p>השירות הישראלי המוביל להשקעות נדל״ן בדובאי ללא עמלות</p>
            </div>
            <div className="footer-contacts">
              <div className="footer-contacts__item">
                <h3>הסניפים שלנו</h3>
                <div className="address">
                  <p>משרד ישראל</p>
                  <p>תל אביב, הפרדס רמת גן</p>
                </div>
                <div className="address">
                  <p>משרד דובאי</p>
                  <p>Bore Office Tower, 26th Floor</p>
                  <p>Business Bay, Dubai</p>
                </div>
              </div>
              <div className="footer-contacts__item">
                <h3>שעות פעילות</h3>
                <p>ימים א'-ה': 18:00 - 09:00</p>
                <p>יום ו': 17:00- 09:00</p>
              </div>

              <div className="footer-contacts__item">
                <h3>פרטי התקשרות</h3>
                <ul>
                  <li>טלפון דובאי: 971 54 233 6409</li>
                  <li>דוא"ל: info@epasero.com</li>
                </ul>
                <p>נשמח לעמוד לשירותכם בכל שאלה או הבהרה.</p>
              </div>
            </div>
          </div>
          <div className="footer__links">
            <p>{"<"} עקבו אחרינו</p>
            <ul>
              <li>
                <a href="">
                  <Image
                    width={49}
                    height={49}
                    src="assets/icons/facebook.svg"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    width={49}
                    height={49}
                    src="assets/icons/instagram.svg"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    width={49}
                    height={49}
                    src="assets/icons/linkedin.svg"
                    alt="linkedin"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <Image
                    width={49}
                    height={49}
                    src="assets/icons/twitter.svg"
                    alt="twitter"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
