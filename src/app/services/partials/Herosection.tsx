import Breadcrumb from "@/components/Breadcumb";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "@/assests/services/herosection.png";
const Herosection = () => {
  return (
    <header>
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
          <div className="absolute top-5 z-30  transform left-1/2 -translate-x-1/2">
            {" "}
            <Breadcrumb name="services" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
            {/* Breadcrumb need to be redo again*/}

            {/* Heading */}
            <h1 className="typography-h3 font-bold mb-4">Services</h1>
            {/* Subheading */}
            <p className="typography-paragraph-large font-medium mb-10">
              Bringing hope to families with expert fertility care and
              cutting-edge treatments, ensuring a personalized journey to
              parenthood.
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
    </header>
  );
};

export default Herosection;
