"use client";

import { useState } from "react";
import Image from "next/image";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";

interface IHowWeWorkStep {
  number: number;
  title: string;
}

interface IHowWeWorkData {
  title: string;
  subtitle: string;
  steps: IHowWeWorkStep[];
}

type HowWeWorkProps = {
  data: IHowWeWorkData;
};

const howWeWorkData = {
  steps: [
    { number: 1, title: "Consultation" },
    { number: 2, title: "Tests" },
    { number: 3, title: "Personalized Plan" },
    { number: 4, title: "Procedure" },
    { number: 5, title: "Pregnancy Test" },
    { number: 6, title: "Follow-up Care" },
  ],
};

const HowWeWork: React.FC<HowWeWorkProps> = ({ data }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="mb-10 md:mb-20 padding">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 py-3 md:gap-5">
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
        <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase tracking-[0.12rem] md:tracking-[0.18rem]">
          {data?.title}
        </h2>
        <span className="bg-primary-500 w-[4rem] md:w-[8.5rem] h-px" />
      </div>

      {/* Subtitle */}
      <p className="px-4 pb-8 font-bold text-center md:pb-16 text-text-500 typography-h2">
        {data?.subtitle}
      </p>

      {/* Steps */}
      <div className="flex items-center gap-4 md:gap-8">
        {howWeWorkData.steps.map((step, index) => (
          <div key={step.number} className="flex items-center gap-4">
            {/* Step Circle */}
            <div className="flex flex-col items-center  w-full min-w-[180px] gap-4">
              <button
                onClick={() =>
                  setActiveStep(activeStep === step.number ? null : step.number)
                }
                className="relative w-[120px] h-[120px] flex items-center justify-center cursor-pointer"
              >
                {/* Background */}
                <div className="absolute inset-0 rounded-full bg-[#FF6F6114]" />
                <div className="absolute border-8 border-white rounded-full inset-3" />

                {/* Animated Circle & Dot */}
                <svg
                  className="absolute inset-0 w-full h-full "
                  viewBox="0 0 80 80"
                >
                  <circle
                    cx="40"
                    cy="40"
                    r="28"
                    fill="none"
                    stroke="#FF6F61"
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{
                      strokeDasharray: 176,
                      strokeDashoffset: activeStep === step.number ? 0 : 176,
                      transition: "stroke-dashoffset 1.4s ease-in-out",
                      opacity: activeStep === step.number ? 1 : 0,
                      transformOrigin: "40px 40px",
                      transform: "rotate(-90deg)",
                    }}
                  />
                  {(() => {
                    // Calculate dot position based on step number
                    const angle = (step.number - 1) * 60 - 90; // 60 degrees apart, starting from top
                    const radian = (angle * Math.PI) / 180;
                    const dotX = 40 + 28 * Math.cos(radian);
                    const dotY = 40 + 28 * Math.sin(radian);

                    return (
                      <circle
                        cx={dotX}
                        cy={dotY}
                        r="4"
                        fill="#FF6F61"
                        style={{
                          opacity: activeStep === step.number ? 0 : 1,
                          transition: "opacity 0.3s ease-in-out",
                        }}
                      />
                    );
                  })()}
                </svg>

                {/* Step Number */}
                <span className="absolute text-[32px] font-extrabold text-[#FF6F61]">
                  {step.number}
                </span>
              </button>

              <p className="text-[#3A3A3A] text-[20px] font-bold text-left leading-[150%] tracking-[-3%]">
                {step.title}
              </p>
            </div>

            {/* Connector */}
            {index < howWeWorkData.steps.length - 1 && (
              <div className="items-center hidden -mt-4 -ml-3 md:flex shrink-0">
                <Image
                  src="/home/svg/connector.svg"
                  alt="connector line"
                  width={500}
                  height={500}
                  className="object-cover w-8 "
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        onClick={() => handleAppointmentClick()}
        className="flex items-center gap-3 px-8 py-4 mx-auto font-extrabold text-white border rounded-full cursor-pointer bg-secondary-500 border-secondary-200 typography-paragraph-regular mt-14"
      >
        Book your Appointment
      </button>

      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default HowWeWork;
