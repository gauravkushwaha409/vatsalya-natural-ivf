import React from "react";
import FAQAccordion from "./partials/FAQAccordion";
import FAQHero from "./partials/FAQHero";

const FAQ = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-background-100 py-10">
      <FAQHero />
      <FAQAccordion />
    </div>
  );
};

export default FAQ;
