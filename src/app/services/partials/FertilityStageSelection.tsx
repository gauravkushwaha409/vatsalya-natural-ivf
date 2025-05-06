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
    setSelectedIndex(index);
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
          Which Stage of Fertility Are You In?
        </h3>

        {/* Stage cards */}
        <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full">
          {data?.records?.map((stage, index) => {
            const isSelected = selectedIndex === index;

            return (
              <button
                key={index}
                onClick={() => handleStageSelect(index)}
                className={`relative flex flex-col justify-center items-center space-y-2 bg-background-200 shadow m-2 mx-0 lg:mx-4 p-4 border rounded-3xl transition-all duration-200 ease-in-out cursor-pointer 
                  ${
                    isSelected
                      ? "border-primary-500 bg-primary-50 shadow-md scale-[101%]"
                      : "hover:bg-primary-50 shadow-primary-100/30 hover:shadow-md hover:scale-[101%]"
                  } active:scale-95`}
              >
                {/* Icon */}
                <div className="absolute top-2 right-2">
                  {isSelected ? (
                    <CheckCircle className="text-primary-500 w-6 h-6" />
                  ) : (
                    <Circle className="text-muted-foreground w-6 h-6" />
                  )}
                </div>

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
                  {stage.title}
                </h4>

                <p
                  className="mt-2 mb-4 text-text-200 text-center typography-paragraph-regular"
                  dangerouslySetInnerHTML={{
                    __html: stage.description || "",
                  }}
                />
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
