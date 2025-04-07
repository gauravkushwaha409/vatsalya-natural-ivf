"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import React, { useState } from "react";

interface IServiceDescription {
  description: string;
}
const ServiceDescription: React.FC<IServiceDescription> = ({ description }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <article className="py-10 flex  flex-col gap-5 text-text-400 text-justify">
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <button
        onClick={() => setOpenModal(true)}
        className="typography-h4 font-semibold border-[0.4px] border-secondary-100 bg-secondary-500 py-4 px-11 rounded-full text-lg transition-colors duration-300 shadow-[0px 8px 18px 0px rgba(101,53,83,0.62)] cursor-pointer text-white w-fit "
      >
        Book an Appointment
      </button>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </article>
  );
};

export default ServiceDescription;
