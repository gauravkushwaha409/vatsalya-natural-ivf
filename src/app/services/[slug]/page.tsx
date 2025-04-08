import React from "react";
import ServiceDetails from "./partials/ServiceDetails";
import Headings from "./partials/Headings";
import ServiceFaq from "./partials/ServiceFaq";
import ErrorMessage from "@/components/ErrorMessage";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}
const page = async ({ params }: ServiceDetailPageProps) => {
  try {
    const slug = await params;
    const data = await getData(endpoints.service + `/${slug?.slug}`);
    return (
      <section>
        <Headings data={data?.data} />
        <ServiceDetails data={data?.data} />
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
