import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import { AxiosError } from "axios";
import { ICarreerResponse } from "./interfaces/carrer.interface";
import Benefits from "./partials/Benefits";
import HeroCareer from "./partials/HeroCareer";
import OpenPosition from "./partials/OpenPosition";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.career);
  const meta = createMetadata(data);
  return meta;
}
const Career = async () => {
  try {
    const data = await getData<ICarreerResponse>(endpoints.carrer);
    const openPositionData = await getData(endpoints.openPosition);
    return (
      <div>
        <HeroCareer />
        <OpenPosition data={openPositionData?.data} />
        <Benefits data={data?.data} />
      </div>
    );
  } catch (e) {
    const error = e as AxiosError;
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
