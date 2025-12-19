import Footer from "@/commons/Footer";
import Header from "@/commons/Header";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { IoLogoWhatsapp } from "react-icons/io5";
// import BotPopup from "./(chatbot)/BotPopup";
import { getHomePageData } from "./(home)/hook/hook.hook";
import "./globals.css";
import Providers from "./providers";
import FooterMenu from "@/commons/partials/FooterMenu";
import LenishProvider from "@/components/LenishWrapper";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vatsalya",
  description: "Vatsalya IVF is a leading fertility clinic in Nepal.",
  icons: {
    icon: [
      { url: "/static/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/static/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/static/apple-touch-icon.png",
  },
  manifest: "/static/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { footerData } = await getHomePageData();

  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="en" href="https://vatsalya.com.np/" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://vatsalya.com.np/"
        />
        <link rel="preload" as="image" href="/noise.png" />
        <link rel="preload" as="image" href="/noise.webp" />
        <link rel="preload" as="image" href="/phone.png" />
        <link rel="preload" as="image" href="/home/who-we-are-bg.webp" />
        <link
          rel="preload"
          as="image"
          href="/home/when-to-visit/whole-bg.webp"
        />
        <link
          rel="preload"
          as="image"
          href="/home/when-to-visit/three-lines.png"
        />
        <link rel="preload" as="image" href="/home/butterfly.gif" />
        {/* Google Analytics & Google Ads Tracking */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-N3MFB9XL1Y"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      // Google Analytics
      gtag('config', 'G-N3MFB9XL1Y', {
        page_path: window.location.pathname,
      });
      
      // Google Ads
      gtag('config', 'AW-16992141641');
    `,
          }}
        />

        {/* Facebook Pixel  */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '483838857893898');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=483838857893898&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${urbanist.variable}  antialiased font-urbanist bg-background-100 relative`}
        // className={`${manRope.variable} ${inter.variable} ${plusJakarta.variable} ${roboto.variable} antialiased font-manrope bg-background-100 `}
      >
        {/* this divs fills the white space when header is hidden */}
        <div className="top-0 -z-20 absolute inset-x-0 bg-primary-50 " />
        <Providers>
          <Header />
          <LenishProvider>
            <div className="max-w-app">{children}</div>
          </LenishProvider>
          <Footer />
          <FooterMenu />
          {/* 
          <Link
            className="hidden md:block"
            href={`tel:${footerData?.data?.phoneNumber?.[0]}`}
          >
            <Image
              src="/phone.png"
              alt="phone"
              width={50}
              height={50}
              priority
              unoptimized
              className="right-6 bottom-28 z-50 fixed size-[4.5rem]"
            />
          </Link>
          <Link
            className="hidden md:block"
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=977${footerData?.data?.socialMedia?.whatsapp}`}
          >
            <IoLogoWhatsapp className="right-10 bottom-18 z-50 fixed size-[2.5rem] text-green-500" />
          </Link> */}
          {/* <BotPopup /> */}
        </Providers>
      </body>
    </html>
  );
}
