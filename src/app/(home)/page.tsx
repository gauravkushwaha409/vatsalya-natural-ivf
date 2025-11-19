import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import TestimonialSlider from "@/components/TestimonialSlider";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import { getHomePageData } from "./hook/hook.hook";
import Blogsection from "./partials/Blogsection";
import FaqHome from "./partials/FaqHome";
import GetStarted from "./partials/GetStarted";
import HomeHero from "./partials/HomeHero";
import HowWeWork from "./partials/HowWeWork";
import JsonLD from "./partials/JsonLD";
import Location from "./partials/Location";
import MeetOurExperts from "./partials/MeetOurExperts";
import Showcase from "./partials/Showcase";
import WhatWeOffer from "./partials/WhatWeOffer";

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
      locationData,
    } = await getHomePageData();

    return (
      <>
        <JsonLD />

        <div className="w-full ">
          <HomeHero />
          <Showcase data={showcaseData?.data} />
          <HowWeWork data={howWeWorkData?.data} />
          <WhatWeOffer data={whatweOfferData?.data?.records ?? {}} />
          <MeetOurExperts data={expertsData?.data} />
          <TestimonialSlider data={testimonialData?.data} />
          <Location data={locationData?.data?.records} />
          <FaqHome data={homedata?.data?.Faq} />
          <Blogsection data={blogData?.data} />

          <GetStarted />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return <ErrorMessage />;
  }
};
export default HomePage;
