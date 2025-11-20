"use client";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import {
  IServiceDetailsService,
  IServiceDetailsServiceDetailsListSection,
} from "../../interfaces/serviceDetails.interface";

interface IServiceDescription {
  data: IServiceDetailsService;
}

import { motion } from "motion/react";

const ServiceDescription: React.FC<IServiceDescription> = ({ data }) => {
  return (
    <article className="flex flex-col gap-5 py-10 text-text-400 text-justify">
      {data?.serviceDetailsListSection?.map(
        (section: IServiceDetailsServiceDetailsListSection, index: number) => (
          <div key={index} className="flex flex-col gap-2">
            <div>
              <motion.h4
                className="pb-2 font-semibold typography-h2 text-secondary-500"
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    stiffness: 10,
                    delay: 0.2,
                  },
                }}
              >
                {section?.title}
              </motion.h4>
              <motion.p
                className="max-w-none prose li-check"
                dangerouslySetInnerHTML={{ __html: section?.description }}
                initial={{
                  y: 80,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.3,
                  },
                }}
              />
            </div>

            {section?.listItems && (
              <div className="flex flex-col gap-2">
                {section.listItems.map((item) => (
                  <motion.div
                    className="flex items-start gap-2"
                    key={item._id}
                    initial={{
                      y: 80,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.3,
                      },
                    }}
                  >
                    <span className=" inline-flex justify-center items-center bg-secondary-500  p-0.5 rounded-full size-5 shrink-0">
                      <IoMdCheckmark className="size-full text-white" />
                    </span>
                    <div>
                      <p className="font-medium text-secondary-500 typography-paragraph-regular">
                        {item?.listItemTitle}
                      </p>
                      <div
                        className="max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: item?.listItemDescription,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </article>
  );
};

export default ServiceDescription;
