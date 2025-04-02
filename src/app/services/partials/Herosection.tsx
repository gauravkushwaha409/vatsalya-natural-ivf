"use client";
import CalendarModal from "@/app/(home)/modals/CalenderModal";
import hero from "@/assests/services/herosection.png";
import Breadcrumb from "@/components/Breadcumb";
import Image from "next/image";
import { useState } from "react";
const Herosection = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <header>
      <div>
        <div className="relative w-full h-[500px] overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="z-0 absolute inset-0">
            <Image
              src={hero}
              alt="Happy couple with newborn baby"
              fill
              className="brightness-[0.35] object-cover"
              priority
            />
          </div>
          <div className="top-5 left-1/2 z-30 absolute -translate-x-1/2 transform">
            {" "}
            <Breadcrumb name="services" />
          </div>

          {/* Content */}
          <div className="z-10 relative flex flex-col justify-center items-center px-4 h-full text-white text-center">
            {/* Breadcrumb need to be redo again*/}

            {/* Heading */}
            <h1 className="mb-4 font-bold typography-h3">Services</h1>
            {/* Subheading */}
            <p className="mb-10 font-medium typography-paragraph-large">
              Bringing hope to families with expert fertility care and
              cutting-edge treatments, ensuring a personalized journey to
              parenthood.
            </p>
            {/* CTA Button */}
            <button
              onClick={() => setOpenModal(true)}
              className="hover:bg-secondary bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-11 py-4 border-[0.4px] border-secondary-100 rounded-full font-semibold text-lg transition-colors duration-300 typography-h5"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
      <CalendarModal
        modalOpen={openModal}
        setModalOpen={setOpenModal}
        onCloseModal={() => setOpenModal(false)}
      />
    </header>
  );
};

export default Herosection;
