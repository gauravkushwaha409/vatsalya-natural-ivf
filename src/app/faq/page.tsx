import React from "react";
import FAQHero from "./partials/FAQHero";
import Faq from "@/components/Faqs";
import faqData from "@/data/faqsData";

const FAQ = () => {
  return (
    <div className="bg-gradient-to-b from-primary-50 to-background-100 py-10 padding">
      <FAQHero />
      <Faq faq={faqData} />
    </div>
  );
};

export default FAQ;
