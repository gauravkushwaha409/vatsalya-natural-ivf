import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import TestimonialSlider from "@/components/TestimonialSlider";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import { getHomePageData } from "./hook/hook.hook";
import Blogsection from "./partials/Blogsection";
import FaqHome from "./partials/FaqHome";
import HomeHero from "./partials/HomeHero";
import HowWeWork from "./partials/HowWeWork";
import JsonLD from "./partials/JsonLD";
import Location from "./partials/Location";
import MeetOurExperts from "./partials/MeetOurExperts";
import Showcase from "./partials/Showcase";
import WhatWeOffer from "./partials/WhatWeOffer";

// export async function generateMetadata() {
//   const { data } = await getData<ISeoRoot>(endpoints.seo.home);
//   const meta = createMetadata(data);
//   return meta;
// }

const HomePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ center: string | null }>;
}) => {
  const centerParams = (await searchParams).center;
  try {
    const {
      homedata,
      whatweOfferData,
      howWeWorkData,
      expertsData,
      centerData,
      blogData,
      showcaseData,
      testimonialData,
      locationData,
    } = await getHomePageData({ center: centerParams });
    return (
      <>
        <JsonLD />
        <div className="w-full ">
          {/* <HomeHero data={homedata?.data} />
          <Showcase data={showcaseData?.data} />
          <HowWeWork data={howWeWorkData?.data} />
          <WhatWeOffer data={whatweOfferData?.data?.records ?? {}} />
          <TestimonialSlider data={testimonialData?.data} /> */}
          <MeetOurExperts
            centerParams={centerParams}
            center={centerData}
            data={expertsData?.data}
          />
          {/* <Location data={locationData?.data?.records} />*/}
          <FaqHome data={homedata?.data?.Faq} />
          <Blogsection data={blogData?.data} />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return <ErrorMessage />;
  }
};
export default HomePage;
