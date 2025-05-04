"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import { useState } from "react";
import { IStageData } from "../interfaces/stage.interface";

const FertilityStageSelection: React.FC<{ data: IStageData }> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <section className="my-20 padding">
      <div>
        <div className="relative flex flex-col justify-center items-center w-full overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="flex justify-center items-center gap-3 pb-4">
            <div className="bg-primary-400 w-[148px] h-px"></div>

            <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular text-nowrap">
              Stage of Fertility
            </span>
            <div className="bg-primary-400 w-[148px] h-px"></div>
          </div>

          {/* Content */}
          {/* <div className="z-10 relative flex flex-col justify-center items-center bg-white/30 backdrop-blur-sm mx-3 p-16 md:px-20 rounded-2xl text-white text-center"> */}
          <h3 className="mb-10 font-semibold text-text-500 text-center text-wrap typography-h2">
            Which Stage of Fertility Are You In?
          </h3>
          <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full">
            {data?.records?.map((stage, index) => (
              <button
                onClick={() => setOpenModal(true)}
                key={index}
                className="flex flex-col justify-center items-center space-y-2 bg-background-200 hover:bg-primary-50 shadow shadow-primary-100/30 hover:shadow-md m-2 mx-0 lg:mx-4 p-4 border rounded-3xl hover:scale-[101%] active:scale-95 transition-all duration-200 ease-in-out cursor-pointer "
              >
                <div className="rounded-full size-24 overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    src={stage.image}
                    alt={stage.title}
                    className="mb-2 w-full h-full object-cover"
                  />
                </div>
                <h4 className="flex items-center gap-2 font-bold text-secondary-500 typography-h4 lg:typography-h3">
                  {stage.title}{" "}
                </h4>
                <p
                  className="mt-2 mb-4 text-text-200 text-center typography-paragraph-regular "
                  dangerouslySetInnerHTML={{ __html: stage.description || "" }}
                />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          {/* <button
              onClick={() => setOpenModal(true)}
              className="bg-secondary-500 shadow-[0px_8px_18px_0px_rgba(101,53,83,0.62)] px-4 md:px-11 py-2 md:py-4 border-[0.4px] border-secondary-100 rounded-full font-semibold text-lg transition-colors duration-300 cursor-pointer typography-h4"
            >
              Book an Appointment
            </button> */}
        </div>
        {/* </div> */}
      </div>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
};

export default FertilityStageSelection;
