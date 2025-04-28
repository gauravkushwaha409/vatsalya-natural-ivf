import React from "react";
import Herosection from "./partials/Herosection";
import Services from "./partials/Services";
import CallToActions from "./partials/CallToActions";
import ErrorMessage from "@/components/ErrorMessage";
import Tests from "./partials/Tests";
export const dynamic = "force-dynamic";
const ServicePage = () => {
  try {
    return (
      <section>
        <Herosection />
        <Services />
        <Tests />
        <CallToActions />
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <>
        <Herosection />
        <ErrorMessage />
      </>
    );
  }
};

export default ServicePage;
