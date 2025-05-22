import React from "react";
import Herosection from "./partials/Herosection";
import Specialists from "./partials/Specialists";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import Leader from "./partials/Leader";
import { ISeoRoot } from "@/interface/seo.interface";
import { createMetadata } from "@/hooks/generateMetaData";
export const dynamic = "force-dynamic";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.our_team);
  const meta = createMetadata(data);
  return meta;
}
const page = async () => {
  try {
    const { data } = await getData(endpoints.experts);
    const { data: leader } = await getData(endpoints.leader);
    const { data: managementTeam } = await getData(endpoints.management_team);

    return (
      <section>
        <Herosection />
        <Leader data={leader} />
        <Specialists data={data} managementTeam={managementTeam} />
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">An error occurred</p>
      </div>
    );
  }
};

export default page;
