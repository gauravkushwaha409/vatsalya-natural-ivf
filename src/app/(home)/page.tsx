import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import Testimonial from "@/components/Testimonial";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import dynamic from "next/dynamic";
import { getHomePageData } from "./hook/hook.hook";
import Blogsection from "./partials/Blogsection";
import CTA from "./partials/cta-section";
import HomeFaq from "./partials/Faq";
import HeroSectionNew from "./partials/HeroSectionNew";
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

        {/* <div className="space-y-20 w-full"> */}
        <div className=" w-full">
          <HeroSectionNew />
          <Showcase data={showcaseData?.data} />

          <HowWeWork data={howWeWorkData?.data} />
          <WhatWeOffer data={whatweOfferData?.data?.records ?? {}} />

          {/* <MeetExperts data={expertsData?.data} /> */}
          {/* <Miracles data={homeGalleryData?.data} /> */}
          <div className="w-full">
            <Testimonial data={testimonialData?.data} />
          </div>
          <HomeFaq data={homedata?.data?.Faq} />
          <CTA />
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
