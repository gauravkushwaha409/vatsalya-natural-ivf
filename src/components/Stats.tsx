"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { IStatsData } from "@/interface/stats.interface";
import { animate, useMotionValue, useTransform, motion } from "motion/react";
import React, { useEffect } from "react";
type ShowCaseItemProps = {
  data: IStatsData;
};

const Stats: React.FC<ShowCaseItemProps> = ({ data }) => {
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <div className="grid grid-cols-2 gap-4  md:grid-cols-4">
      <ShowCaseItem
        to={Number(data?.caringforFamilies)}
        subtitle="Years of Excellence"
        suffix=""
        isMd={true}
      />
      <ShowCaseItem
        to={Number(data?.successfulIVFTreatments)}
        subtitle="Success Stories"
        suffix=""
        isMd={isMd}
      />
      <ShowCaseItem
        to={95}
        subtitle="Patient Satisfaction"
        suffix=""
        isMd={true}
      />

      <ShowCaseItem
        to={Number(data?.expertSpecialists)}
        subtitle="Expert Specialists"
        suffix=""
        isMd={false}
      />
    </div>
  );
};

export default Stats;

const ShowCaseItem: React.FC<{
  to: number;
  subtitle: string;
  isMd: boolean;
  suffix: string;
  duration?: number;
}> = ({ to, subtitle, isMd, suffix, duration = 2.5 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [to]);
  return (
    <div className="flex items-center justify-between">
      <div
        className={`flex flex-col items-center gap-[1.42rem] px-6 md:px-10 lg:px-10`}
      >
        <div className="text-left">
          <h3 className="font-bold text-primary-500 text-xl sm:text-2xl mb-2 md:text-3xl lg:text-[57px] leading-[100%]">
            <motion.span className="inline-block w-40">{rounded}</motion.span>
            {suffix}
          </h3>
          <p className="text-sm font-medium text-text-400 sm:text-base lg:text-lg typography-paragraph-large">
            {subtitle}
          </p>
        </div>
      </div>
      <div
        className={`${isMd ? "w-[0.5px]" : "w-0"} shrink-0 h-1/2 bg-[#FF6F61]`}
      />
    </div>
  );
};
