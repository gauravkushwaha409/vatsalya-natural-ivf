import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import { AxiosError } from "axios";
import { ICarreerResponse } from "./interfaces/carrer.interface";
import Benefits from "./partials/Benefits";
import HeroCareer from "./partials/HeroCareer";
import OpenPosition from "./partials/OpenPosition";

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
  } catch (e) {
    const error = e as AxiosError;
    console.log("Error fetching blog data:", error);
    if (error.status == 404)
      return (
        <>
          <HeroCareer />
          <div className="flex justify-center items-center h-screen">
            No Oppertunities Found
          </div>
        </>
      );
    return <ErrorMessage />;
  }
};

export default Career;
