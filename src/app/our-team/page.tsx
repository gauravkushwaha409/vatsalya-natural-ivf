import React from "react";
import Herosection from "./partials/Herosection";
import Specialists from "./partials/Specialists";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
export const dynamic = "force-dynamic";
const page = async () => {
  try {
    const { data } = await getData(endpoints.experts);
    return (
      <section>
        <Herosection />
        <Specialists data={data} />
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
