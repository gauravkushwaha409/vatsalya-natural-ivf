"use client";

import Hero, { HeroData } from "@/components/compoundComponent/Hero";

const HeroSuccess: React.FC<{ heroData: HeroData }> = ({ heroData }) => {
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
