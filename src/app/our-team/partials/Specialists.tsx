"use client";
import PATHS from "@/utils/path";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  IOurExpertsData,
  IOurExpertsRecord,
} from "../interface/ourExperts.interface";
import buterflysvg from "./../../../assests/icons/butterflyExpertise.svg";

interface SpecialistsProps {
  data: IOurExpertsData;
}
type TabsID = "bod" | "specialist" | "management";
const tabs: {
  id: TabsID;
  name: string;
}[] = [
  {
    id: "bod",
    name: "Board of Directors",
  },
  {
    id: "specialist",
    name: "IVF Specialists",
  },
  {
    id: "management",
    name: "Management Team",
  },
];

const Specialists: React.FC<SpecialistsProps> = ({ data }) => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<TabsID>(tabs[0].id);

  return (
    <section className="py-20 padding">
      <div className="flex flex-col items-center pb-4">
        {/* <div className="flex justify-center items-center gap-4 w-full">
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

          <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
            Our Vatsalya Family
          </h2>
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
        </div>
        <p className="mb-10 pt-4 font-semibold text-text-500 text-center typography-h3">
          A team of experts dedicated to your parenthood journey
        </p> */}
        {activeTab === "bod" && (
          <div className="flex md:flex-row flex-col gap-10 col-span-2 sm:col-span-3 lg:col-span-4">
            <div
              className="relative rounded-tl-[50px] rounded-br-[50px] w-[18.125rem] aspect-[290/336] overflow-hidden shrink-0"
              // style={{
              //   background:
              //     "linear-gradient(to right, #EBC0DB 0%, #FFD2CE 100%)",
              // }}
            >
              <Image
                src="/team/director.png"
                alt="heropic"
                width={1920}
                height={1080}
                className="z-10 absolute w-full h-full object-cover"
              />
              {/* <div className="top-10 -right-3 z-0 absolute h-36">
                <Image
                  src={buterflysvg}
                  alt="heropic"
                  width={1920}
                  height={1080}
                  className="w-full h-full"
                />
              </div> */}
            </div>
            <div className="space-y-[0.88rem]">
              <h2 className="font-bold leading-[150%] typography-h2">
                Mr. Prashant Subedi{" "}
              </h2>
              <p className="font-semibold text-text-500 typography-h4">
                Managing Director
              </p>
              <p className="text-text-400 leading-[150%] typography-paragraph-small">
                Mr. Prashant Subedi leads Vatsalya with a clear and inspiring
                vision rooted in excellence, compassion, and innovation within
                the healthcare sector. As the Managing Director, he plays a
                pivotal role in shaping the organization’s strategic direction
                and culture. With years of comprehensive leadership experience
                in healthcare management, Mr. Subedi combines business acumen
                with a profound sense of empathy, ensuring that the values of
                integrity, transparency, and patient-centric care remain at the
                heart of everything Vatsalya does. Under his dynamic leadership,
                <br />
                Vatsalya has evolved from a promising healthcare center into a
                nationally recognized name in fertility and wellness services.
                His deep commitment to delivering accessible, ethical, and
                world-class medical care has not only enhanced the quality of
                services but also established a strong foundation of trust with
                patients and their families. By fostering a collaborative work
                environment and investing in continuous professional
                development, Mr. Subedi empowers his team to excel and innovate
                in their respective fields.
              </p>
            </div>
          </div>
        )}

        <div className="flex p-2 border border-secondary-50 rounded-full max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${
                tab.id == activeTab ? "text-primary-500" : ""
              } relative px-2 py-1 md:px-5 md:py-2 max-md:text-xs typography-paragraph-large cursor-pointer font-semibold ease-in-out rounded-full hover:border-primary-500 transition-colors delay-75 duration-300`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
              {tab.id == activeTab && (
                <motion.div
                  layoutId="our-team-tab"
                  className="-z-10 absolute inset-0 bg-primary-50 rounded-full"
                />
              )}
            </button>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        key={activeTab}
        className="gap-x-10 gap-y-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-10"
      >
        {/* {activeTab === "bod" && (
          <div className="flex md:flex-row flex-col gap-10 col-span-2 sm:col-span-3 lg:col-span-4">
            <div
              className="relative rounded-tl-[50px] rounded-br-[50px] w-[18.125rem] aspect-[290/336] overflow-hidden shrink-0"
              style={{
                background:
                  "linear-gradient(to right, #EBC0DB 0%, #FFD2CE 100%)",
              }}
            >
              <Image
                src="/team/director.png"
                alt="heropic"
                width={1920}
                height={1080}
                className="z-10 absolute w-full h-full object-cover"
              />
              <div className="top-10 -right-3 z-0 absolute h-36">
                <Image
                  src={buterflysvg}
                  alt="heropic"
                  width={1920}
                  height={1080}
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="space-y-[0.88rem]">
              <h2 className="font-bold leading-[150%] typography-h2">
                Mr. Prashant Subedi{" "}
              </h2>
              <p className="font-semibold text-text-500 typography-h4">
                Managing Director
              </p>
              <p className="text-text-400 leading-[150%] typography-paragraph-small">
                Mr. Prashant Subedi leads Vatsalya with a clear vision of
                excellence, compassion, and innovation in healthcare. As
                Managing Director, he brings extensive leadership experience and
                a deep commitment to delivering world-class fertility and
                wellness services. Under his guidance, Vatsalya has grown into a
                trusted name, known for patient-centered care and ethical
                practices. Mr. Subedi’s unwavering dedication to continuous
                improvement, team development, and community impact drives
                Vatsalya’s success and future ambitions, ensuring that every
                family who trusts Vatsalya finds hope, support, and world-class
                expertise.
              </p>
            </div>
          </div>
        )} */}
        {data?.records?.map((items: IOurExpertsRecord, index: number) => (
          <div
            key={items?.id}
            className="relative aspect-[290/336]"
            onMouseEnter={() => setHoveredCardId(index)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <div
              className="relative rounded-tl-[50px] rounded-br-[50px] aspect-[290/336] overflow-hidden"
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
                className="z-10 absolute w-full h-full object-cover"
              />
              <div className="top-10 -right-3 z-0 absolute h-36">
                <Image
                  src={buterflysvg}
                  alt="heropic"
                  width={1920}
                  height={1080}
                  className="w-full h-full"
                />
              </div>
              <div className="bottom-4 left-5 z-30 absolute">
                {" "}
                <p className="font-semibold text-white typography-paragraph-large">
                  {items?.name}
                </p>
                <span className="text-text-50 typography-paragraph-small">
                  {items?.position}
                </span>
              </div>
              <div
                className={`absolute -bottom-10 w-full bg-gradient-to-t from-black/40 to-transparent h-full left-0 z-20 
    transition-opacity duration-300 ease-in-out 
    ${hoveredCardId === index ? "opacity-0" : "opacity-100"}`}
              ></div>
            </div>
            {hoveredCardId === index && (
              <div className="-bottom-8 z-50 absolute w-full">
                <div
                  className={`backdrop-blur-sm  rounded-lg  bg-white/60 p-3  shadow-sm  mx-3 
    transition-opacity duration-700 ease-in-out ${
      hoveredCardId === index ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
                >
                  <p className="font-bold text-secondary-500 typography-paragraph-large">
                    {items?.name}
                  </p>
                  <p className="mt-1 mb-2 font-medium text-secondary-500 typography-paragraph-small">
                    {items?.position}
                  </p>
                  <div className="flex items-center text-nowrap">
                    <Link href={`${PATHS.teamDetails}/${items?.slug}`}>
                      <button className="px-5 py-2 border border-text-400 rounded-full font-medium text-text-400 cursor-pointer typography-caption">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Specialists;
