import Image from "next/image";
import React from "react";
import { IAboutUsData } from "../interface/about.interface";

type Props = {
  data: IAboutUsData;
};

const OurStory: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <section className="u-padding-x py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
          <div className="space-y-6 ">
            <div className="flex items-center w-full  gap-4 ">
              <h2 className="text-primary-500 uppercase tracking-widest text-base leading-[150%] font-bold">
                {data?.title}
              </h2>
              <div className="h-px bg-primary-500 flex-1 max-w-[148px]"></div>
            </div>
            <h2 className="typography-h2 font-semibold text-text-500 ">
              {data?.subtitle}{" "}
            </h2>

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

            {/* Experience badge */}
            <div className="absolute right-1/6 bottom-1/6 bg-[rgba(160,56,121,0.84)] font-semibold text-secondary-50 text-center rounded-[24px] p-6 shadow-lg z-10 leading-[150%] backdrop-blur-[4.85px]">
              <div className="text-5xl ">15+</div>
              <div className="text-xl">years</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
