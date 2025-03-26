import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "@/assests/success-story/heroSuccess.jpg";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";

const HeroSuccess = () => {
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
            items={[{ name: "Home", link: "/" }, { name: "Success Stories" }]}
            className="absolute top-4 "
          />
          <nav className="self-center mb-12 text-sm">
            <div className="flex items-center space-x-2">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <span>&gt;</span>
              <span>Success Stories</span>
            </div>
          </nav>
          {/* Heading */}
          <h1 className="typography-h3 font-bold mb-4">Success Stories</h1>
          {/* Subheading */}
          <p className="typography-paragraph-large font-medium mb-10">
            Real journeys of couples who overcame fertility challenges with
            Vatsalyas expert care.
          </p>
          {/* CTA Button */}
          <Link
            href="/appointment"
            className="typography-h5 font-semibold border-[0.4px] border-secondary-100 hover:bg-secondary py-4 px-11 rounded-full text-lg transition-colors duration-300 shadow-[0px 8px 18px 0px rgba(101,53,83,0.62)] bg-gradient-to-r from-[#A0385A] to-[#3A142C]"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSuccess;
