import Testimonial from "@/components/Testimonial";
import BrandsSlider from "./partials/BrandsSlider";
import HomeFaq from "./partials/Faq";
import HeroSection from "./partials/HeroSection";
import HowWeWork from "./partials/HowWeWork";
import MeetExperts from "./partials/MeetExperts";
import Miracles from "./partials/Miracles";
import Showcase from "./partials/Showcase";
import Slogan from "./partials/Slogan";
import WhatWeDo from "./partials/WhatWeDo";
import WhatWeOffer from "./partials/WhatWeOffer";
import WhenToVisit from "./partials/WhenToVisit";
import WhoWeAre from "./partials/WhoWeAre";

const HomePage = () => {
  return (
    <div className="space-y-20">
      <div
        style={{
          background:
            "linear-gradient(90deg, #FFD2CE 0%, #EBC0DB 100%) no-repeat",
        }}
        className="z-[0] relative overflow-hidden"
      >
        <div
          style={{
            background:
              "url('/home/hero-noise.png') #fff4 0% 0% / 100px 70px repeat",
            backgroundBlendMode: "screen",
          }}
          className="z-[1] relative"
        >
          <HeroSection />
          <div
            style={{
              background: "url('/home/circle.svg') no-repeat right top",
            }}
            className="z-[2] absolute inset-0 pointer-events-none"
          ></div>
        </div>
      </div>

      {/* Main Slogan */}
      <Slogan />
      <WhoWeAre />
      <WhatWeDo />
      <WhatWeOffer />
      <HowWeWork />
      <WhenToVisit />
      <BrandsSlider />
      <MeetExperts />
      <Showcase />
      <Miracles />
      <div className="mt-60 w-full">
        <Testimonial />
      </div>
      <HomeFaq />
    </div>
  );
};
export default HomePage;
