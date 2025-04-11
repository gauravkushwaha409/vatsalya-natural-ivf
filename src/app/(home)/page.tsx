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
import Blogsection from "./partials/Blogsection";
import { getHomePageData } from "./hook/hook.hook";

const HomePage = async () => {
  const {
    homedata,
    whatweOfferData,
    howWeWorkData,
    expertsData,
    blogData,
    showcaseData,
    testimonialData,
  } = await getHomePageData();
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
          <HeroSection data={homedata.data} />
          <div
            style={{
              background: "url('/home/circle.svg') no-repeat right top",
            }}
            className="z-[2] absolute inset-0 pointer-events-none"
          ></div>
        </div>
      </div>

      {/* Main Slogan */}
      <Slogan data={homedata?.data?.mission[0]} />
      <div className="w-full overflow-hidden">
        <WhoWeAre data={homedata?.data?.WhatWeDo[0]} />
        <WhatWeDo data={homedata?.data?.WhatWeDo[1]} />
      </div>
      <WhatWeOffer data={whatweOfferData?.data?.records} />
      <HowWeWork data={howWeWorkData?.data} />
      <WhenToVisit data={homedata?.data?.WhenVisit[0]} />
      <BrandsSlider />
      <MeetExperts data={expertsData?.data} />
      <Showcase data={showcaseData?.data} />
      <Miracles />
      <div className="mt-60 w-full">
        <Testimonial data={testimonialData?.data} />
      </div>
      <HomeFaq data={homedata?.data?.Faq} />
      <Blogsection data={blogData?.data} />
    </div>
  );
};
export default HomePage;
