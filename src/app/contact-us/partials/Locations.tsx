"use client";
import { useContactForm } from "@/hooks/contact/useContact";
import { ICenter } from "@/interface/center";
import Image from "next/image";
import React from "react";

interface LocationsProps {
  onSelectMap: (url: string) => void;
}

const Locations: React.FC<LocationsProps> = ({ onSelectMap }) => {
  const { centerData } = useContactForm();
  const centers = centerData?.data;

  return (
    <section className="py-20">
      <div className="flex justify-center items-center gap-3">
        <div className="border border-primary-500/50 border-t-1 w-20"></div>
        <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
          Locations
        </span>
        <div className="border border-primary-500/50 border-t-1 w-20"></div>
      </div>
      <h2 className="mt-5 font-semibold text-text-500 text-center typography-h3">
        Serving All Across Nepal
      </h2>
      <div className="gap-5 grid grid-cols-1 md:grid-cols-4 my-5">
        {centers?.records.map((center: ICenter, index: number) => (
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSelectMap(center.mapUrl);
              }
            }}
            className="flex gap-5 bg-white hover:bg-primary-50 shadow-md p-5 rounded-lg transition-colors duration-300 delay-75 cursor-pointer"
            key={index}
            onClick={() => onSelectMap(center.mapUrl)} // <- handle click
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
                {center?.name}
              </p>
              <p className="text-text-400 typography-paragraph-small">
                {center?.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
