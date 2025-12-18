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
    <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-4">
      <ShowCaseItem
        to={Number(data?.caringforFamilies)}
        subtitle="Years of Excellence"
        prefix="+"
        isLast={false}
        statsWidth="lg:w-14"
        // isMediumDevice={isMd}
      />
      <ShowCaseItem
        to={Number(data?.successfulIVFTreatments)}
        subtitle="Success Stories"
        prefix="+"
        isLast={false}
        statsWidth="lg:w-34"
        isMediumDevice={isMd}
      />
      <ShowCaseItem
        to={95}
        subtitle="Patient Satisfaction"
        prefix="%"
        isLast={false}
        statsWidth="lg:w-18"
        // isMediumDevice={isMd}
      />

      <ShowCaseItem
        to={Number(data?.expertSpecialists)}
        subtitle="Expert Specialists"
        prefix="+"
        isLast={true}
        statsWidth="lg:w-18"
        // isMediumDevice={isMd}
      />
    </div>
  );
};

export default Stats;

const ShowCaseItem: React.FC<{
  to: number;
  subtitle: string;
  isLast: boolean;
  prefix: string;
  duration?: number;
  statsWidth: string;
  isMediumDevice?: boolean;
}> = ({
  to,
  subtitle,
  prefix,
  duration = 2.5,
  isLast,
  statsWidth,
  isMediumDevice = true,
}) => {
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
    <div className="flex items-center justify-between overflow-x-hidden ">
      <div className={`flex flex-col items-center gap-[1.42rem]`}>
        <div className="text-left">
          <h3 className="font-bold text-primary-500 text-xl sm:text-2xl mb-2 md:text-3xl lg:text-[57px] leading-[100%]">
            <motion.span className={`inline-block ${statsWidth}`}>
              {rounded}
            </motion.span>
            {prefix}
          </h3>
          <p className="text-sm font-medium text-text-400 sm:text-base lg:text-lg typography-paragraph-large">
            {subtitle}
          </p>
        </div>
      </div>
      {!isLast && isMediumDevice && (
        <div className={`w-0.5 shrink-0 h-1/2 bg-[#FF6F61]`} />
      )}
    </div>
  );
};
