import React from "react";
import { motion } from "motion/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import {
  IserviceData,
  IserviceRecord,
} from "@/app/services/interfaces/services.interface";
const ClinicServices: React.FC<{ data: IserviceData }> = ({ data }) => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 w-full">
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

          <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
            {`Our Services`}
          </h2>
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
        </div>
        <p className="pt-4 font-semibold text-text-500 typography-h3">
          Services We’re Providings
        </p>
      </div>
      <div className="gap-10 grid grid-cols-1 lg:grid-cols-3 xl:grid-col-4 py-10 pb-20">
        {data?.records?.map((item: IserviceRecord, index: number) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true, amount: 0.4 }}
            key={index}
            className="w-full h-full"
          >
            <Link
              href={`/services/${item?.slug}`}
              className="flex justify-between items-center h-full"
            >
              <div
                className="group relative flex flex-col justify-center bg-primary-50 hover:bg-primary-100 p-7 lg:p-10 rounded-tl-[50px] rounded-br-[50px] overflow-hidden transition-colors duration-300 w-full"
                key={index}
              >
                <div className="w-28 h-28">
                  <Image
                    src={item?.icon}
                    alt="icons1"
                    width={400}
                    height={400}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-2 pt-4">
                  <div className="flex justify-between w-full">
                    {" "}
                    <h2 className="font-bold typography-h3">
                      {item?.name}{" "}
                    </h2>{" "}
                    <button className="cursor-pointer">
                      <IoArrowForwardOutline
                        size={24}
                        className="text-primary-500 -rotate-40"
                      />
                    </button>
                  </div>
                  <p
                    className="pt-1.5 font-medium text-text-400 line-clamp-4 leading-normal typography-paragraph-regular prose"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClinicServices;
