"use client";

import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import Hero from "@/components/compoundComponent/Hero";

const HeroSection = () => {
  const { data } = useGetDataQuery({ url: endpoints.breadcrumb.clinic });
  const records = data?.data?.records[0];
  const heroData = {
    ...records,
    breadcrumb: "Our Clinic",
  };
  return (
    <Hero heroData={heroData}>
      <Hero.Container>
        <Hero.Background />
        <Hero.Breadcrumb />
        <Hero.Content className="px-6 md:px-16 text-left md:text-center">
          <Hero.Title />
          <Hero.Description className="text-gray-100 max-w-2xl" />
          <Hero.Button />
        </Hero.Content>
      </Hero.Container>
    </Hero>
  );
};

export default HeroSection;
