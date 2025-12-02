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
    <div className="max-w-app relative u-padding-x u-padding-y">
      <ClinicList />
      <ContentWrapper handleAppointmentClick={handleAppointmentClick} />
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

const ClinicList = () => {
  const clinicList = [
    {
      label: "Biratnagar",
      value: "biratnagar",
    },
    {
      label: "Kathmandu",
      value: "kathmandu",
    },
    {
      label: "Nepalgunj",
      value: "nepalgunj",
    },
    {
      label: "Bhaktapur",
      value: "bhaktapur",
    },
    {
      label: "Pokhara",
      value: "pokhara",
    },
    {
      label: "Chitwan",
      value: "chitwan",
    },
    {
      label: "Lalitpur",
      value: "lalitpur",
    },
    {
      label: "Butwal",
      value: "butwal",
    },
  ];
  return (
    <div className="space-y-3">
      <p className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
        Clinic
      </p>
      <div>
        {clinicList.map((item, index) => (
          <span
            key={item.label + index}
            className={`typo-lg-bd-semi-bold text-text-400 pr-2.5 border-r-[#929292] ${
              index != 0 ? "pl-2.5" : ""
            }
            ${index < clinicList.length - 1 ? "border" : ""}
            `}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

const ContentWrapper = ({
  handleAppointmentClick,
}: {
  handleAppointmentClick: () => void;
}) => {
  return (
    <div className="mt-9 grid grid-cols-1 md:grid-cols-2 u-gap-x">
      <HeadingSection handleAppointmentClick={handleAppointmentClick} />
      <ImageSection />
    </div>
  );
};

const HeadingSection = ({
  handleAppointmentClick,
}: {
  handleAppointmentClick: () => void;
}) => {
  return (
    <div className="w-full shrink-0">
      <span className="text-secondary-500 text-[12px] leading-[24px] font-medium mb-5">
        Get Started
      </span>
      <p className="text-[38px] leading-[46px] tracking-[-1%] text-secondary-500 font-bold mb-5 w-full max-w-[453px]">
        Searching for infertility hospital?
      </p>
      <p className="text-[#787878] text-[16px] leading-[160%] tracking-[-1%] w-full max-w-[516px] mb-7">
        Nepal's NO.1 IVF clinic with for over 15 years of excellence, delivering
        advanced fertility care.
      </p>

      <button
        type="button"
        onClick={handleAppointmentClick}
        className="px-8 py-4 font-extrabold text-white border rounded-full cursor-pointer bg-secondary-500 border-secondary-200 typography-paragraph-regular "
      >
        Schedule a Consultation
      </button>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div className="relative h-full">
      <Image src="/getStarted.svg" alt="get-started image" fill />
    </div>
  );
};

export default GetStarted;
