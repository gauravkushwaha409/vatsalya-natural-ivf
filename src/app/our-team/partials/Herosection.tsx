"use client";

import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import Hero from "@/components/compoundComponent/Hero";

const Herosection = () => {
  const { data } = useGetDataQuery({ url: endpoints.breadcrumb.our_expert });
  const records = data?.data?.records[0];
  const heroData = {
    ...records,
    breadcrumb: "Our Team",
  };
  return (
    <Hero heroData={heroData}>
      <Hero.Container>
        <Hero.Background />
        <Hero.Breadcrumb />
        <Hero.Content className="px-6 md:px-16 text-left md:text-center">
          <Hero.Title />
          <Hero.Description className="text-gray-100 max-w-2xl" />
        </Hero.Content>
      </Hero.Container>
    </Hero>
  );
};

export default Herosection;
