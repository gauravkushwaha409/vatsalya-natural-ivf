import ErrorMessage from "@/components/ErrorMessage";
import FertilityStageSelection from "./partials/FertilityStageSelection";
import Herosection from "./partials/Herosection";
import Services from "./partials/Services";
import Tests from "./partials/Tests";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { IStageRoot } from "./interfaces/stage.interface";
export const dynamic = "force-dynamic";
const ServicePage = async () => {
  const { data: fertilityData } = await getData<IStageRoot>(
    endpoints.service_stage
  );
  try {
    return (
      <section>
        <Herosection />
        <Services />
        <Tests />
        <FertilityStageSelection data={fertilityData} />
        {/* <CallToActions /> */}
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <>
        <Herosection />
        <ErrorMessage />
      </>
    );
  }
};

export default ServicePage;
