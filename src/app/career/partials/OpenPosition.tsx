"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowForwardOutline, IoTimeOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const jobListings = [
  {
    id: 1,
    title: "Fertility Specialist",
    location: "Kathmandu, Nepal",
    jobType: "Full-time",
    description:
      "Experienced fertility specialist needed to diagnose and treat reproductive health issues, including IVF and assisted reproductive technologies.",
  },
  {
    id: 2,
    title: "Cardiologist",
    location: "New York, USA",
    jobType: "Part-time",
    description:
      "Seeking an experienced cardiologist to provide comprehensive cardiovascular care to patients in a hospital setting.",
  },
  {
    id: 3,
    title: "Dermatologist",
    location: "London, UK",
    jobType: "Full-time",
    description:
      "Board-certified dermatologist required to diagnose and treat skin-related diseases and conditions.",
  },
  {
    id: 4,
    title: "Dermatologist",
    location: "London, UK",
    jobType: "Full-time",
    description:
      "Board-certified dermatologist required to diagnose and treat skin-related diseases and conditions.",
  },
];
const OpenPosition = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full py-16 md:py-24 bg-gradient-to-r from-[#EBC0DB] to-primary-100">
        <div className="px-5 lg:px-20">
          <div className="flex flex-col items-center text-center space-y-4 ">
            <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
              {/* line  */}
              <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

              <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-widest uppercase leading-[24px]">
                Open Positions
              </h2>
              {/* line  */}
              <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
            </div>

            <h1 className="typography-h4 font-semibold tracking-tight ">
              Career Opportunities
            </h1>
          </div>

          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="rounded-[20px] p-[30px] bg-white hover:bg-primary-50 
              shadow-[0px_3px_20.8px_1px_rgba(0,0,0,0.04)] 
              transition-all duration-300 cursor-pointer"
                onClick={() => router.push("/career/careerDetail")}
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <h5 className="typography-h5 text-text-500 font-semibold leading-[150%]">
                    {job.title}
                  </h5>
                  <IoArrowForwardOutline
                    size={24}
                    className="-rotate-40 text-primary-500"
                  />
                </div>

                {/* Location & Job Type */}
                <div className="flex gap-2 py-5">
                  <div className="bg-primary-50 rounded-2xl">
                    <p className="flex gap-1 items-center text-primary-400 typography-paragraph-small font-medium px-3.5 py-2">
                      <SlLocationPin /> {job.location}
                    </p>
                  </div>
                  <div className="bg-secondary-50 rounded-2xl">
                    <p className="flex gap-1 items-center text-secondary-500 typography-paragraph-small font-medium px-3.5 py-2">
                      <IoTimeOutline /> {job.jobType}
                    </p>
                  </div>
                </div>

                {/* Job Description */}
                <p className="typography-paragraph-regular font-medium text-text-300 text-justify line-clamp-2">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenPosition;
