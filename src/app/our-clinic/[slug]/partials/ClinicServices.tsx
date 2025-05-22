import React from "react";

import { IserviceData } from "@/app/services/interfaces/services.interface";
import ServiceCards from "@/app/services/partials/ServiceCards";
interface IServiceCards {
  data: IserviceData;
}
const ClinicServices: React.FC<IServiceCards> = ({ data }) => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 w-full">
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

          <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
            {`Our Services`}
          </h2>
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
        </div>
        <p className="pt-4 font-semibold text-text-500 typography-h3">
          Services We’re Providings
        </p>
      </div>
      <ServiceCards data={data} />
    </section>
  );
};

export default ClinicServices;
