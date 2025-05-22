import ErrorMessage from "@/components/ErrorMessage";
import FertilityStageSelection from "./partials/FertilityStageSelection";
import Herosection from "./partials/Herosection";
import Services from "./partials/Services";
import Tests from "./partials/Tests";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { IStageRoot } from "./interfaces/stage.interface";
import { ISeoRoot } from "@/interface/seo.interface";
import { createMetadata } from "@/hooks/generateMetaData";
import { IBreadCrumbRoot } from "@/interface/breadcrumb.interface";
export const dynamic = "force-dynamic";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.service);
  const meta = createMetadata(data);
  return meta;
}
const ServicePage = async () => {
  const { data: fertilityData } = await getData<IStageRoot>(
    endpoints.service_stage
  );
  const { data: heroData } = await getData<IBreadCrumbRoot>(
    endpoints.breadcrumb.service
  );
  try {
    return (
      <section>
        <Herosection data={heroData} />
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
        <ErrorMessage />
      </>
    );
  }
};

export default ServicePage;
