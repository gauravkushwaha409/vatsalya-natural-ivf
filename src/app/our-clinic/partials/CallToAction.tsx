"use client";
import Image from "next/image";
import React, { useState } from "react";
import calltoAction from "@/assests/services/appoiment.jpg";
import CalendarModal from "@/components/modals/CalenderModal";
const CallToActions = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <section>
      <div>
        <div className="relative w-full h-[70vh] overflow-hidden flex justify-center items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={calltoAction}
              alt="Happy couple with newborn baby"
              fill
              className="object-cover brightness-75"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative  z-10 flex flex-col items-center justify-center  p-16 rounded-2xl text-white px-20 text-center backdrop-blur-sm bg-white/30 w-[940px] ">
            <h3 className="typography-h4 lg:typography-h2  mb-5 font-bold text-secondary-500">
              Struggling with Infertility? We’re Here to Help, Every Step of the
              Way.
            </h3>
            {/* CTA Button */}
            <button
              onClick={() => setOpenModal(true)}
              className="typography-h4 font-semibold border-[0.4px] border-secondary-100 bg-secondary-500 py-4 px-11 rounded-full text-lg transition-colors duration-300 shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] cursor-pointer "
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
    </section>
  );
};

export default CallToActions;
