"use client";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { ICenterRoot } from "@/interface/center";
import PATHS from "@/utils/path";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface IProps {
  centerData: ICenterRoot;
}

const GetStarted = ({ centerData }: IProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="relative max-w-app u-padding-x u-padding-y">
      <ClinicList centerData={centerData} />
      <ContentWrapper handleAppointmentClick={handleAppointmentClick} />
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

const ClinicList = ({ centerData }: { centerData: ICenterRoot }) => {
  const router = useRouter();
  return (
    <div className="space-y-3">
      <p className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
        Clinic
      </p>
      <div>
        {centerData?.data?.records?.map((item, index) => (
          <button
            key={item?.id + index}
            onClick={(e) => {
              e.preventDefault();
              router.push(`${PATHS.clinic}/${item.slug}`);
            }}
            className={`typo-lg-bd-semi-bold text-text-400 pr-2.5 border-r-[#929292] ${
              index != 0 ? "pl-2.5" : ""
            }
            ${index < centerData?.data?.records?.length - 1 ? "border-r" : ""}`}
          >
            {item?.name}
          </button>
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
