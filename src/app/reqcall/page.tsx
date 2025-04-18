import React from "react";
import HeroRequest from "./partials/HeroRequest";
import CallSection from "./partials/CallSection";
export const dynamic = "force-dynamic";

const RequestCall = () => {
  return (
    <div className="bg-background-100">
      <HeroRequest />
      <CallSection />
    </div>
  );
};

export default RequestCall;
