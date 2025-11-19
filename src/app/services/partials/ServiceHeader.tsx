import React from "react";
import { IServiceHeadingData } from "../interfaces/serviceHeading.interface";

interface Props {
  data: IServiceHeadingData;
}
const ServiceHeader: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="flex justify-center items-center gap-4 w-full">
        {/* line  */}
        <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

        <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
          WHAT WE OFFER
        </h2>

        {/* line  */}
        <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
      </div>
      <p className="pt-4 font-semibold text-text-500 typography-h3">
        {data?.title}
      </p>
    </div>
  );
};

export default ServiceHeader;
