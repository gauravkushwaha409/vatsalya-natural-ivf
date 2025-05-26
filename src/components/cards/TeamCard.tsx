"use client";
import buterflysvg from "@/assests/icons/butterflyExpertise.svg";
import PATHS from "@/utils/path";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  IOurExpertsData,
  IOurExpertsRecord,
} from "../../app/our-team/interface/ourExperts.interface";
interface Props {
  data: IOurExpertsData;
  showView?: boolean;
}
const TeamCard: React.FC<Props> = ({ data, showView = true }) => {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        className="gap-x-10 gap-y-10 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 my-5 lg:my-10"
      >
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
                  {showView && (
                    <div className="flex items-center text-nowrap">
                      <Link href={`${PATHS.teamDetails}/${items?.slug}`}>
                        <button className="px-5 py-2 border border-text-400 rounded-full font-medium text-text-400 cursor-pointer typography-caption">
                          View Details
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamCard;
