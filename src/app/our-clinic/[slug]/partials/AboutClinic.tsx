import Image from "next/image";
import React from "react";
import image1 from "@/assests/about/ourstory1.png";
import image2 from "@/assests/about/ourstory2.png";
import { IClinicDetailsData } from "../interface/clinicDetails.interface";
interface AboutClinicProps {
  data: IClinicDetailsData;
}
const AboutClinic: React.FC<AboutClinicProps> = ({ data }) => {
  return (
    <div>
      <section className="padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
          <div className="space-y-6 ">
            <div className="flex items-center w-full  gap-4 ">
              <h2 className="text-primary-500 uppercase tracking-widest text-base leading-[150%] font-bold">
                About Our Clinic
              </h2>
              <div className="h-px bg-primary-500 flex-1 max-w-[148px]"></div>
            </div>

            <div className="space-y-4 text-text-400 text-justify typography-paragraph-large font-medium">
              <p
                className="leading-relaxed "
                dangerouslySetInnerHTML={{ __html: data?.description || "" }}
              />
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            {/* Main image (top right) */}
            <div className="absolute right-0 top-0 w-3/4 h-3/4 rounded-lg overflow-hidden ">
              <Image
                src={data?.images[0]}
                alt="Happy family with healthcare providers"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Secondary image (bottom left) */}
            <div className="absolute left-0 -bottom-10 w-3/4 h-3/4 border-10 border-white rounded-lg overflow-hidden ">
              <Image
                src={data?.images[1]}
                alt="Patients with their baby"
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutClinic;
