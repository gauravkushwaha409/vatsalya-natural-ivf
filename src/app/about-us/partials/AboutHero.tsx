"use client";
import Hero, { HeroData } from "@/components/compoundComponent/Hero";

const AboutHero: React.FC<{ heroData: HeroData }> = ({ heroData }) => {
  // const { data } = useGetDataQuery({ url: endpoints.breadcrumb.about_us });
  // const records = data?.data?.records[0];
  // const heroData = {
  //   ...records,
  //   breadcrumb: "AboutUs",
  // };
  return (
    <Hero heroData={heroData}>
      <Hero.Container>
        <Hero.Background />
        <Hero.Breadcrumb />
        <Hero.Content className="px-6 md:px-16 text-left md:text-center">
          <Hero.Title />
          <Hero.Description className="mb-5 max-w-2xl text-gray-100" />
          <Hero.Button />
        </Hero.Content>
      </Hero.Container>
    </Hero>
  );
};

export default AboutHero;
