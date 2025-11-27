import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { IOurExpertsData } from "@/app/our-team/interface/ourExperts.interface";
import { createMetadata } from "@/hooks/generateMetaData";
import React from "react";
import { IClinicDetailsRoot } from "./interface/clinicDetails.interface";
import HeroSection from "./component/HeroSection";
// import AboutClinic from "./partials/AboutClinic";
// import ClinicServices from "./partials/ClinicServices";
// import ContactUs from "./partials/ContactUs";
// import HeroSection from "./partials/HeroSection";
// import Specialists from "./partials/Specialists";
// import WhyChooseUs from "./partials/WhyChooseUs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const slugs = (await params).slug;
  const { data } = await getData<IClinicDetailsRoot>(
    endpoints.center + `/get/${slugs}`
  );
  const images = data?.images?.map((url) => ({ url })) || [];
  const meta = createMetadata(data?.seo, images);
  return meta;
}
const ClinicDetailPage: React.FC<Props> = async ({ params }) => {
  try {
    const slugs = (await params).slug;
    const { data } = await getData<IClinicDetailsRoot>(
      endpoints.center + `/get/${slugs}`
    );

    const { data: services } = await getData(endpoints.service);
    const expertData = {
      records: data?.expert,
    } as unknown as IOurExpertsData;
    console.log(services);
    console.log(data);

    return (
      <section>
        {/* 
        // Old Design
        <HeroSection slug={slugs} />
        <AboutClinic data={data} />
        <ClinicServices data={services} location={data.location} />
        <Specialists data={expertData} />
        <WhyChooseUs />
        <ContactUs data={data} />
        */}
        <HeroSection />
      </section>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">An error occurred</p>
      </div>
    );
  }
};

export default ClinicDetailPage;
