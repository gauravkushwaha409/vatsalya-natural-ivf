import React from "react";
import Herosection from "./partials/Herosection";
import Services from "./partials/Services";
import CallToActions from "./partials/CallToActions";

const page = () => {
  return (
    <section>
      <Herosection />
      <Services />
      <CallToActions />
    </section>
  );
};

export default page;
