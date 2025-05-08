import React from "react";
import HeroSection from "./partials/HeroSection";
import Clinics from "./partials/Clinics";
import CallToActions from "./partials/CallToAction";
import { getData } from "@/api/axios";
import { createMetadata } from "@/hooks/generateMetaData";
import { endpoints } from "@/api/endpoints";
import { ISeoRoot } from "@/interface/seo.interface";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.clinic);
  const meta = createMetadata(data);
  return meta;
}
const ClincPage = () => {
  return (
    <div>
      <HeroSection />
      <Clinics />
      <CallToActions />
    </div>
  );
};

export default ClincPage;
