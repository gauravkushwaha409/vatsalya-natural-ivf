import ErrorMessage from "@/components/ErrorMessage";
import Testimonial from "@/components/Testimonial";
import { getHomePageData } from "./hook/hook.hook";
import Blogsection from "./partials/Blogsection";
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
import Notice from "./partials/Notice";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  try {
    const {
      homedata,
      whatweOfferData,
      howWeWorkData,
      expertsData,
      blogData,
      showcaseData,
      testimonialData,
      homeGalleryData,
    } = await getHomePageData();

    return (
      <div className="space-y-20 w-full">
        <div
          style={{
            background:
              "linear-gradient(90deg, #FFD2CE 0%, #EBC0DB 100%) no-repeat",
          }}
          className="z-[1] relative overflow-hidden"
        >
          <div
            style={{
              background:
                "url('/home/hero-noise.png') no-repeat center / cover",
            }}
            className="absolute inset-0 opacity-[0.33]"
          ></div>
          <div className="z-[2] relative">
            <HeroSection data={homedata?.data} />
            <div
              style={{
                background: "url('/home/circle.svg') no-repeat right top",
              }}
              className="z-[3] absolute inset-0 pointer-events-none"
            ></div>
          </div>
        </div>

        {/* Main Slogan */}
        <Slogan data={homedata?.data?.mission[0]} />
        <div className="w-full overflow-hidden">
          <WhoWeAre data={homedata?.data?.WhatWeDo[0]} />
          <WhatWeDo data={homedata?.data?.WhatWeDo[1]} />
        </div>
        <WhatWeOffer data={whatweOfferData?.data?.records ?? {}} />
        <HowWeWork data={howWeWorkData?.data} />
        <WhenToVisit data={homedata?.data?.WhenVisit[0] ?? {}} />
        <BrandsSlider />
        <MeetExperts data={expertsData?.data} />
        <Showcase data={showcaseData?.data} />
        <Miracles data={homeGalleryData?.data} />
        <div className="w-full">
          <Testimonial data={testimonialData?.data} />
        </div>
        <HomeFaq data={homedata?.data?.Faq} />
        <Blogsection data={blogData?.data} />
        <Notice />
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return <ErrorMessage />;
  }
};
export default HomePage;
