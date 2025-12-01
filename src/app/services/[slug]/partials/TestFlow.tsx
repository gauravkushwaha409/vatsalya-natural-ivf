"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const TestFlow = () => {
  return (
    <>
      <div className="flex items-center mt-38 overflow-hidden flex-col lg:flex-row justify-between">
        <motion.div
          className="w-full lg:w-[600px] h-full lg:h-[493px] mb-10 lg:mb-0"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
        >
          <Image
            src="/service/test1.svg"
            alt="Test 1"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="u-padding-l lg:pl-0 padding-r max-w-[652px] w-full">
          <p className="text-[#090909] text-[27px] leading-[150%] font-bold mb-4">
            TESA-MESA Treatment
          </p>

          <motion.p
            className="text-[16px] leading-[190%] tracking-[-1%] text-text-500"
            initial={{
              y: 60,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                stiffness: 10,
                delay: 0.2,
              },
            }}
          >
            TESA or Testicular Sperm Aspiration is a procedure used in IVF in
            which a needle is inserted in the testes and the fluid and tissue is
            aspirated with negative pressure. The aspirated tissue is then sent
            to the IVF laboratory for processing and extraction of the sperm
            cells extracted for later use in the ICSI process. Microsurgical
            Epididymal Sperm Aspiration (MESA) is a procedure which is used in
            male infertility disorders like obstructive azoospermia.
          </motion.p>
        </div>
      </div>

      <div className="flex items-center mt-18 overflow-hidden flex-col lg:flex-row justify-between">
        <div className="padding-r pr-0 u-padding-l max-w-[652px] w-full">
          <p className="text-[#090909] text-[27px] leading-[150%] font-bold mb-4">
            TESA-MESA Treatment
          </p>

          <motion.p
            className="text-[16px] leading-[190%] tracking-[-1%] text-text-500"
            initial={{
              y: 60,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                stiffness: 10,
                delay: 0.2,
              },
            }}
          >
            TESA or Testicular Sperm Aspiration is a procedure used in IVF in
            which a needle is inserted in the testes and the fluid and tissue is
            aspirated with negative pressure. The aspirated tissue is then sent
            to the IVF laboratory for processing and extraction of the sperm
            cells extracted for later use in the ICSI process. Microsurgical
            Epididymal Sperm Aspiration (MESA) is a procedure which is used in
            male infertility disorders like obstructive azoospermia.
          </motion.p>
        </div>

        <motion.div
          className="w-full lg:w-[600px] h-full lg:h-[493px] mt-10 lg:mt-0"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
        >
          <Image
            src="/service/test2.svg"
            alt="Test 1"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="flex items-center my-18 overflow-hidden flex-col lg:flex-row justify-between">
        <motion.div
          className="w-full lg:w-[600px] h-full lg:h-[493px] mb-10 lg:mb-0"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
        >
          <Image
            src="/service/test1.svg"
            alt="Test 1"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="u-padding-l lg:pl-0 padding-r max-w-[652px] w-full">
          <p className="text-[#090909] text-[27px] leading-[150%] font-bold mb-4">
            TESA-MESA Treatment
          </p>

          <motion.p
            className="text-[16px] leading-[190%] tracking-[-1%] text-text-500"
            initial={{
              y: 60,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                stiffness: 10,
                delay: 0.2,
              },
            }}
          >
            TESA or Testicular Sperm Aspiration is a procedure used in IVF in
            which a needle is inserted in the testes and the fluid and tissue is
            aspirated with negative pressure. The aspirated tissue is then sent
            to the IVF laboratory for processing and extraction of the sperm
            cells extracted for later use in the ICSI process. Microsurgical
            Epididymal Sperm Aspiration (MESA) is a procedure which is used in
            male infertility disorders like obstructive azoospermia.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default TestFlow;
