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
    <section className=" padding">
      <div className="flex flex-col items-center ">
        <div className="flex items-center w-full justify-center gap-4 ">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-widest uppercase leading-[24px]">
            Our Vatsalya Family
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
        </div>
        <p className="typography-h3 font-semibold text-text-500 pt-4">
          {` Services We’re Providing`}
        </p>
      </div>
      <div className="py-10 pb-20 grid lg:grid-cols-3 xl:grid-col-4  gap-10">
        {data?.records?.map((item: IserviceRecord, index: number) => (
          <Link
            key={index}
            href={`/services/${item?.slug}`}
            className="flex items-center justify-between"
          >
            <div
              className="aspect-[400/340] relative rounded-tl-[50px] rounded-br-[50px] overflow-hidden bg-primary-50 hover:bg-primary-100 justify-center flex flex-col p-7 lg:p-10 duration-300 transition-colors group"
              key={index}
            >
              <div className="h-28 w-28">
                <Image
                  src={item?.icon}
                  alt="icons1"
                  width={400}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <div className="flex w-full justify-between">
                  {" "}
                  <h2 className="typography-h3 font-bold">
                    {item?.name}{" "}
                  </h2>{" "}
                  <button className="cursor-pointer">
                    <IoArrowForwardOutline
                      size={24}
                      className="-rotate-40 text-primary-500"
                    />
                  </button>
                </div>
                <p
                  className="typography-paragraph-regular font-medium text-text-400 pt-1.5 line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                />
              </div>
            </div>
          </Link>
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
