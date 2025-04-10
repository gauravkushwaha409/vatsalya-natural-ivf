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
  const data = await getData(endpoints.aboutUs);
  return (
    <div>
      <AboutHero data={data.data} />
      <OurStory data={data.data} />
      <MissionVision data={data.data} />
      <Family data={data.data} />
      <Milestone data={data.data} />
      <Culture data={data.data} />
      <WhyChooseUs data={data.data} />
      <Testimonial data={data.data} />
    </div>
  );
};

export default AboutUs;
