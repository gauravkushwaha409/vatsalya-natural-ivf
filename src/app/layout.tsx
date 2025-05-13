import Footer from "@/commons/Footer";
import Header from "@/commons/Header";
import BotPopup from "@/features/chatbot/BotPopup";
import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import { getHomePageData } from "./(home)/hook/hook.hook";
import "./globals.css";
import Providers from "./providers";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
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
      <body
        className={`${manRope.variable} ${inter.variable} ${plusJakarta.variable} ${roboto.variable} antialiased font-manrope bg-background-100 `}
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
              className="right-6 bottom-24 z-50 fixed size-[4.5rem]"
            />
          </Link>
          <BotPopup />
        </Providers>
      </body>
    </html>
  );
}
