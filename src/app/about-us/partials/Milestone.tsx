import Stats from "@/components/Stats";
import { IStatsData } from "@/interface/stats.interface";
import React from "react";

type Props = {
  data: IStatsData;
};
const Milestone: React.FC<Props> = ({ data }) => {
  return (
    <div className="pb-16 md:pb-24 ">
      <div className="w-full bg-primary-50 py-16 padding ">
        <div className=" flex flex-col md:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="flex items-center gap-4 space-y-5">
            <div className="space-y-4 w-full lg:w-lg">
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
          <Stats data={data} />
        </div>
      </div>
    </div>
  );
};

export default Milestone;
