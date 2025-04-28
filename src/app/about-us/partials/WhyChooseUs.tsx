import Image from "next/image";
import React from "react";
import { IWhyUsData } from "../interface/whyus.interface";

type data = {
  data: IWhyUsData;
};
const WhyChooseUs: React.FC<data> = ({ data }) => {
  return (
    <div className="pb-16 lg:pb-24 padding">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="flex justify-center items-center gap-4 w-full max-w-3xl">
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

          <h2 className="font-bold text-primary-500 text-sm lg:text-base uppercase leading-[24px] tracking-widest">
            {data?.title}
          </h2>
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
        </div>

        <h2 className="font-semibold tracking-tight typography-h2">
          {data?.subtitle}
        </h2>

        <div className="flex lg:flex-row flex-col justify-between gap-6 mt-4">
          <div className="gap-6 grid grid-cols-2">
            {data?.WhyusDetail?.map((data) => (
              <div
                key={data.id}
                className="flex lg:flex-row flex-col items-center lg:items-start gap-4 px-3 py-4 border border-secondary-50 rounded-[14px] h-fit"
              >
                <div className="size-[3.75rem] shrink-0">
                  <Image
                    src={data.icon}
                    alt={data.question}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="lg:text-left">
                  <h5 className="mb-2 font-medium text-secondary-500 typography-h4">
                    {data.question}
                  </h5>
                  <p
                    className="font-medium text-text-400 leading-[150%] typography-paragraph-regular"
                    dangerouslySetInnerHTML={{ __html: data.answer || "" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="rounded-[8.44px] w-full lg:w-3/4 h-auto lg:h-[21.875rem]">
            <iframe
              width="560"
              height="315"
              src={data?.youtubeLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-[8.44px] w-full h-[250px] sm:h-[350px] lg:h-full object-cover"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
