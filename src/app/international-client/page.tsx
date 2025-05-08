import React from "react";
import InternationalClients from "./partials/InternationalClients";
import HeroSection from "./partials/HeroSection";
import { getData } from "@/api/axios";
import { ISeoRoot } from "@/interface/seo.interface";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.international_patient);
  const meta = createMetadata(data);
  return meta;
}
const InternationalClientPage = () => {
  return (
    <section>
      <HeroSection />
      <InternationalClients />
    </section>
  );
};

export default InternationalClientPage;
