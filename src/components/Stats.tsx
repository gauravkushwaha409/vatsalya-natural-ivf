import { IStatsData } from "@/interface/stats.interface";
import Image from "next/image";
import React from "react";
type ShowCaseItemProps = {
  data: IStatsData;
};

const Stats: React.FC<ShowCaseItemProps> = ({ data }) => {
  return (
    <div>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-3">
        <ShowCaseItem
          svg={data?.caringforFamiliesIcon}
          title={
            <>
              {data?.caringforFamilies}
              <span className="font-normal typography-paragraph-regular">
                Years
              </span>
            </>
          }
          subtitle="Caring for Families"
        />
        <ShowCaseItem
          svg={data?.successfulIVFTreatmentsIcon}
          title={`${data?.successfulIVFTreatments}+`}
          subtitle="Successful IVF Treatments"
        />

        <ShowCaseItem
          svg={data?.expertSpecialistsIcon}
          title={`${data?.expertSpecialists}+`}
          subtitle="Expert Specialists"
          border={false}
        />
      </div>
    </div>
  );
};

export default Stats;

const ShowCaseItem: React.FC<{
  svg: string;
  title: React.ReactNode;
  subtitle: string;
  border?: boolean;
}> = ({ svg, title, subtitle, border = true }) => {
  return (
    <div
      className={`flex flex-col  items-center gap-[1.42rem] px-4 sm:px-6 md:px-10 lg:px-10 border-primary-100 ${
        border ? "border-r" : ""
      }`}
    >
      <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-7 border-[4px] border-primary-200/[0.54] sm:border-[5px] md:border-[6px] lg:border-[7px] rounded-full size-[5rem] sm:size-[5.5rem] md:size-[6.5rem] lg:size-[7.5rem] aspect-square">
        <Image
          crossOrigin="anonymous"
          src={svg}
          alt={"svg"}
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center">
        <h3 className="font-bold text-primary-500 text-xl sm:text-2xl md:text-3xl lg:text-3xl leading-[150%] typography-h2">
          {title}
        </h3>
        <p className="font-medium text-text-400 text-sm sm:text-base lg:text-lg typography-paragraph-large">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
