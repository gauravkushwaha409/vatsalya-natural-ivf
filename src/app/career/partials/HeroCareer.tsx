"use client";
import React from "react";
import ApplyFormModal from "../../../components/modals/ApplyFormModal";
import Hero from "@/components/compoundComponent/Hero";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";

const HeroCareer = () => {
  const { data } = useGetDataQuery({ url: endpoints.breadcrumb.career });
  const records = data?.data?.records[0];
  const heroData = {
    ...records,
    breadcrumb: "Clinic",
  };
  return (
    <Hero heroData={heroData}>
      <Hero.Container>
        <Hero.Background />
        <Hero.Breadcrumb />
        <Hero.Content className="px-6 md:px-16 text-left md:text-center">
          <Hero.Title />
          <Hero.Description className="text-gray-100 max-w-2xl" />
          <Hero.HeroCustomButton className="bg-none shadow-none border-none hover:bg-none">
            <ApplyFormModal
              title="Join Us"
              customClass="typography-h4 font-semibold border-[0.4px] border-secondary-100 hover:bg-secondary py-4 px-11 rounded-full text-lg transition-colors duration-300 shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] bg-gradient-to-r from-[#A0385A] to-[#3A142C]"
            />
          </Hero.HeroCustomButton>
        </Hero.Content>
      </Hero.Container>
    </Hero>
  );
};

export default HeroCareer;
