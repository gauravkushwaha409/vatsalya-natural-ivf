import React from "react";
import HeroSection from "./partials/HeroSection";
import AboutClinic from "./partials/AboutClinic";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import ClinicServices from "./partials/ClinicServices";
import Specialists from "./partials/Specialists";
import ContactUs from "./partials/ContactUs";
import { IClinicDetailsRoot } from "./interface/clinicDetails.interface";
import { IOurExpertsData } from "@/app/our-team/interface/ourExperts.interface";

interface Props {
  params: Promise<{ slug: string }>;
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
    return (
      <section>
        <HeroSection slug={slugs} />
        <AboutClinic data={data} />
        <ClinicServices data={services} />
        <Specialists data={expertData} />
        {/* <WhyChooseUs /> */}
        <ContactUs data={data} />
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
