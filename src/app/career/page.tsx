import React from "react";
import HeroCareer from "./partials/HeroCareer";
import Benefits from "./partials/Benefits";
import OpenPosition from "./partials/OpenPosition";
import { endpoints } from "@/api/endpoints";
import { getData } from "@/api/axios";
import { ICarreerResponse } from "./interfaces/carrer.interface";
import ErrorMessage from "@/components/ErrorMessage";

const Career = async () => {
  try {
    const data = await getData<ICarreerResponse>(endpoints.carrer);
    const openPositionData = await getData(endpoints.openPosition);
    return (
      <div>
        <HeroCareer />
        <Benefits data={data?.data} />
        <OpenPosition data={openPositionData?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return <ErrorMessage />;
  }
};

export default Career;
