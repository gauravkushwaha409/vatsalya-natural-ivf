"use client";
import React from "react";
import Image from "next/image";
import { useContactForm } from "@/hooks/contact/useContact";
import { ICenter } from "@/interface/center";

const Locations = () => {
  const { centerData } = useContactForm();
  const centers = centerData?.data;

  return (
    <section className="py-20">
      <div className="flex items-center gap-3 justify-center ">
        <div className="border border-primary-500/50 border-t-1 w-20"></div>
        <span className="text-primary-500 typography-paragraph-regular font-bold uppercase tracking-widest">
          Locations
        </span>
        <div className="border border-primary-500/50 border-t-1 w-20"></div>
      </div>
      <h1 className="typography-h3 font-semibold text-text-500 text-center mt-5">
        We are located across the country
      </h1>
      <div className="my-5 grid grid-cols-1 md:grid-cols-4 gap-5">
        {centers?.records.map((center: ICenter, index: number) => (
          <div
            className="bg-white rounded-lg p-5 flex gap-5 shadow-md hover:bg-primary-50 transition-colors duration-300 delay-75  cursor-pointer"
            key={index}
          >
            <div className="w-10">
              <Image
                src={center.icon}
                alt="icon"
                width={40}
                height={40}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-text-400 typography-paragraph-small">
                {center?.location}
              </p>
              <p className="text-text-400 typography-paragraph-small">
                {center?.phone.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
