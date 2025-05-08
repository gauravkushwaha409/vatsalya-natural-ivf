import { getData } from "@/api/axios";
import Calendar from "./partials/Calendar";
import HeroSection from "./partials/HeroSection";
import { endpoints } from "@/api/endpoints";
import { IOvulationRoot } from "./interface/ovulation.interface";
import { createMetadata } from "@/hooks/generateMetaData";

export async function generateMetadata() {
  const { data } = await getData<IOvulationRoot>(
    `${endpoints.calculator_description}?filter=ovulation`
  );
  const meta = createMetadata(data?.records[0]?.seo);
  return meta;
}
const OvulationPage = async () => {
  try {
    const { data } = await getData<IOvulationRoot>(
      `${endpoints.calculator_description}?filter=ovulation`
    );
    return (
      <section>
        <HeroSection />
        <Calendar data={data} />
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

export default OvulationPage;
