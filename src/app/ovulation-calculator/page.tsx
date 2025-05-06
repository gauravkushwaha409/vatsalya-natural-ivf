import { getData } from "@/api/axios";
import Calendar from "./partials/Calendar";
import HeroSection from "./partials/HeroSection";
import { endpoints } from "@/api/endpoints";
import { IOvulationRoot } from "./interface/ovulation.interface";

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
