"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import { useState } from "react";
import { IStageData } from "../interfaces/stage.interface";
import { CheckCircle, Circle } from "lucide-react"; // Circle as unselected icon

const FertilityStageSelection: React.FC<{ data: IStageData }> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleStageSelect = (index: number) => {
    setOpenModal(true); // Open modal when a stage is selected
  };

  return (
    <section className="my-20 padding">
      <div className="relative flex flex-col justify-center items-center w-full overflow-hidden">
        {/* Header */}
        <div className="flex justify-center items-center gap-3 pb-4">
          <div className="bg-primary-400 w-[148px] h-px"></div>
          <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular text-nowrap">
            Stage of Fertility
          </span>
          <div className="bg-primary-400 w-[148px] h-px"></div>
        </div>

        <h3 className="mb-10 font-semibold text-text-500 text-center text-wrap typography-h2">
          Which Stage of Fertility are You in?
        </h3>

        {/* Stage cards */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full">
          {data?.records?.map((stage, index) => {
            return (
              <button
                key={index}
                className={`relative flex flex-col p-10  bg-white shadow m-2 mx-0 lg:mx-4  border rounded-3xl transition-all duration-200 ease-in-out cursor-pointer 
               active:scale-95 group`}
              >
                <div className="rounded-full size-20 overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    src={stage.image}
                    alt={stage.title}
                    className="mb-2 w-full h-full object-cover border border-red-500"
                  />
                </div>

                <h4 className=" font-bold text-text-500 typography-h4 mt-3.5 text-left">
                  {stage.title}
                </h4>

                <p
                  className="mt-2.5  text-text-400 font-medium  typography-paragraph-regular text-left"
                  dangerouslySetInnerHTML={{
                    __html: stage.description || "",
                  }}
                />
                <div className="absolute top-0 left-0 w-full h-full delay-100 bg-white opacity-0  group-hover:opacity-100 transition-all duration-200 ease-in rounded-3xl">
                  <div className="bg-secondary-50 w-full h-full rounded-3xl flex justify-center items-center">
                    <button
                      onClick={() => handleStageSelect(index)}
                      style={{
                        boxShadow:
                          "0px 5.486px 12.343px 0px rgba(215, 101, 120, 0.33)",
                      }}
                      className="bg-secondary-500 flex gap-3 items-center px-8 py-4 border border-secondary-200 rounded-full font-manrope font-extrabold text-white typography-paragraph-regular cursor-pointer "
                    >
                      Book an Appointment
                    </button>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
};

export default FertilityStageSelection;
