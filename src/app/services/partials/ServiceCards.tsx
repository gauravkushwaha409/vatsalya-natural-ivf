"use client";
import Image from "next/image";
import React from "react";
import icon1 from "@/assests/icons/services/infertility.svg";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";

const ServiceCards = () => {
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
        {Array.from({ length: 10 }, (_, index) => (
          <Link
            key={index}
            href="/services/details"
            className="flex items-center justify-between"
          >
            <div
              className="aspect-[400/340] relative rounded-tl-[50px] rounded-br-[50px] overflow-hidden bg-primary-50 hover:bg-primary-100 justify-center flex flex-col p-7 lg:p-10 duration-300 transition-colors group"
              key={index}
            >
              <div className="h-28 w-28">
                <Image src={icon1} alt="icons1" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-2 pt-4">
                <div className="flex w-full justify-between">
                  {" "}
                  <h2 className="typography-h3 font-bold">
                    Infertility Diagnosis
                  </h2>{" "}
                  <button className="cursor-pointer">
                    <IoArrowForwardOutline
                      size={24}
                      className="-rotate-40 text-primary-500"
                    />
                  </button>
                </div>
                <span className="typography-paragraph-regular font-medium text-text-400 pt-1.5">
                  Expand your family possibilities with our confidential,
                  compassionate, and expertly guided donor treatment services,
                  designed to support you.
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
