import React from "react";
import HeroRequest from "./partials/HeroRequest";
import CallSection from "./partials/CallSection";
import { getData } from "@/api/axios";
import { ISeoRoot } from "@/interface/seo.interface";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
export const dynamic = "force-dynamic";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.request_call);
  const meta = createMetadata(data);
  return meta;
}
const RequestCall = () => {
  return (
    <div className="bg-background-100">
      <HeroRequest />
      <CallSection />
    </div>
  );
};

export default RequestCall;
