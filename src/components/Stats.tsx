import { IStatsData } from "@/interface/stats.interface";
import React from "react";
type ShowCaseItemProps = {
  data: IStatsData;
};

const Stats: React.FC<ShowCaseItemProps> = ({ data }) => {
  return (
    <div>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4">
        <ShowCaseItem
          title={<>{data?.caringforFamilies}+</>}
          subtitle="Years of Excellence"
        />
        <ShowCaseItem
          title={<>{data?.successfulIVFTreatments}+</>}
          subtitle="Success Stories"
        />
        <ShowCaseItem title={<>{"95"}%</>} subtitle="Patient Satisfaction" />

        <ShowCaseItem
          title={<>{data?.expertSpecialists}+</>}
          subtitle="Expert Specialists"
          border={false}
        />
      </div>
    </div>
  );
};

export default Stats;

const ShowCaseItem: React.FC<{
  title: React.ReactNode;
  subtitle: string;
  border?: boolean;
}> = ({ title, subtitle, border = true }) => {
  return (
    <div
      className={`flex flex-col items-center gap-[1.42rem] px-4 sm:px-6 md:px-10 lg:px-10 border-primary-500  ${
        border ? "border-r-[0.5px] " : ""
      }`}
    >
      <div className="text-center">
        <h3 className="font-bold text-primary-500 text-xl sm:text-2xl mb-2 md:text-3xl lg:text-[57px]  leading-[100%]">
          {title}
        </h3>
        <p className="font-medium text-text-400 text-sm sm:text-base lg:text-lg typography-paragraph-large">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
