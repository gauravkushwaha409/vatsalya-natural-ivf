import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "next/image";
import React from "react";
import hero from "@/assests/career/career.png";
import ApplyFormModal from "../careerDetail/partials/ApplyFormModal";

const HeroCareer = () => {
  return (
    <div>
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero}
            alt="Happy couple with newborn baby"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          {/* Breadcrumb need to be redo again*/}
          <CustomBreadcrumb
            items={[{ name: "Home", link: "/" }, { name: "Career" }]}
            className="absolute top-4 "
          />
          {/* Heading */}
          <h1 className="typography-h3 font-bold mb-4">Career</h1>
          {/* Subheading */}
          <p className="typography-paragraph-large font-medium mb-10">
            Be a part of a team that is making a difference in reproductive
            health and patient care
          </p>
          {/* CTA Button */}
          <ApplyFormModal
            title="Join Us"
            customClass="typography-h5 font-semibold border-[0.4px] border-secondary-100 hover:bg-secondary py-4 px-11 rounded-full text-lg transition-colors duration-300 shadow-[0px 8px 18px 0px rgba(101,53,83,0.62)] bg-gradient-to-r from-[#A0385A] to-[#3A142C]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCareer;
