"use client";
import calltoAction from "@/assests/services/appoiment.jpg";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import { useState } from "react";
const CallToActions = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <section>
      <div>
        <div className="relative flex justify-center items-center w-full h-[70vh] overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="z-0 absolute inset-0">
            <Image
              src={calltoAction}
              alt="Happy couple with newborn baby"
              fill
              className="brightness-75 object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="z-10 relative flex flex-col justify-center items-center bg-white/30 backdrop-blur-sm mx-3 p-16 md:px-20 rounded-2xl w-[940px] text-white text-center">
            <h3 className="mb-5 font-bold text-secondary-500 typography-h4 lg:typography-h2">
              Struggling with Infertility? We’re Here to Help, Every Step of the
              Way.
            </h3>
            {/* CTA Button */}
            <button
              onClick={() => setOpenModal(true)}
              className="bg-secondary-500 shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-4 md:px-11 py-2 md:py-4 border-[0.4px] border-secondary-100 rounded-full font-semibold text-lg transition-colors duration-300 cursor-pointer typography-h4"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
};

export default CallToActions;
