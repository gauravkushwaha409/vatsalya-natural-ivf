"use client";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const KnowBenefit = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="mt-10 mb-20 u-padding-l">
      {/* Text Section  */}
      <div className="flex items-center justify-center gap-3 py-3 sm:gap-5">
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
          KNOW THE BENEFITS
        </h2>
        <span className="bg-primary-500 w-[4rem] sm:w-[8.5rem] h-px" />
      </div>
      <p className="px-4 pb-2 lg:pb-8 font-bold text-center md:pb-16 text-text-500 typography-h2">
        Benefits of Fertility Preservation
      </p>

      <div className="flex justify-between mt-10 gap-10 lg:gap-0 flex-col lg:flex-row ">
        {/* list section  */}
        <div className="space-y-6">
          <div className="flex gap-3 ">
            <IoMdCheckmarkCircleOutline className="text-primary-500 size-4.5 mt-1.5" />
            <div className="max-w-[452px] w-full">
              <p className="text-primary-500 text-[18px] leading-[150%] font-semibold mb-1">
                Chance of Pregnancy
              </p>
              <p className="text-text-400 text-[15px] leading-[150%] tracking-[-1%] font-medium">
                IVF makes it possible for couples who couldn’t conceive
                naturally.
              </p>
            </div>
          </div>
          <div className="flex gap-3 ">
            <IoMdCheckmarkCircleOutline className="text-primary-500 size-4.5 mt-1.5" />
            <div className="max-w-[452px] w-full">
              <p className="text-primary-500 text-[18px] leading-[150%] font-semibold mb-1">
                Chance of Pregnancy
              </p>
              <p className="text-text-400 text-[15px] leading-[150%] tracking-[-1%] font-medium">
                IVF makes it possible for couples who couldn’t conceive
                naturally.
              </p>
            </div>
          </div>
          <div className="flex gap-3 ">
            <IoMdCheckmarkCircleOutline className="text-primary-500 size-4.5 mt-1.5" />
            <div className="max-w-[452px] w-full">
              <p className="text-primary-500 text-[18px] leading-[150%] font-semibold mb-1">
                Chance of Pregnancy
              </p>
              <p className="text-text-400 text-[15px] leading-[150%] tracking-[-1%] font-medium">
                IVF makes it possible for couples who couldn’t conceive
                naturally.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleAppointmentClick()}
            className="gap-3 px-8 py-4  mt-5 font-extrabold text-white border rounded-full  bg-secondary-500 border-secondary-200 typography-paragraph-regular"
          >
            Book your Appointment
          </button>
        </div>
        {/* image section  */}
        <div className="w-full max-w-[900px] lg:h-[600px] ">
          <Image
            src="/service/knowbenefit.svg"
            alt="benefit-image"
            width={700}
            height={700}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default KnowBenefit;
