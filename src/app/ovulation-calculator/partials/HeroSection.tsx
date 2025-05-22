"use client";

import Hero from "@/components/compoundComponent/Hero";
import { IBreadCrumbData } from "@/interface/breadcrumb.interface";

const HeroSection: React.FC<{ data: IBreadCrumbData }> = ({ data }) => {
  const records = data?.records[0];
  const heroData = {
    ...records,
    breadcrumb: "ovulation-calculator",
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
