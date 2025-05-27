import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import HeroSection from "./partials/HeroSection";
import InternationalClients from "./partials/InternationalClients";
export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.international_patient);
  const meta = createMetadata(data);
  return meta;
}
const InternationalClientPage = async () => {
  const data = await getData(endpoints.breadcrumb.InternationalPatient);
  const records = data?.data?.records[0];
  const heroData = {
    ...records,
    breadcrumb: "International Patient",
  };

  return (
    <section>
      <HeroSection heroData={heroData} />
      <InternationalClients />
    </section>
  );
};

export default InternationalClientPage;
