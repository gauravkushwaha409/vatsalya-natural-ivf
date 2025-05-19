import Image from "next/image";
import React from "react";

import { IClinicDetailsData } from "../interface/clinicDetails.interface";
interface AboutClinicProps {
  data: IClinicDetailsData;
}
const AboutClinic: React.FC<AboutClinicProps> = ({ data }) => {
  return (
    <div>
      <section className="py-16 md:py-24 padding">
        <div className="gap-18 grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-4 w-full">
              <h2 className="font-bold text-primary-500 text-base uppercase leading-[150%] tracking-widest">
                About Our Clinic
              </h2>
              <div className="flex-1 bg-primary-500 max-w-[148px] h-px"></div>
            </div>

            <div className="space-y-4 font-medium text-text-400 text-justify typography-paragraph-large">
              <p
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data?.description || "" }}
              />
            </div>
          </div>

          <div className="relative h-[400px]">
            {/* Main image (top right) */}
            <div className="top-0 right-0 absolute rounded-lg w-3/4 h-3/4 overflow-hidden">
              {data?.images[0] && (
                <Image
                  src={data?.images[0]}
                  alt="Happy family with healthcare providers"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Secondary image (bottom left) */}
            <div className="-bottom-10 left-0 absolute border-10 border-white rounded-lg w-3/4 h-3/4 overflow-hidden">
              {data?.images[1] && (
                <Image
                  src={data?.images[1]}
                  alt="Patients with their baby"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutClinic;
