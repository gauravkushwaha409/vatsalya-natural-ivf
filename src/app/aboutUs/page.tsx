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
  const testimonialData = await getData(endpoints.sucessStory);
  console.log(aboutUsData.data?.Gallery, "gallery");
  return (
    <div>
      <AboutHero />
      <OurStory data={aboutUsData.data} />
      <MissionVision data={aboutUsData.data?.AboutusMission[0]} />
      <Family data={aboutUsData?.data?.Family[0]} />
      <Milestone data={statsData.data} />
      <Culture data={aboutUsData.data?.Gallery[0]} />
      <WhyChooseUs data={whyUsData.data} />
      <Testimonial data={testimonialData.data} />
    </div>
  );
};

export default AboutUs;
