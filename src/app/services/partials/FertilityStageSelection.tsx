"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Image from "next/image";
import { useState } from "react";
const stages = [
  {
    name: "Having Trouble Conceiving",
    description:
      "If you have been trying to conceive for over a year without success, it may be time to seek help.",
    image: "/home/stages/stage-1.jpg",
  },
  {
    name: "Irregular Menstrual Cycles",
    description:
      "If you have irregular or absent menstrual cycles, it may indicate an underlying issue.",
    image: "/home/stages/stage-2.png",
  },
  {
    name: "Age-Related Concerns",
    description:
      "If you are over 35 and have been trying to conceive for six months or more, it's advisable to consult a specialist.",
    image: "/home/stages/stage-3.jpg",
  },
  {
    name: "Previous Pregnancy Loss",
    description:
      "If you have experienced recurrent miscarriages or pregnancy loss, it's important to seek medical advice.",
    image: "/home/stages/stage-4.jpg",
  },
  {
    name: "Family History of Infertility",
    description:
      "If you have a family history of infertility or reproductive issues, it may be beneficial to consult a specialist.",
    image: "/home/stages/stage-5.jpg",
  },
];
const FertilityStageSelection = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <section className="my-20 padding">
      <div>
        <div className="relative flex flex-col justify-center items-center w-full overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="flex justify-center items-center gap-3 pb-4">
            <div className="bg-primary-400 w-[148px] h-px"></div>

            <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
              Stage of Fertility
            </span>
            <div className="bg-primary-400 w-[148px] h-px"></div>
          </div>

          {/* Content */}
          {/* <div className="z-10 relative flex flex-col justify-center items-center bg-white/30 backdrop-blur-sm mx-3 p-16 md:px-20 rounded-2xl text-white text-center"> */}
          <h3 className="mb-10 font-semibold text-text-500 text-center text-wrap typography-h2">
            Which Stage of Fertility Are You In?
          </h3>
          <div className="gap-6 grid grid-cols-3">
            {stages.map((stage, index) => (
              <button
                onClick={() => setOpenModal(true)}
                key={index}
                className="flex flex-col justify-center items-center space-y-2 bg-background-200 hover:bg-primary-50 shadow shadow-primary-100/30 hover:shadow-md m-2 mx-4 p-4 border rounded-3xl hover:scale-[101%] active:scale-95 transition-all duration-200 ease-in-out cursor-pointer"
              >
                <div className="rounded-full size-24 overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    src={stage.image}
                    alt={stage.name}
                    className="mb-2 w-full h-full object-cover"
                  />
                </div>
                <h4 className="flex items-center gap-2 font-bold text-secondary-500 typography-h4 lg:typography-h3">
                  {stage.name}{" "}
                  {/* <span>
                    <IoArrowForwardOutline size={24} className="-rotate-40" />
                  </span> */}
                </h4>
                <p className="mt-2 mb-4 text-text-200 text-center typography-paragraph-regular">
                  {stage.description}
                </p>
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
