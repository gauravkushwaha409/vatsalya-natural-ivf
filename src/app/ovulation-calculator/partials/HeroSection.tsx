"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import hero from "@/assests/success-story/heroSuccess.jpg";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import Image from "next/image";
import { useState } from "react";

const HeroSection = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
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

        {/* Content */}
        <div className="z-10 relative flex flex-col justify-center items-center px-4 h-full text-white text-center">
          <CustomBreadcrumb
            items={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Ovulation-Calculator",
              },
            ]}
            className="top-4 absolute"
          />{" "}
          <h1 className="mb-4 font-bold typography-h1">
            Track Your Ovulation with Ease
          </h1>
          <p className="mb-10 font-medium typography-paragraph-large">
            Use our accurate ovulation calculator to predict your most fertile
            days and increase your chances of conception.
          </p>
          <button
            onClick={() => setOpenModal(true)}
            className="hover:bg-secondary bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-11 py-4 border-[0.4px] border-secondary-100 rounded-full font-semibold text-lg transition-colors duration-300 typography-h4 cursor-pointer"
          >
            Book an Appointment
          </button>
        </div>
      </div>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default HeroSection;
