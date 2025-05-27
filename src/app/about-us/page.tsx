import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import Testimonial from "@/components/Testimonial";
import { createMetadata } from "@/hooks/generateMetaData";
import { ISeoRoot } from "@/interface/seo.interface";
import { fetchAboutPageData } from "./hooks/fetchAboutUsData";
import AboutHero from "./partials/AboutHero";
import Culture from "./partials/Culture";
import Family from "./partials/Family";
import Milestone from "./partials/Milestone";
import MissionVision from "./partials/MissionVision";
import OurStory from "./partials/OurStory";
import WhyChooseUs from "./partials/WhyChooseUs";
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const { data } = await getData<ISeoRoot>(endpoints.seo.about_us);
  const meta = createMetadata(data);
  return meta;
}
const AboutUs = async () => {
  try {
    const { aboutUsData, statsData, whyUsData, testimonialData } =
      await fetchAboutPageData();
    //
    const data = getData(endpoints.breadcrumb.about_us);
    const records = (await data).data?.records[0];
    const heroData = {
      ...records,
      breadcrumb: "About Us",
    };

    return (
      <div className="overflow-hidden">
        <AboutHero heroData={heroData} />
        <OurStory data={aboutUsData?.data} />
        <MissionVision data={aboutUsData?.data?.AboutusMission[0]} />
        <Family data={aboutUsData?.data?.Family[0]} />
        <Milestone data={statsData?.data} />
        <Culture data={aboutUsData?.data?.Gallery[0]} />
        <WhyChooseUs data={whyUsData?.data} />
        <Testimonial data={testimonialData?.data} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <>
        <AboutHero heroData={{ title: "About Us" }} />

        <ErrorMessage />
      </>
    );
  }
};

export default AboutUs;
