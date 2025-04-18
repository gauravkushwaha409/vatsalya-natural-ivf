"use client";
import Image from "next/image";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";
import { IserviceData, IserviceRecord } from "../interfaces/services.interface";
import CustomPagination from "@/components/CustomPagination";
import usePaginationChange from "@/hooks/usePaginationChange";

interface IServiceCards {
  data: IserviceData;
}
const ServiceCards: React.FC<IServiceCards> = ({ data }) => {
  const { handlePageChange, currentPage } = usePaginationChange();

  return (
    <section className="padding">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 w-full">
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

          <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
            Our Vatsalya Family
          </h2>
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
        </div>
        <p className="pt-4 font-semibold text-text-500 typography-h3">
          {` Services We’re Providing`}
        </p>
      </div>
      <div className="gap-10 grid lg:grid-cols-3 xl:grid-col-4 py-10 pb-20">
        {data?.records?.map((item: IserviceRecord, index: number) => (
          <div>
            <Link
              key={index}
              href={`/services/${item?.slug}`}
              className="flex justify-between items-center"
            >
              <div
                className="group relative flex flex-col justify-center bg-primary-50 hover:bg-primary-100 p-7 lg:p-10 rounded-tl-[50px] rounded-br-[50px] aspect-[400/340] overflow-hidden transition-colors duration-300"
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
