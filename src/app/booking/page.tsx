import React from "react";
import HeroSection from "./partial/HeroSection";
import BookingSection from "./partial/BookingSection";
export const dynamic = "force-dynamic";

const BookingPage = () => {
  return (
    <section>
      <HeroSection />
      <BookingSection />
    </section>
  );
};

export default BookingPage;
