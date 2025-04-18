"use client";
import fertility from "@/assests/icons/services/fertilityCare.svg";
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
const FertilityCare: React.FC<IFertilityCare> = ({ data }) => {
  return (
    <section>
      <div className="bg-gradient-to-r from-[#EBC0DB] to-[#FFD2CE] px-5 lg:px-10 py-20">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="flex flex-col justify-center items-center pb-8 text-center"
        >
          <div className="flex justify-center items-center gap-3 pb-4">
            <div className="bg-primary-400 w-[148px] h-px"></div>

            <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
              When to Seek Fertility Care{" "}
            </span>
            <div className="bg-primary-400 w-[148px] h-px"></div>
          </div>
          <h2 className="w-full lg:w-1/2 font-semibold text-text-500 text-center text-wrap typography-h2">
            Recognizing the Signs That Its Time to See a Fertility Specialist
          </h2>
        </motion.div>

        <div className="flex lg:flex-row flex-col gap-10 p-2 lg:p-10">
          <div className="flex flex-col gap-5 w-full lg:w-1/2 overflow-hidden">
            {data?.whenToSeeListItemService?.map(
              (item: IFertilityCareWhenToSeeListItemService, index: number) => (
                <motion.div
                  initial={{
                    x: index % 2 === 0 ? -100 : 100,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.5,
                      stiffness: 10,
                      delay: index * 0.1,
                    },
                  }}
                  viewport={{ once: true }}
                  className="flex items-center gap-5"
                  key={index}
                >
                  <div className="bg-[#FFD2EE] p-4 lg:p-3 rounded-full w-16 h-16">
                    <Image
                      src={item?.icon}
                      alt={`troubleConceiving`}
                      className="w-full h-full"
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="flex flex-col w-10/12">
                    <span className="font-medium text-primary-500 typography-h4">
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
          <div className="flex justify-end w-full lg:w-1/2">
            <div className="w-auto h-auto">
              <Image
                src={fertility}
                alt={`fertility`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FertilityCare;
