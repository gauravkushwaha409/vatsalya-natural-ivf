import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ErrorMessage from "@/components/ErrorMessage";
import TestimonialSlider from "@/components/TestimonialSlider";
import { createMetadata } from "@/hooks/generateMetaData";
import { IServiceDetailsRoot } from "../interfaces/serviceDetails.interface";
import ServiceHero from "../partials/ServiceHero";
import IVFProcedure from "./partials/IVFProcedure";
import ServiceDetails from "./partials/ServiceDetails";
import ServiceFaq from "./partials/ServiceFaq";
import TestFlow from "./partials/TestFlow";
import { getHomePageData } from "@/app/(home)/hook/hook.hook";
import KnowBenefit from "./partials/KnowBenefit";
import ServiceHeroDetail from "./partials/ServiceHeroDetail";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const slugs = (await params).slug;
  const { data } = await getData<IServiceDetailsRoot>(
    endpoints.service + `/${slugs}`
  );
  const images = [{ url: data?.service?.videoUrl }];
  const meta = createMetadata(data?.service?.seo, images);
  return meta;
}
const page = async ({ params }: ServiceDetailPageProps) => {
  try {
    const slug = await params;
    const data = await getData(endpoints.service + `/${slug?.slug}`);

    const { testimonialData } = await getHomePageData({});
    return (
      <section>
        <ServiceHeroDetail data={data?.data} />
        {/* <Headings data={data?.data} /> */}
        <ServiceDetails data={data?.data} />
        <IVFProcedure />
        <TestFlow />
        <TestimonialSlider data={testimonialData?.data} />
        <KnowBenefit />
        <ServiceFaq data={data?.data} />
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog details:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <ErrorMessage />
      </div>
    );
  }
};

export default page;
