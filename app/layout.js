import localFont from "next/font/local";
import "modern-css-reset";
import "./globals.css";
import "./media.css";
import Providers from "./providers";

const heebo = localFont({
  src: [
    {
      path: "./fonts/Heebo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Heebo-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Heebo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-heebo",
});

const ptSerif = localFont({
  src: [
    {
      path: "./fonts/PTSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pt-serif",
});

export const metadata = {
  title: 'הדרך הבטוחה להשקעות נדל"ן בדובאי',
  description: `השקעת נדל״ן בדובאי עם תשואה של 15%–12% וללא עמלות – זה לא רק חכם, זה נכון`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="he">
      <head>
        <link
          rel="shortcut icon"
          href="/assets/icons/favicon.svg"
          type="image/x-icon"
        />
      </head>
      <body className={`${heebo.variable} ${ptSerif.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
