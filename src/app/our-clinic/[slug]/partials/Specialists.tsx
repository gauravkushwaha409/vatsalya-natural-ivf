import { IOurExpertsData } from "@/app/our-team/interface/ourExperts.interface";
import TeamCard from "@/components/cards/TeamCard";
import SectionHeading from "@/components/compoundComponent/SectionHeading";
import React from "react";

interface SpecialistsProps {
  data: IOurExpertsData;
}
const Specialists: React.FC<SpecialistsProps> = ({ data }) => {
  return (
    <section className="u-padding-x py-10">
      <SectionHeading>
        <SectionHeading.Title>Meet Our Specialists</SectionHeading.Title>
        <SectionHeading.Subtitle>
          A team of experts dedicated to your parenthood journey
        </SectionHeading.Subtitle>
      </SectionHeading>
      <TeamCard data={data} />
    </section>
  );
};

export default Specialists;
