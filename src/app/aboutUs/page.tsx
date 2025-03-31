import Testimonial from "@/components/Testimonial";
import AboutHero from "./partials/AboutHero";
import Culture from "./partials/Culture";
import Family from "./partials/Family";
import Milestone from "./partials/Milestone";
import MissionVision from "./partials/MissionVision";
import OurStory from "./partials/OurStory";
import WhyChooseUs from "./partials/WhyChooseUs";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Family />
      <Milestone />
      <Culture />
      <WhyChooseUs />
      <Testimonial />
    </div>
  );
};

export default AboutUs;
