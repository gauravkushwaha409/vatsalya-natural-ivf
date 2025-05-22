import React from "react";
import TermSection from "./partials/TermSection";
import TermsHero from "./partials/TermsHero";
export const dynamic = "force-dynamic";

const Terms = () => {
  return (
    <div className="">
      <TermsHero />
      <TermSection />
    </div>
  );
};

export default Terms;
