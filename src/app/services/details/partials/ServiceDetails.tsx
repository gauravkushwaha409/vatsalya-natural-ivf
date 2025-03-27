"use client";
import React from "react";
import YoutubeEmbed from "./YoutubeVIdeoEmbbed";
import ServiceDescription from "./ServiceDescription";
import ServiceForm from "./ServiceForms";
import { motion } from "motion/react";

const ServiceDetails = () => {
  return (
    <section className="bg-background-100 overflow-hidden">
      <div className="flex gap-10 px-20">
        <motion.div
          initial={{ x: "20%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.3, delay: 2 }}
          className="w-2/3"
        >
          {" "}
          <YoutubeEmbed />
          <ServiceDescription />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "50%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1.5, delay: 2 }}
          className="w-1/3 "
        >
          <ServiceForm />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetails;
