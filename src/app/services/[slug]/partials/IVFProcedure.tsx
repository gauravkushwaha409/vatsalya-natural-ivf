"use client";
import { motion } from "motion/react";

import Image from "next/image";
import React from "react";

const steps = [
  {
    id: "01",
    title: "Ovarian Stimulation",
    description:
      "Hormone injections are given to help the ovaries produce several mature eggs.",
    image: "/service/ivfsteps.svg",
  },
  {
    id: "02",
    title: "Egg Retrieval",
    description:
      "A minor procedure is performed to collect the matured eggs from the ovaries.",
    image: "/service/ivfsteps.svg",
  },
  {
    id: "03",
    title: "Fertilization",
    description:
      "Collected eggs are combined with sperm in the lab to allow fertilization.",
    image: "/service/ivfsteps.svg",
  },
  {
    id: "04",
    title: "Embryo Transfer",
    description:
      "Healthy embryos are transferred into the uterus to achieve pregnancy.",
    image: "/service/ivfsteps.svg",
  },
  {
    id: "05",
    title: "Fertilization",
    description:
      "Collected eggs are combined with sperm in the lab to allow fertilization.",
    image: "/service/ivfsteps.svg",
  },
  {
    id: "06",
    title: "Embryo Transfer",
    description:
      "Healthy embryos are transferred into the uterus to achieve pregnancy.",
    image: "/service/ivfsteps.svg",
  },
];

const IVFProcedure = () => {
  return (
    <div className="padding">
      <p className="text-[33px] text-[#353535] leading-[150%] tracking-[-2%] font-bold mb-5">
        IVF Procedure : Step-by-step
      </p>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {steps.map((step, index) => (
          <motion.div
            initial={{
              y: 80,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                stiffness: 10,
                delay: index * 0.7,
              },
            }}
            key={step.id}
            className="relative bg-white shadow-[0px_0px_32px_0px_#00000008] rounded-[30px] py-[36px] px-[32px] max-w-[405px] w-full"
          >
            <div className="w-[64px] h-[64px] rounded-[20px] bg-[#FCEFEF66] flex items-center justify-center">
              <p className="text-[32px] leading-[21.78px] tracking-[-2%] text-primary-500 font-extrabold">
                {step.id}
              </p>
            </div>

            <div className="w-full max-w-[341px] mt-2">
              <p className="text-[27px] leading-[150%] tracking-[-4%] font-extrabold text-[#3A3A3A] mb-2">
                {step.title}
              </p>
              <p className="text-[#777777] text-[13px] leading-[155%] font-medium">
                {step.description}
              </p>
            </div>

            <div className="absolute right-0 top-0 w-[126px] h-[126px]">
              <Image
                src={step.image}
                alt={step.title}
                width={64}
                height={64}
                className="w-full h-full object-fill"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IVFProcedure;
