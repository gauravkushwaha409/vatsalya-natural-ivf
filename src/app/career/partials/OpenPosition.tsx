"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowForwardOutline, IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import {
  IOpenPositionData,
  IOpenPositionRecord,
} from "../interfaces/openposition.interface";

interface IOpenPositionProps {
  data: IOpenPositionData;
}

const OpenPosition: React.FC<IOpenPositionProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-gradient-to-r from-[#EBC0DB] to-primary-100 py-16 md:py-24 w-full">
        <div className="padding">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex justify-center items-center gap-4 w-full max-w-3xl">
              {/* line  */}
              <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

              <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
                Open Positions
              </h2>
              {/* line  */}
              <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
            </div>

            <h1 className="font-semibold tracking-tight typography-h3">
              Career Opportunities
            </h1>
          </div>

          <div className="gap-10 grid grid-cols-1 md:grid-cols-2 my-10">
            {data?.records?.map((job: IOpenPositionRecord) => (
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    router.push("/career/" + job.slug);
                  }
                }}
                aria-label="Open Position"
                key={job.id}
                className="bg-white hover:bg-primary-50 shadow-[0px_3px_20.8px_1px_rgba(0,0,0,0.04)] p-[30px] rounded-[20px] transition-all duration-300 cursor-pointer"
                onClick={() => router.push("/career/" + job.slug)}
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold text-text-500 leading-[150%] typography-h4">
                    {job.title}
                  </h5>
                  <IoArrowForwardOutline
                    size={24}
                    className="text-primary-500 -rotate-40"
                  />
                </div>

                {/* Location & Job Type */}
                <div className="flex gap-2 py-5">
                  <div className="bg-primary-50 rounded-2xl">
                    <p className="flex items-center gap-1 px-3.5 py-2 font-medium text-primary-400 typography-paragraph-small">
                      <SlLocationPin /> {job.location}
                    </p>
                  </div>
                  <div className="bg-secondary-50 rounded-2xl">
                    <p className="flex items-center gap-1 px-3.5 py-2 font-medium text-secondary-500 typography-paragraph-small">
                      <IoTimeOutline /> {job.employment_type}
                    </p>
                  </div>
                </div>

                {/* Job Description */}
                <p
                  className="font-medium text-text-300 text-justify line-clamp-2 typography-paragraph-regular"
                  dangerouslySetInnerHTML={{ __html: job?.description || "" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPosition;
