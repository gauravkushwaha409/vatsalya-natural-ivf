"use client";

import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import React, { useState } from "react";
import { IServiceDetailsData } from "../../interfaces/serviceDetails.interface";

interface IServiceDetails {
  data: IServiceDetailsData;
}

const ServiceHeroDetail: React.FC<IServiceDetails> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="u-padding-l pt-6 lg:pt-0 bg-primary-50 flex lg:flex-row flex-col justify-between items-center gap-10 lg:gap-0">
        <div className="w-full max-w-[711px] ">
          <CustomBreadcrumb
            items={[
              { name: "Home", link: "/" },
              { name: "Service", link: "/services" },
              { name: `${data?.service?.name}` },
            ]}
          />

          <h1 className="text-secondary-500 typography-h1 font-extrabold mt-1.5 mb-3">
            {data?.service?.name}
          </h1>

          <p
            className="text-text-500 text-[16px] leading-[160%] font-normal "
            dangerouslySetInnerHTML={{
              __html: data?.service?.description || "",
            }}
          />

          <button
            onClick={() => handleAppointmentClick()}
            className="bg-gradient-to-r from-[#A0385A] to-[#3A142C] shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-6 md:px-8 py-3 md:py-4 border-[0.4px] border-secondary-100 rounded-full font-semibold transition-all duration-300 text-white cursor-pointer typography-paragraph-regular hover:shadow-[0px_12px_24px_0px_rgba(101,53,83,0.8)] mt-6 md:mt-8 mb-12 lg:mb-0"
          >
            Book Your Appointment
          </button>
        </div>

        <div className="lg:w-[454px] lg:h-[500px]">
          <Image
            src="/service/servicehero.svg"
            alt="hero-service"
            width={700}
            height={700}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* <div
        className="padding py-18 flex flex-col lg:flex-row justify-between gap-4 lg:gap-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 210, 206, 0.2) 0%, rgba(235, 192, 219, 0.2) 100%)",
        }}
      >
        <p className="typography-h1 font-extrabold text-secondary-500 w-full max-w-[418px] shrink-0">
          {data?.service?.name}
        </p>
        <p className="text-[16px] leading-[160%] text-text-500 font-normal w-full max-w-[701px]">
          Discovering Parenthood with IVF at Vatsalya Natural IVF in Nepal,
          understanding the intricacies of infertility is a crucial step in your
          journey towards parenthood. The diagnosis process plays a pivotal role
          in uncovering the underlying reasons for challenges in conception,
          even when engaging in regular unprotected intercourse.{" "}
        </p>
      </div> */}

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default ServiceHeroDetail;
