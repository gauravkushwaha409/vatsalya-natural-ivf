import Image from "next/image";
import React from "react";
import { IAboutUsFamily } from "../interface/about.interface";

type Props = {
  data: IAboutUsFamily;
};
const Family: React.FC<Props> = ({ data }) => {
  return (
    <div className="py-16 md:py-24 padding">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex items-center w-full justify-center gap-4 max-w-3xl">
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>

          <h2 className="text-primary-500 text-sm md:text-base font-bold tracking-widest uppercase leading-[24px]">
            {data?.title}
          </h2>
          {/* line  */}
          <div className="h-px bg-primary-400 flex-1 max-w-[148px]"></div>
        </div>

        <h2 className="typography-h2 font-semibold tracking-tight ">
          {data?.subtitle}
        </h2>

        <p
          className="text-text-400 typography-paragraph-large leading-[150%] font-medium max-w-7xl"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />

        <div className="w-full h-96 mt-4">
          <Image
            src={data?.image}
            alt="Family Photo"
            width={1280}
            height={384}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Family;
