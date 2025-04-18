import Testimonial from "@/components/Testimonial";
import AboutHero from "./partials/AboutHero";
import Culture from "./partials/Culture";
import Family from "./partials/Family";
import Milestone from "./partials/Milestone";
import MissionVision from "./partials/MissionVision";
import OurStory from "./partials/OurStory";
import WhyChooseUs from "./partials/WhyChooseUs";
import { fetchAboutPageData } from "./hooks/fetchAboutUsData";
import ErrorMessage from "@/components/ErrorMessage";
export const dynamic = "force-dynamic";

const AboutUs = async () => {
  try {
    const { aboutUsData, statsData, whyUsData, testimonialData } =
      await fetchAboutPageData();

    return (
      <div>
        <AboutHero />
        <OurStory data={aboutUsData?.data} />
        <MissionVision data={aboutUsData?.data?.AboutusMission[0]} />
        <Family data={aboutUsData?.data?.Family[0]} />
        <Milestone data={statsData?.data} />
        <Culture data={aboutUsData?.data?.Gallery[0]} />
        <WhyChooseUs data={whyUsData?.data} />
        <Testimonial data={testimonialData?.data} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <>
        <AboutHero />

        <ErrorMessage />
      </>
    );
  }
};

export default AboutUs;
