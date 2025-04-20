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
    <section className="relative bg-background-100">
      <div className="flex lg:flex-row flex-col gap-10 padding">
        <motion.div
          initial={{ x: isSmall ? "0%" : "20%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.3, delay: 2 }}
          className="w-full lg:w-2/3"
        >
          <YoutubeEmbed url={data?.service?.videoUrl} />
          <ServiceDescription data={data?.service} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: isSmall ? "0%" : "50%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1.5, delay: 2 }}
          className="top-4 sticky my-4 w-full lg:w-1/3 h-max lg:max-h-screen lg:overflow-y-auto lg:no-scrollbar"
        >
          <ServiceForm />
          <InfertilityTreatment data={data?.service} />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
