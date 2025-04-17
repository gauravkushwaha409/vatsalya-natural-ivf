import { IStatsData } from "@/interface/stats.interface";
import Image from "next/image";
import React from "react";
type ShowCaseItemProps = {
  data: IStatsData;
};

const Stats: React.FC<ShowCaseItemProps> = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 items-center">
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
}> = ({ svg, title, subtitle }) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-[1.42rem] px-4 sm:px-6 md:px-10 lg:px-10 border-r border-primary-100 ">
      <div className="p-4 sm:p-5 md:p-6 lg:p-7 border-[4px] border-primary-200/[0.54] sm:border-[5px] md:border-[6px] lg:border-[7px] rounded-full aspect-square">
        <Image
          src={svg}
          alt={"svg"}
          className="size-10 sm:size-12 md:size-14 lg:size-16"
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
