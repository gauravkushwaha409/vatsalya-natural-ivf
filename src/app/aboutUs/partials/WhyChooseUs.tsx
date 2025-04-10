import Image from "next/image";
import React from "react";
import { IWhyUsData } from "../interface/whyus.interface";

type data = {
  data: IWhyUsData;
};
const WhyChooseUs: React.FC<data> = ({ data }) => {
  return (
    <div className="pb-16 lg:pb-24 padding">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

          <h2 className="text-primary-500 text-sm lg:text-base font-bold tracking-widest uppercase leading-[24px]">
            {data?.title}
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
        </div>

        <h2 className="typography-h2 font-semibold tracking-tight ">
          {data?.subtitle}
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-6 mt-4">
          <div className="grid grid-cols-2 gap-6">
            {data?.WhyusDetail.map((data) => (
              <div
                key={data.id}
                className="flex flex-col lg:flex-row items-center lg:items-start gap-4 border border-secondary-50 px-4 py-5 rounded-[14px]"
              >
                <div className="w-[80px] h-[80px]">
                  <Image
                    src={data.icon}
                    alt={data.question}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="lg:text-left">
                  <h5 className="text-secondary-500 typography-h4 mb-2">
                    {data.question}
                  </h5>
                  <p className="text-text-400 typography-paragraph-large font-medium leading-[150%]">
                    {data.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="rounded-[8.44px] w-full lg:w-1/2 h-auto lg:h-[320px]">
            <iframe
              width="560"
              height="315"
              src={data?.youtubeLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[250px] sm:h-[350px] lg:h-full rounded-[8.44px] object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
