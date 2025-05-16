"use client";
import CustomPagination from "@/components/CustomPagination";
import usePaginationChange from "@/hooks/usePaginationChange";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IserviceData, IserviceRecord } from "../interfaces/services.interface";

interface IServiceCards {
  data: IserviceData;
}
const ServiceCards: React.FC<IServiceCards> = ({ data }) => {
  const { handlePageChange, currentPage } = usePaginationChange();

  return (
    <section className="padding">
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
                className="group relative flex flex-col justify-center bg-primary-50 hover:bg-primary-100 p-7 lg:p-10 rounded-tl-[50px] rounded-br-[50px] w-full overflow-hidden transition-colors duration-300"
                key={index}
              >
                <div className="size-[7.25rem]">
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
      {data?.totalPages > 1 && (
        <CustomPagination
          currentPage={currentPage}
          onPageChange={handlePageChange}
          pageCount={data?.totalPages}
          perPage={5}
          totalItems={10}
        />
      )}
    </section>
  );
};

export default ServiceCards;
