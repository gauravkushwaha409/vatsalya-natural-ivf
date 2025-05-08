import React from "react";
import FAQHero from "./partials/FAQHero";
import Faq from "@/components/Faqs";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import { ISeoRoot } from "@/interface/seo.interface";
import { createMetadata } from "@/hooks/generateMetaData";
export const dynamic = "force-dynamic";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.faqs);
  const meta = createMetadata(data);
  return meta;
}
const FAQ = async () => {
  try {
    const data = await getData(endpoints.faq);
    return (
      <div className="bg-gradient-to-b from-primary-50 to-background-100 py-10 padding">
        <FAQHero />
        <Faq faq={data?.data?.records} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    <ErrorMessage />;
  }
};

export default FAQ;
