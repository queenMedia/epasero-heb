"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const testimonials = [
  {
    name: "מיכל רוזנברג",
    time: "6 months ago",
    place: "תל אביב",
    text: "הצוות של אפסרו הציג לי הזדמנויות שפשוט לא ידעתי שקיימות. התשואה שלי בשנה האחרונה עמדה על 22% - משהו שלא חלמתי עליו בישראל. הם לא רק מוכרים נכסים, הם בונים עתיד פיננסי.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJAwbwXJkEH8uASNtLEw2vL_qJV9_XhQ5lQ52aGAcB6nXT4s88=s56-c0x00000000-cc-rp-mo",
  },
  {
    name: "יוסי כהן",
    time: "6 months ago",
    place: "תל אביב",
    text: "חבר המליץ לי עליהם, וכבר מהשיחה הראשונה הרגשתי שאני בידיים טובות. הכול היה ברור ומסודר.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJAwbwXJkEH8uASNtLEw2vL_qJV9_XhQ5lQ52aGAcB6nXT4s88=s56-c0x00000000-cc-rp-mo",
  },
  {
    name: "רחל לוי",
    place: "חיפה",
    text: "לא תכננתי לרכוש, רק להבין את השוק – אבל הם הסבירו כל דבר בסבלנות והראו לי בדיוק מה מתאים לי. בסוף רכשתי נכס שכבר מניב תשואה יפה, הרבה מעל המצופה.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJAwbwXJkEH8uASNtLEw2vL_qJV9_XhQ5lQ52aGAcB6nXT4s88=s56-c0x00000000-cc-rp-mo",
  },
  {
    name: "אבי גרין",
    place: "רמת השרון",
    text: "הכי פחדתי מההיבטים המשפטיים והבירוקרטיה בדובאי. הצוות של אפסרו הדריך אותי בכל שלב - מפתיחת חשבון הנאמנות ועד החתימה הדיגיטלית. הם טיפלו בכל הניירת הזרה ותרגמו לי הכל לעברית. היום אני כבר בבעלות מלאה של הדירה ומקבל השכרה חודשית של 6,800 שקל!",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJAwbwXJkEH8uASNtLEw2vL_qJV9_XhQ5lQ52aGAcB6nXT4s88=s56-c0x00000000-cc-rp-mo",
  },
  {
    name: "נורית אביטל",
    place: "כפר סבא",
    text: "השאלה הגדולה שלי הייתה איך אני אנהל נכס מרחוק. התשובה הגיעה מהשירות של אפסרו - הם מוצאים לי שוכרים איכותיים, מטפלים בתחזוקה, ואני פשוט מקבל העברה חודשית לחשבון. בשנתיים האחרונות לא היה לי יום אחד ריק! התשואה השוטפת שלי 14% בלי כאב ראש.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJAwbwXJkEH8uASNtLEw2vL_qJV9_XhQ5lQ52aGAcB6nXT4s88=s56-c0x00000000-cc-rp-mo",
  },
];

const Testimonial = ({ testimonial: { name, place, text, avatar } }) => {
  "use client";

  return (
    <div className="grw-review">
      <div className="grw-review-inner grw-backgnd grw-round">
        <div className="wp-google-left">
          <img
            decoding="async"
            src={avatar}
            className="grw-review-avatar perfmatters-lazy entered pmloaded"
            alt=""
            width="50"
            height="50"
            data-ll-status="loaded"
          />
          <noscript>
            <img
              loading="lazy"
              decoding="async"
              src={avatar}
              className="grw-review-avatar"
              alt=""
              width="50"
              height="50"
            />
          </noscript>
          <a
            href="https://www.google.com/maps/contrib/114813771223825963194/reviews"
            className="wp-google-name"
            target="_blank"
            rel="nofollow noopener"
            aria-label="Google user profile"
          >
            {name}
          </a>
          <div className="wp-google-time" data-time="1736184192">
            {place}
          </div>
        </div>
        <div className="wp-google-stars">
          <span className="wp-stars">
            <span className="wp-star">
              <svg width="17" height="17" viewBox="0 0 1792 1792" role="none">
                <path
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                  fill="#fb8e28"
                ></path>
              </svg>
            </span>
            <span className="wp-star">
              <svg width="17" height="17" viewBox="0 0 1792 1792" role="none">
                <path
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                  fill="#fb8e28"
                ></path>
              </svg>
            </span>
            <span className="wp-star">
              <svg width="17" height="17" viewBox="0 0 1792 1792" role="none">
                <path
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                  fill="#fb8e28"
                ></path>
              </svg>
            </span>
            <span className="wp-star">
              <svg width="17" height="17" viewBox="0 0 1792 1792" role="none">
                <path
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                  fill="#fb8e28"
                ></path>
              </svg>
            </span>
            <span className="wp-star">
              <svg width="17" height="17" viewBox="0 0 1792 1792" role="none">
                <path
                  d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                  fill="#fb8e28"
                ></path>
              </svg>
            </span>
          </span>
        </div>
        <div>
          <div className="wp-google-feedback">
            <span className="wp-google-text" tabIndex="0">
              {text}
            </span>
          </div>
        </div>
        <svg viewBox="0 0 512 512" height="18" width="18" role="none">
          <g fill="none" fillRule="evenodd">
            <path
              d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46z"
              fill="#4285f4"
            ></path>
            <path
              d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15c38.83 77.13 118.64 130.01 210.9 130.01z"
              fill="#34a853"
            ></path>
            <path
              d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84V150.01H45.1C29.12 181.87 20 217.92 20 256c0 38.08 9.12 74.13 25.1 105.99l78.85-61.15z"
              fill="#fbbc05"
            ></path>
            <path
              d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20c-92.25 0-172.07 52.89-210.9 130.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3z"
              fill="#ea4335"
            ></path>
            <path d="M20 20h472v472H20V20z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export const Testimonials = ({ items = testimonials }) => {
  "use client";

  return (
    <div className="source">
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-a6d638a elementor-widget__width-inherit bold elementor-widget elementor-widget-heading"
          data-id="a6d638a"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default">
              הביקורות שלכם
            </h2>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-6463ab1 elementor-widget elementor-widget-shortcode"
          data-id="6463ab1"
          data-element_type="widget"
          data-widget_type="shortcode.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-shortcode">
              <div
                className="wp-gr wpac"
                data-id="2433"
                data-layout="slider"
                data-exec="true"
                data-options='{"text_size":"","trans":{"read more":"\u05e7\u05e8\u05d0\u05d5 \u05e2\u05d5\u05d3"}}'
              >
                <div
                  className="grw-row grw-row-m"
                  data-count="21"
                  data-offset="21"
                  data-options='{"speed":3,"autoplay":"","mousestop":"","breakpoints":""}'
                >
                  <div className="grw-content">
                    <div className="grw-content-inner">
                      {/* <div className="grw-btns grw-prev" tabIndex="0">
                        <svg viewBox="0 0 24 24" role="none">
                          <path d="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z"></path>
                        </svg>
                      </div> */}
                      <div className="grw-reviews">
                        {/* <Carousel responsive={responsive} infinite={true}> */}
                        {items.map((testimonial, index) => (
                          <Testimonial
                            key={`testi-${index}`}
                            testimonial={testimonial}
                          />
                        ))}
                        {/* </Carousel> */}
                      </div>

                      {/* <div className="grw-btns grw-next" tabIndex="0">
                        <svg viewBox="0 0 24 24" role="none">
                          <path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"></path>
                        </svg>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
