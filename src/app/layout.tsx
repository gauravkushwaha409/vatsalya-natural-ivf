import Footer from "@/commons/Footer";
import Header from "@/commons/Header";
import type { Metadata } from "next";
import { Inter, Manrope, Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "swiper/css";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manRope.variable} ${inter.variable} ${plusJakarta.variable} ${roboto.variable} antialiased font-manrope bg-background-100 `}
      >
        <Header />
        <div className="">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  );
}
