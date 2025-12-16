"use client";
import useDisclosure from "@/components/hooks/useDisclousre";
import React from "react";
import Hero from "./provider/Hero";

// Props for the Hero Section
interface IHeroSectionProps {
  city: string;
  clinic_name: string;
  clinic_description: string;
  slug: string;
  features: string[];
  address: string;
  working_days: string[];
  image: string;
}
const HeroSection = ({
  address,
  city,
  clinic_description,
  clinic_name,
  features,
  image,
  slug,
  working_days,
}: IHeroSectionProps) => {
  return (
    <Hero
      data={{
        address,
        city,
        clinic_description,
        clinic_name,
        features,
        image,
        slug,
        working_days,
      }}
    >
      <Hero.Container className="">
        <Hero.BreadCrumb />
        <Hero.ContentWrapper>
          <Hero.Content />
          <Hero.HeroImage />
        </Hero.ContentWrapper>
      </Hero.Container>
    </Hero>
  );
};

export default HeroSection;
