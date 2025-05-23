import Footer from "@/commons/Footer";
import Header from "@/commons/Header";
import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "swiper/css";
import { getHomePageData } from "./(home)/hook/hook.hook";
import "./globals.css";
import Providers from "./providers";
import { IoLogoWhatsapp } from "react-icons/io5";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
// });

// const plusJakarta = Plus_Jakarta_Sans({
//   variable: "--font-plus-jakarta-sans",
//   subsets: ["latin"],
//   weight: ["200", "300", "400", "500", "600", "700", "800"],
// });
const roboto = Roboto({
  variable: "--font-roboto",
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
  const { footerData } = await getHomePageData();

  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/noise.png" />
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
              gtag('config', 'G-N3MFB9XL1Y', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${manRope.variable} ${roboto.variable} antialiased font-manrope bg-background-100 `}
        // className={`${manRope.variable} ${inter.variable} ${plusJakarta.variable} ${roboto.variable} antialiased font-manrope bg-background-100 `}
      >
        <Providers>
          <Header />
          <div className="">{children}</div>
          <Footer />
          <Link href={`tel:${footerData?.data?.phoneNumber?.[0]}`}>
            <Image
              src="/phone.png"
              alt="phone"
              width={50}
              height={50}
              priority
              unoptimized
              className="right-6 bottom-24 z-50 fixed size-[4.5rem]"
            />
          </Link>
          <Link
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=${footerData?.data?.socialMedia?.whatsapp}`}
          >
            <IoLogoWhatsapp
              className="right-10 bottom-14 fixed text-green-500 z-50 "
              size={40}
            />
          </Link>
          {/* <BotPopup /> */}
        </Providers>
      </body>
    </html>
  );
}
