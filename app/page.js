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
          <source src="assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="top-line">
          <div className="container">
            <div className="flex-row top-line-content">
              <Image
                width={160.8}
                height={54}
                src="assets/logo.png"
                alt="logo"
                className="logo"
              />
              <a href="#contact-form">
                <button> לשיחת ייעוץ</button>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-composition">
          <div className="hero-content">
            <h1>הדרך הבטוחה להשקעות נדל"ן בדובאי</h1>
            {/* <h1 className="desk-mob">הדרך הבטוחה להשקעות נדל"ן בדובאי</h1> */}
            <p>השקעות נדל״ן בדובאי עם תשואה של 15%–12% וללא עמלות</p>
            <a href="#contact-form">
              {" "}
              <button>לתיאום פגישת ייעוץ ללא עלות</button>
            </a>
            <p style={{ marginBottom: 0 }}>זה לא רק חכם, זה נכון</p>
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
        <section className="about accent" id="about">
          <div className="container">
            <h2>אודות החברה</h2>
            <p>
              אנו מציעים שירות מקצועי ומותאם אישית לכל לקוח, עם ניסיון רב של
              למעלה מ -8 שנים בשוק הנדל”ן בדובאי
            </p>
            <div className="button-container desk-only">
              <a href="#contact-form">
                {" "}
                <button>לתיאום פגישת ייעוץ ללא עלות</button>
              </a>
            </div>
            <About />
          </div>
        </section>
        <section className="process">
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
        </section>
        <section className="developers">
          <div className="container">
            <h2>היזמים המובילים בדובאי</h2>
            <Developers />
          </div>
        </section>

        <section className="portfolio accent" id="portfolio">
          <div className="container">
            <h2>דוגמאות לנכסים בלעדיים שלנו</h2>
            <p>
              יותר מ־20,000 דירות ווילות בלעדיות בדובאי, החל מ־150,000 ש"ח הון
              עצמי
            </p>
            <Portfolio />
          </div>
        </section>

        <section className="investors accent">
          <div className="container">
            <h2>הצטרפו לאלפי משקיעים מרוצים</h2>
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
                  <div className="rating-accent flex-row">
                    <RatingStars />
                    <strong>4.8</strong>
                  </div>
                  <span>See all our reviews</span>
                </div>
              </div>
            </div>
            <Investors />
          </div>
          <div className="investors-view">
            <video
              className="video-background"
              loop
              muted
              playsInline
              autoPlay
              // poster="assets/video-1-preview.png"
            >
              <source src="assets/skyline-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="investors-view-composition">
              <h2>יותר ויותר ישראלים כבר גילו את הפוטנציאל בדובאי</h2>
              <p>
                שוק הנדל״ן בדובאי ממשיך לצמוח - עם תשואות מרשימות ויציבות לאורך
                זמן
              </p>
              <a href="#contact-form">
                <button>לתיאום פגישת ייעוץ ללא עלות</button>
              </a>
            </div>
          </div>
        </section>

        <section id="contact-form" className="contact accent">
          <div className="container">
            <div className="logo-wrapper">
              <Image
                width={58}
                height={58}
                src="assets/icons/bird.svg"
                alt="logo"
              />
            </div>
            <h2>מוכנים להתחיל? בואו נתחיל לדבר</h2>
            <p>השאירו פרטים ומומחה נדל”ן יחזור אליכם תוך פחות מ-24 שעות</p>
            <ContactForm />
          </div>
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
                    <span>טלפון דובאי:</span>{" "}
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
                    <a href="mailto:info@epaserorealestate.com">
                      info@epaserorealestate.com
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
                    <strong>משרד ישראל</strong>
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
                    <strong>משרד דובאי</strong>
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
                width={250}
                height={96}
                src="assets/footer-logo.png"
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
            <p> עקבו אחרינו {"<"}</p>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552">
          <defs>
            <linearGradient
              id="b"
              x1="85.915"
              x2="86.535"
              y1="32.567"
              y2="137.092"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#57d163"></stop>
              <stop offset="1" stopColor="#23b33a"></stop>
            </linearGradient>
            <filter
              id="a"
              width="1.115"
              height="1.114"
              x="-.057"
              y="-.057"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="3.531"></feGaussianBlur>
            </filter>
          </defs>
          <path
            fill="#b3b3b3"
            d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
            filter="url(#a)"
          ></path>
          <path
            fill="#fff"
            d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
          ></path>
          <path
            fill="url(#linearGradient1780)"
            d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
          ></path>
          <path
            fill="url(#b)"
            d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
          ></path>
        </svg>
      </a>
    </div>
  );
}
