import React from "react";
import PrivacyHero from "./partials/PrivacyHero";
import PrivacyContent from "./partials/PrivacyContent";
export const dynamic = "force-dynamic";

const Privacy = () => {
  return (
    <div>
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
};

export default Privacy;
