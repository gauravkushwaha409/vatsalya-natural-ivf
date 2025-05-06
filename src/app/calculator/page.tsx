import React from "react";
import HeroSection from "./partials/HeroSection";
import IvfDueDateCalculator from "./partials/IvfDueDateCalculator";
import { getData } from "@/api/axios";
import { IOvulationRoot } from "../ovulation-calculator/interface/ovulation.interface";
import { endpoints } from "@/api/endpoints";

const CalculatorPage = async () => {
  try {
    const { data } = await getData<IOvulationRoot>(
      `${endpoints.calculator_description}?filter=fertility`
    );
    return (
      <>
        <HeroSection />
        <IvfDueDateCalculator data={data} />
      </>
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

export default CalculatorPage;
