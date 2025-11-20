import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import { createMetadata } from "@/hooks/generateMetaData";
import { IBreadCrumbRoot } from "@/interface/breadcrumb.interface";
import { ISeoRoot } from "@/interface/seo.interface";
import { IStageRoot } from "./interfaces/stage.interface";
import FertilityStageSelection from "./partials/FertilityStageSelection";
import ServiceHero from "./partials/ServiceHero";
import Services from "./partials/Services";
import Tests from "./partials/Tests";
import FertilityTreatmentSolutions from "./partials/FertilityTreatmentSolutions";
import { IServiceHeadingRoot } from "./interfaces/serviceHeading.interface";
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
  const { data: serviceHeading } = await getData<IServiceHeadingRoot>(
    endpoints.service_header
  );

  try {
    return (
      <section>
        <ServiceHero data={heroData} headingData={serviceHeading} />
        {/* <Herosection data={heroData} /> */}
        <Services />
        <Tests />
        <FertilityTreatmentSolutions data={fertilityData} />

        {/* <FertilityStageSelection data={fertilityData} /> */}
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
