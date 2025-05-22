"use client";

import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import Hero from "@/components/compoundComponent/Hero";

const HeroSuccess = () => {
  const { data } = useGetDataQuery({ url: endpoints.breadcrumb.success_story });
  const records = data?.data?.records[0];
  const heroData = {
    ...records,
    breadcrumb: "Sucess Stories",
  };
  return (
    <Hero heroData={heroData}>
      <Hero.Container>
        <Hero.Background />
        <Hero.Breadcrumb />
        <Hero.Content className="px-6 md:px-16 text-left md:text-center">
          <Hero.Title />
          <Hero.Description className="max-w-2xl text-gray-100" />
          <Hero.Button />
        </Hero.Content>
      </Hero.Container>
    </Hero>
  );
};

export default HeroSuccess;
