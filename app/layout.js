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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17078124366"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
        
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-17078124366');

        `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "sc9r7gn6pd");

          
          `,
          }}
        ></script>
      </head>

      <body className={`${heebo.variable} ${ptSerif.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
