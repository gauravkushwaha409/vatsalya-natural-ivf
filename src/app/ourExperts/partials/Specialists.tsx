"use client";
import Image from "next/image";
import React, { useState } from "react";

import buterflysvg from "./../../../assests/icons/butterflyExpertise.svg";
import { ivfTeamData } from "@/data/expertise";
import { useRouter } from "next/navigation";

const Specialists = () => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const router = useRouter();
  const handleViewMore = () => {
    router.push("/ourExperts/profile");
  };
  return (
    <section className="py-20 px-5 lg:px-20  ">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3 pb-5 ">
          <div className="border border-primary-500/80 border-t-1 w-20"></div>

          <span className="text-primary-500 typography-paragraph-regular font-bold uppercase tracking-widest">
            Meet Our Specialists
          </span>
          <div className="border border-primary-500/80 border-t-1 w-20"></div>
        </div>
        <p className="typography-h4 font-semibold text-text-500">
          A team of experts dedicated to your parenthood journey
        </p>
      </div>
      <div className="my-10 grid  grid-cols-2  sm:grid-cols-3  lg:grid-cols-4 gap-y-10 gap-x-10">
        {ivfTeamData?.map((items) => (
          <div
            key={items?.id}
            className="relative aspect-[290/336] "
            onMouseEnter={() => setHoveredCardId(items.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <div
              className=" aspect-[290/336]  relative rounded-tl-[50px] rounded-br-[50px] overflow-hidden   "
              style={{
                background:
                  "linear-gradient(to right, #EBC0DB 0%, #FFD2CE 100%)",
              }}
            >
              <Image
                src={items?.image}
                alt="heropic"
                width={1920}
                height={1080}
                className="w-full h-full object-cover absolute z-10 "
              />
              <div className="h-36 absolute -right-3 top-10 z-0">
                <Image
                  src={buterflysvg}
                  alt="heropic"
                  width={1920}
                  height={1080}
                  className="w-full h-full  "
                />
              </div>
              <div className="absolute bottom-4 left-5 z-30">
                {" "}
                <p className="typography-paragraph-large font-semibold text-white">
                  {items?.name}
                </p>
                <span className="typography-paragraph-small text-text-50">
                  {items?.position}
                </span>
              </div>
              <div
                className={`absolute -bottom-10 w-full bg-gradient-to-t from-black/40 to-transparent h-full left-0 z-20 
    transition-opacity duration-300 ease-in-out 
    ${hoveredCardId === items.id ? "opacity-0" : "opacity-100"}`}
              ></div>{" "}
            </div>
            {hoveredCardId === items.id && (
              <div className="absolute -bottom-8 z-50 w-full  ">
                <div
                  className={`backdrop-blur-sm  rounded-lg  bg-white/60 p-3  shadow-sm  mx-3 
    transition-opacity duration-700 ease-in-out ${
      hoveredCardId === items.id ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
                >
                  <p className="typography-paragraph-large font-bold text-secondary-500">
                    {" "}
                    {items?.name}
                  </p>
                  <p className="typography-paragraph-small font-medium text-secondary-500 mt-1 mb-2">
                    {" "}
                    {items?.position}
                  </p>
                  <div className="flex items-center  text-nowrap">
                    <button
                      onClick={() => handleViewMore()}
                      className="typography-caption px-5 py-2 cursor-pointer font-medium text-text-400 border rounded-full border-text-400"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialists;
