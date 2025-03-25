import HeroSection from "./partials/HeroSection";
import HowWeWork from "./partials/HowWeWork";
import Slogan from "./partials/Slogan";
import WhatWeDo from "./partials/WhatWeDo";
import WhatWeOffer from "./partials/WhatWeOffer";
import WhenToVisit from "./partials/WhenToVisit";
import WhoWeAre from "./partials/WhoWeAre";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(90deg, #FFD2CE 0%, #EBC0DB 100%) no-repeat",
        }}
        className="z-[0] relative"
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
    </>
  );
};
export default HomePage;
