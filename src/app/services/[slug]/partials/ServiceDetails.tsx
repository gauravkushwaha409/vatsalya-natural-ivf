"use client";
import { useIsSmall } from "@/hooks/useMediaQuery";
import { motion } from "motion/react";
import React from "react";
import { IServiceDetailsData } from "../../interfaces/serviceDetails.interface";
import InfertilityTreatment from "./InfertilityTreatment";
import ServiceDescription from "./ServiceDescription";
import ServiceForm from "./ServiceForms";
import YoutubeEmbed from "./YoutubeVIdeoEmbbed";

interface IServiceDetails {
  data: IServiceDetailsData;
}
const ServiceDetails: React.FC<IServiceDetails> = ({ data }) => {
  const isSmall = useIsSmall();
  return (
    <section className="relative bg-background-100 mt-10 u-padding-x ">
      <div className="w-full rounded-[60px]">
        <YoutubeEmbed url={data?.service?.videoUrl} />
        <ServiceDescription data={data?.service} />
      </div>
    </section>
  );
};

export default ServiceDetails;
