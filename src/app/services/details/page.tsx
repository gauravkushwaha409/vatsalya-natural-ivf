import React from "react";
import ServiceDetails from "./partials/ServiceDetails";
import ServiceForm from "./partials/ServiceForms";
import Headings from "./partials/Headings";

const page = () => {
  return (
    <section>
      <Headings /> <ServiceDetails />
    </section>
  );
};

export default page;
