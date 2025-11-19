"use client";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import React, { useState } from "react";

const GetStarted = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(270deg, rgba(255, 210, 206, 0.3) 0%, rgba(235, 192, 219, 0.3) 100%)",
      }}
    >
      <div className="w-full lg:w-1/2 py-6 lg:py-18 padding-l shrink-0">
        <span className="text-secondary-500 text-[12px] leading-[24px] font-medium mb-5">
          Get Started
        </span>
        <p className="text-[38px] leading-[46px] tracking-[-1%] text-secondary-500 font-bold mb-5 w-full max-w-[453px]">
          Searching for infertility hospital?
        </p>
        <p className="text-[#787878] text-[16px] leading-[160%] tracking-[-1%] w-full max-w-[516px] mb-7">
          Nepal's NO.1 IVF clinic with for over 15 years of excellence,
          delivering advanced fertility care.
        </p>

        <button
          type="button"
          onClick={() => handleAppointmentClick()}
          className="px-8 py-4 font-extrabold text-white border rounded-full cursor-pointer bg-secondary-500 border-secondary-200 typography-paragraph-regular "
        >
          Schedule a Consultation
        </button>
      </div>

      <div className="lg:absolute bottom-0 right-0 w-fit hidden lg:block">
        <Image
          src="/getStarted.svg"
          alt="get-started image"
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default GetStarted;
