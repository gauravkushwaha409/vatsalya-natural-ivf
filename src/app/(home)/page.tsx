import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import Testimonial from "@/components/Testimonial";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import dynamic from "next/dynamic";
import Image from "next/image";
import { getHomePageData } from "./hook/hook.hook";
import Blogsection from "./partials/Blogsection";
import HomeFaq from "./partials/Faq";
import HeroSection from "./partials/HeroSection";
import HowWeWork from "./partials/HowWeWork";
import JsonLD from "./partials/JsonLD";
import MeetExperts from "./partials/MeetExperts";
import Miracles from "./partials/Miracles";
import Notice from "./partials/Notice";
import Showcase from "./partials/Showcase";
import Slogan from "./partials/Slogan";
import WhatWeDo from "./partials/WhatWeDo";
import WhatWeOffer from "./partials/WhatWeOffer";
import WhenToVisit from "./partials/WhenToVisit";
import WhoWeAre from "./partials/WhoWeAre";
import CTA from "./partials/cta-section";
const BrandsSlider = dynamic(() => import("./partials/BrandsSlider"));

export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.home);
  const meta = createMetadata(data);
  return meta;
}

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
      <>
        <JsonLD />
        <div className="space-y-20 w-full">
          <div
            style={{
              background:
                "linear-gradient(90deg, #FFD2CE 0%, #EBC0DB 100%) no-repeat",
            }}
            className="z-[1] relative overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="/noise.webp"
                alt="Background texture"
                priority
                fill
                style={{
                  opacity: 0.33,
                  objectFit: "cover",
                }}
              />
            </div>
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
          <div
            style={{
              background: "url(/home/who-we-are-bg.webp) repeat-y 0% / cover",
              backgroundSize: "100% 50%",
            }}
            className="w-full overflow-hidden"
          >
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
          <CTA/>
          <Blogsection data={blogData?.data} />
          <Notice />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return <ErrorMessage />;
  }
};
export default HomePage;
