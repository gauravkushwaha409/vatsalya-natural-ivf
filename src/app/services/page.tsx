import ErrorMessage from "@/components/ErrorMessage";
import FertilityStageSelection from "./partials/FertilityStageSelection";
import Herosection from "./partials/Herosection";
import Services from "./partials/Services";
import Tests from "./partials/Tests";
export const dynamic = "force-dynamic";
const ServicePage = () => {
  try {
    return (
      <section>
        <Herosection />
        <Services />
        <Tests />
        <FertilityStageSelection />
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
