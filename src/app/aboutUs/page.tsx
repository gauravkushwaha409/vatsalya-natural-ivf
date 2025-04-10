import Testimonial from "@/components/Testimonial";
import AboutHero from "./partials/AboutHero";
import Culture from "./partials/Culture";
import Family from "./partials/Family";
import Milestone from "./partials/Milestone";
import MissionVision from "./partials/MissionVision";
import OurStory from "./partials/OurStory";
import WhyChooseUs from "./partials/WhyChooseUs";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

const AboutUs = async () => {
  const aboutUsData = await getData(endpoints.aboutUs.aboutUs);
  const statsData = await getData(endpoints.stats);
  const whyUsData = await getData(endpoints.aboutUs.whyUs);
  const testimonialData = await getData(endpoints.);
  return (
    <div>
      <AboutHero data={data.data} />
      <OurStory data={aboutUsData.data} />
      <MissionVision data={aboutUsData.data} />
      <Family data={aboutUsData.data} />
      <Milestone data={statsData.data} />
      <Culture data={aboutUsData.data} />
      <WhyChooseUs data={whyUsData.data} />
      <Testimonial data={data.data} />
    </div>
  );
};

export default AboutUs;
