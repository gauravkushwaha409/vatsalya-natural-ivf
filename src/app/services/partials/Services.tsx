import React from "react";

import ServiceCards from "./ServiceCards";
import FertilityCare from "./FertilityCare";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { IServiceResponse } from "../interfaces/services.interface";

const Services = async () => {
  const page = 1;
  const perPage = 9;
  const data = await getData(
    endpoints.service + `?page=${page}&perPage=${perPage}`
  );
  const serviceData = data?.data;
  const FertilityCaredata = await getData(endpoints.whenToSee);
  try {
    return (
      <section className="pt-20 ">
        <ServiceCards data={serviceData} />
        <FertilityCare data={FertilityCaredata?.data} />
      </section>
    );
  } catch (error) {
    console.error("Error fetching services data:", error);
    return <div>Error fetching services data</div>;
  }
};

export default Services;
