import React from "react";
import FAQHero from "./partials/FAQHero";
import Faq from "@/components/Faqs";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

const FAQ = async () => {
  const data = await getData(endpoints.faq);
  return (
    <div className="bg-gradient-to-b from-primary-50 to-background-100 py-10 padding">
      <FAQHero />
      <Faq faq={data?.data?.records} />
    </div>
  );
};

export default FAQ;
