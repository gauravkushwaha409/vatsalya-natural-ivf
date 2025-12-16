import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import { IOurExpertsData } from "@/app/our-team/interface/ourExperts.interface";
import { createMetadata } from "@/hooks/generateMetaData";
import React from "react";
import { IClinicDetailsRoot } from "./interface/clinicDetails.interface";
import HeroSection from "./component/HeroSection";
import WhatWeOffer from "@/app/(home)/partials/WhatWeOffer";
import MeetOurExperts from "@/app/(home)/partials/MeetOurExperts";
import Location from "./component/LocationSection";
import SuccessStories from "./component/provider/SuccessStories";
import InsideClinic from "./component/InsideClinic";
import RequestCallback from "./component/RequestCallback";
import { getExpertData } from "@/app/(home)/hook/getExpertData";
import { getCenterData } from "@/app/(home)/hook/getCenterData";
import ClinicExpert from "./partials/ClinicExpert";
// import AboutClinic from "./partials/AboutClinic";
// import ClinicServices from "./partials/ClinicServices";
// import ContactUs from "./partials/ContactUs";
// import HeroSection from "./partials/HeroSection";
// import Specialists from "./partials/Specialists";
// import WhyChooseUs from "./partials/WhyChooseUs";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{}>;
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
    const { data: clinicDetails } = await getData<IClinicDetailsRoot>(
      endpoints.center + `/get/${slugs}`
    );
    const { data: service } = await getData(endpoints.service);
    return (
      <section>
        <HeroSection
          city={clinicDetails?.name}
          address={clinicDetails?.location}
          clinic_description={clinicDetails?.description}
          clinic_name={clinicDetails?.name}
          features={clinicDetails?.listItems}
          image={clinicDetails?.icon}
          slug={clinicDetails?.slug}
          working_days={clinicDetails?.timings}
        />
        <WhatWeOffer
          mainWrapperClassName="bg-primary-50"
          data={service?.data?.records}
        />
        <ClinicExpert
          location={clinicDetails?.slug}
          expertRecord={clinicDetails?.expert}
        />
        <Location
          address={clinicDetails?.location}
          email={clinicDetails?.email}
          map={clinicDetails?.mapUrl}
          name={clinicDetails?.name}
          phone={clinicDetails?.phone}
          working_days={clinicDetails?.timings}
        />
        <SuccessStories
          data={clinicDetails?.patientStory?.map((item) => ({
            author: item?.location,
            description: item?.description,
            title: item?.title,
          }))}
        />
        <InsideClinic />
        <RequestCallback />
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
