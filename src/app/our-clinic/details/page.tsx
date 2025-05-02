import React from "react";
import HeroSection from "./partials/HeroSection";
import AboutClinic from "./partials/AboutClinic";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ClinicServices from "./partials/ClinicService";
const page = async () => {
  const { data } = await getData(endpoints.service);

  return (
    <section>
      <HeroSection />
      <AboutClinic />
      {/* <ClinicServices data={data} /> */}
    </section>
  );
};

export default page;
