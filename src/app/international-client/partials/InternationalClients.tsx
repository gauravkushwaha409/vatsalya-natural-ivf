"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import ServiceForm from "@/app/services/[slug]/partials/ServiceForms";
import BasicTab from "@/components/tab/BasicTab";
import React from "react";
import { IInternationalClientRoot } from "../interface/internationalClient.interface";

const InternationalClients = () => {
  const { data: internationalPatients } = useGetDataQuery<{
    data: IInternationalClientRoot;
  }>({
    url: endpoints.international_patients,
  });
  const Tabs =
    internationalPatients?.data?.records?.map((item) => ({
      label: item?.title,
      content: <p dangerouslySetInnerHTML={{ __html: item?.description }} />,
    })) || [];

  return (
    <section className="padding bg-background-100 py-10 flex  gap-5 lg:gap-10 ">
      <div className="w-full lg:w-8/12 shadow-sm rounded-lg px-5 py-5">
        <div className="max-w-5xl mx-auto">
          <BasicTab tabs={Tabs} />
        </div>
      </div>
      <div className="w-full lg:w-4/12">
        <ServiceForm />
      </div>
    </section>
  );
};

export default InternationalClients;
