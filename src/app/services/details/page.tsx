import React from "react";
import ServiceDetails from "./partials/ServiceDetails";

import Headings from "./partials/Headings";

import ServiceFaq from "./partials/ServiceFaq";

const page = () => {
  return (
    <section>
      <Headings /> <ServiceDetails />
      <ServiceFaq />
    </section>
  );
};

export default page;
