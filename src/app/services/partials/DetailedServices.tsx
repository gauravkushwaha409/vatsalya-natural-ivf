"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";
import {
  IFertilityCareData,
  IFertilityCareWhenToSeeListItemService,
} from "../interfaces/fertilitycare.interface";

interface IFertilityCare {
  data: IFertilityCareData;
}
const DetailedServices: React.FC<IFertilityCare> = ({ data }) => {
  return (
    <section>
      <div className="bg-[#FDF7F7] padding pt-10 lg:pt-20 overflow-hidden">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="flex flex-col justify-center items-center pb-8 text-center"
        >
          <div className="flex justify-center items-center gap-3 pb-4">
            <div className="bg-primary-400 w-[148px] h-px"></div>

            <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
              detailed services
            </span>
            <div className="bg-primary-400 w-[148px] h-px"></div>
          </div>
          <h2 className="w-full lg:w-1/2 font-semibold text-text-500 text-center text-wrap typography-h2">
            Infertility Treatment
          </h2>
        </motion.div>

        <div className="flex lg:flex-row items-start flex-col lg:gap-10 ">
          <div className="flex flex-col gap-5 w-full lg:w-1/2 overflow-hidden">
            {data?.whenToSeeListItemService?.map(
              (item: IFertilityCareWhenToSeeListItemService, index: number) => (
                <motion.div
                  initial={{
                    y: 80,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.9,
                      stiffness: 10,
                      delay: index * 0.3,
                    },
                  }}
                  className="flex items-center gap-5"
                  key={index}
                >
                  <div
                    className="p-4 lg:p-4 rounded-full size-[4.625rem]"
                    style={{
                      background:
                        "linear-gradient(180deg, #F8E0DE 0%, #FFD2EE 100%)",
                    }}
                  >
                    <Image
                      src={item?.icon}
                      alt={item?.title + " icon"}
                      className="w-full h-full object-cover"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="flex flex-col w-10/12">
                    <span className="font-semibold text-primary-500 text-[18px] leading-[150%]">
                      {item?.title}
                    </span>

                    <p
                      className="pt-1.5 font-medium text-text-400 typography-paragraph-regular"
                      dangerouslySetInnerHTML={{ __html: item?.detail || "" }}
                    />
                  </div>
                </motion.div>
              )
            )}
          </div>
          <div className="flex justify-end w-full lg:w-1/2 ">
            <motion.div
              className="w-auto h-[34rem] -mt-10 "
              initial={{ x: 150, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  ease: "easeOut",
                },
              }}
            >
              <Image
                src="/service/treatment.svg"
                alt={`fertility`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
