import React from "react";
import HeroSection from "./partial/HeroSection";
import BookingSection from "./partial/BookingSection";
import { getData } from "@/api/axios";
import { ISeoRoot } from "@/interface/seo.interface";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
export const dynamic = "force-dynamic";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.consultation_booking);
  const meta = createMetadata(data);
  return meta;
}
const BookingPage = () => {
  return (
    <section>
      <HeroSection />
      <BookingSection />
    </section>
  );
};

export default BookingPage;
