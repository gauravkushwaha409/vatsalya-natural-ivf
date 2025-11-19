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
      <div className="gap-10 grid grid-cols-1 lg:grid-cols-4 xl:grid-col-4 py-10 pb-20">
        {data?.records?.map((item: IserviceRecord, index: number) => (
          <div key={index} className="w-full h-full">
            <Link
              href={`/services/${item?.slug}`}
              className="flex justify-between items-center h-full"
            >
              <div
                className="relative flex flex-col justify-center bg-primary-50 z-10 p-7 rounded-tl-[80px] rounded-br-[80px] w-full  transition-all duration-600 transform hover:-translate-y-5 ease-in-out"
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
                    <h3 className="font-bold text-[22px] leading-[120%] tracking-[-2%] text-[#1A1A1A]">
                      {item?.name}
                    </h3>
                    <button
                      aria-label={`Go to ${item?.name}`}
                      className="cursor-pointer"
                    >
                      <IoArrowForwardOutline
                        size={24}
                        className="text-primary-500 -rotate-40"
                      />
                    </button>
                  </div>
                  <p
                    className="font-medium text-[#667085] line-clamp-4 text-[13px] leading-[160%] tracking-[-1%] prose"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  />
                </div>
              </div>
            </Link>
          </div>
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
