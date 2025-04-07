"use client";
import React from "react";
import YoutubeEmbed from "./YoutubeVIdeoEmbbed";
import ServiceDescription from "./ServiceDescription";
import ServiceForm from "./ServiceForms";
import { motion } from "motion/react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IServiceDetailsData } from "../../interfaces/serviceDetails.interface";

interface IServiceDetails {
  data: IServiceDetailsData;
}
const ServiceDetails: React.FC<IServiceDetails> = ({ data }) => {
  const isSmall = useMediaQuery("(width <= 40rem)");
  return (
    <section className="bg-background-100 overflow-hidden relative">
      <div className="flex flex-col lg:flex-row gap-10 padding ">
        <motion.div
          initial={{ x: isSmall ? "0%" : "20%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.3, delay: 2 }}
          className="w-full lg:w-2/3"
        >
          {" "}
          <YoutubeEmbed />
          <ServiceDescription data={data?.data?.service?.description} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1.5, delay: 2 }}
          className="w-full lg:w-1/3  sticky top-0"
        >
          <ServiceForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
