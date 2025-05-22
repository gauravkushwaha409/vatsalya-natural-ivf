import Image from "next/image";
import React from "react";
import { IAboutUsAboutusMission } from "../interface/about.interface";
type Props = {
  data: IAboutUsAboutusMission;
};
const MissionVision: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#EBC0DB] to-primary-100">
        <div className="padding">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-[10.25rem] lg:items-center">
            {/* Image Grid */}
            <div className="shrink-0">
              <div className="grid grid-cols-2 grid-rows-2 gap-[0.6rem]">
                {/* 1st  */}
                {/* Outer most border */}
                <div
                  className="pt-[1.25rem] pl-[1.25rem] pr-[0.45rem] pb-[0.45rem] rounded-full rounded-br-none border-[0.8px] border-white"
                  style={{
                    boxShadow: "0px -6px 130.2px 33px rgba(160, 56, 121, 0.20)",
                    backdropFilter: "blur(114.14590454101562px)",
                    background: "rgba(255, 255, 255, 0.56)",
                    opacity: "0.85",
                  }}
                >
                  {/* Second border */}
                  <div className=" pt-[1.06rem] pl-[1.06rem] pr-[0.56rem] pb-[0.56rem] rounded-full rounded-br-none border-[0.8px] border-white flex items-center justify-center">
                    {/* Inner most border (with fixed width and height) */}
                    <div className="w-[8.625rem] h-[8.625rem]  rounded-full rounded-br-none border-[0.8px] border-white flex items-center justify-center">
                      <Image
                        src={data?.aboutUsMissionImages[0]}
                        width={400}
                        height={400}
                        alt="Mother holding baby"
                        className="rounded-full rounded-br-none border-[0.8px] border-white w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 2nd  */}
                {/* Outer most border */}
                <div
                  className="pt-[1.25rem] pr-[1.25rem] pl-[0.45rem] pb-[0.45rem] rounded-full rounded-bl-none border-[0.8px] border-white"
                  style={{
                    opacity: "0.85",
                    background: "rgba(255, 255, 255, 0.56)",
                    boxShadow:
                      "-187px 162px 130.2px 33px rgba(160, 56, 121, 0.20)",
                    backdropFilter: "blur(114.14590454101562px)",
                  }}
                >
                  {/* Second  border */}
                  <div className="pt-[1.06rem] pr-[1.06rem] pl-[0.56rem] pb-[0.56rem] rounded-full rounded-bl-none border-[0.8px] border-white ">
                    {/* Inner most border */}
                    <div className=" w-[8.625rem] h-[8.625rem] rounded-full rounded-bl-none border-[0.8px] ">
                      <Image
                        src={data?.aboutUsMissionImages[1]}
                        width={400}
                        height={400}
                        alt="Mother holding baby"
                        className="rounded-full rounded-bl-none border-[0.8px] border-white w-full h-full object-cover
                      "
                      />
                    </div>
                  </div>
                </div>

                {/* 3rd */}
                <div
                  className="pr-[0.56rem] pt-[0.56rem] pb-[1.06rem] pl-[1.06rem] rounded-full rounded-tr-none border-[0.8px] border-white"
                  style={{
                    opacity: " 0.85",
                    background: "rgba(255, 255, 255, 0.56)",
                    boxShadow:
                      "58px -11px 130.2px 33px rgba(160, 56, 121, 0.20)",
                    backdropFilter: "blur(114.14590454101562px)",
                  }}
                >
                  {/* Second  border */}
                  <div className="pr-[0.45rem] pt-[0.45rem] pb-[1.25rem] pl-[1.25rem] rounded-full rounded-tr-none border-[0.8px] border-white">
                    {/* Inner most border */}
                    <div className=" w-[8.625rem] h-[8.625rem] pr-[0.85rem] lg:pr-0 rounded-full rounded-tr-none border-[0.8px] ">
                      <Image
                        src={data?.aboutUsMissionImages[2]}
                        alt="Mother holding baby"
                        width={400}
                        height={400}
                        className="rounded-full rounded-tr-none border-[0.8px] border-white w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 4th */}
                <div
                  className="pl-[0.45rem] pt-[0.45rem] pb-[1.25rem] pr-[1.25rem]  rounded-full rounded-tl-none border-[0.8px] border-white"
                  style={{
                    opacity: "0.85",
                    background:
                      "linear-gradient(333deg, rgba(255, 255, 255, 0.03) 0.09%, rgba(255, 255, 255, 0.56) 83.34%)",
                    boxShadow:
                      "0px -74px 130.2px 33px rgba(160, 56, 121, 0.20)",
                    backdropFilter: " blur(114.14590454101562px)",
                  }}
                >
                  {/* Second  border */}
                  <div className="pl-[0.56rem] pt-[0.56rem] pb-[1.06rem] pr-[1.06rem]  rounded-full rounded-tl-none border-[0.8px] border-white ">
                    {/* Inner most border */}
                    <div className="w-[8.625rem] h-[8.625rem] rounded-full rounded-tl-none border-[0.8px] ">
                      <Image
                        src={data?.aboutUsMissionImages[3]}
                        width={400}
                        height={400}
                        alt="Mother holding baby"
                        className="rounded-full rounded-tl-none border-[0.8px] border-white w-full h-full object-cover
                      "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 w-full">
              <div className="flex items-center w-full  gap-4 ">
                <h2 className="text-primary-500 uppercase tracking-widest text-base leading-[150%] font-bold">
                  {data?.title}
                </h2>
                <div className="h-px bg-primary-500 flex-1 max-w-[148px]"></div>
              </div>
              <h2 className="typography-h2 font-semibold text-text-500 ">
                {data?.subtitle}{" "}
              </h2>
              <p
                className="text-text-400 text-justify typography-paragraph-large font-medium leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data?.description || "" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
