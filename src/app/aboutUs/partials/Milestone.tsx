import React from "react";
import Image from "next/image";
import stat1 from "@/assests/about/stat.png"; // Replace with actual icons
import { IStatsData } from "@/interface/stats.interface";

type Props = {
  data: IStatsData;
};
const Milestone: React.FC<Props> = ({ data }) => {
  const stats = [
    {
      id: 1,
      value: data?.caringforFamilies,
      label: "Caring for Families",
      subtext: "Years",
      img: stat1,
    },
    {
      id: 2,
      value: `${data?.successfulIVFTreatments}+`,
      label: "Successful IVF Treatments",
      subtext: "",
      img: stat1,
    },
    {
      id: 3,
      value: `${data?.expertSpecialists}+`,
      label: "Expert Specialists",
      subtext: "",
      img: stat1,
    },
  ];

  return (
    <div className="pb-16 md:pb-24 ">
      <div className="w-full bg-primary-50 py-16 padding ">
        <div className=" flex flex-col md:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="flex items-center gap-4 space-y-5">
            <div className="space-y-4 ">
              <div className="flex items-center w-full  gap-4 ">
                <h2 className="text-primary-500 uppercase tracking-widest text-base leading-[150%] font-bold">
                  Our Milestones
                </h2>
                <div className="h-px bg-primary-500 flex-1 max-w-[148px]"></div>
              </div>
              <h2 className="typography-h2 font-semibold text-text-500 ">
                {data?.title}
              </h2>
              <p className="text-text-400 typography-paragraph-large leading-[150%] font-medium">
                {data?.subtitle}
              </p>
            </div>
          </div>

          {/* Right Section: Stats */}
          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-10 shrink-0 ">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center text-center border-r border-primary-100 px-2 space-y-2"
              >
                {/* Icon */}
                <div className="w-12 lg:w-24 h-12 lg:h-24 flex items-center justify-center border-[7px] border-[rgba(255,189,182,0.54)] rounded-full ">
                  <Image
                    src={stat.img}
                    alt="stat-icon"
                    width={50}
                    height={50}
                  />
                </div>
                {/* Number */}
                <h1 className="text-primary-500 typography-h4 lg:typography-h2 leading-[150%] font-bold   ">
                  {stat.value}
                  <span className="text-primary-500 typography-h4 lg:typography-paragraph-regular pl-1">
                    {stat.subtext}
                  </span>
                </h1>
                {/* Label */}
                <p className="text-text-400 typography-paragraph-regular lg:typography-paragraph-large font-medium ">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
