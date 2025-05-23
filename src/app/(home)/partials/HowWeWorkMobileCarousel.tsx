"use client";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { IHowWeWorkData } from "../interface/howWeWork.interface";


const HowWeWorkMobileCarousel = ({ data }: { data: IHowWeWorkData }) => {
  return (
    <Swiper>
      {data?.HowWorksDetails?.map((step, index) => (
        <SwiperSlide className="px-2" key={index}>
          <div
            className={`flex flex-col md:flex-row gap-y-6 gap-x-8 border p-2 lg:gap-x-24 ${
              index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`flex w-full justify-center md:w-1/2 ${
                index % 2 == 0
                  ? "md:justify-end md:items-center "
                  : "md:justify-start md:items-center"
              }`}
            >
              <div className="w-full max-w-[17.1875rem] h-auto md:h-[12.125rem] aspect-[16/9] md:aspect-square">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div
              className={`w-full md:w-1/2 space-y-3 flex flex-col ${
                index % 2 == 0
                  ? "items-center md:text-left md:items-start "
                  : "items-center md:text-right md:items-end "
              }`}
            >
              <span className="flex justify-center items-center bg-primary-50 rounded-full size-[2.5rem] md:size-[3.375rem] font-roboto font-medium text-primary-500 text-xl md:text-2xl text-end">
                {index + 1}
              </span>
              <h3 className="font-semibold typography-h3">{step.title}</h3>
              <p
                className="font-medium text-text-400 typography-paragraph-small md:typography-paragraph-regular"
                dangerouslySetInnerHTML={{ __html: step.detail }}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HowWeWorkMobileCarousel