"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import hero from "@/assests/success-story/heroSuccess.jpg";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "next/image";
import PATHS from "@/utils/path";
import Hero from "@/components/compoundComponent/Hero";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";

const HeroSection: React.FC<{ slug: string }> = ({ slug }) => {
  const { data } = useGetDataQuery({ url: endpoints.breadcrumb.clinic_detail });
  const records = data?.data?.records[0];
  const heroData = {
    ...records,
    breadcrumb: "About",
  };

  return (
    <>
      <Hero heroData={heroData}>
        <Hero.Container>
          <Hero.Background />
          <Hero.CustomBreadcrumb className="text-text-50 flex items-center">
            <CustomBreadcrumb
              items={[
                {
                  name: "Home",
                  link: "/",
                },
                {
                  name: "our-clinic",
                  link: PATHS.clinic,
                },
                {
                  name: slug,
                },
              ]}
            />
          </Hero.CustomBreadcrumb>
          <Hero.Content className="px-6 md:px-16 text-left md:text-center">
            <Hero.Title />
            <Hero.Description className="text-gray-100 max-w-2xl" />
            <Hero.Button />
          </Hero.Content>
        </Hero.Container>
      </Hero>
    </>
  );
};

export default HeroSection;
