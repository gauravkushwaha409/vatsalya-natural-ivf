"use client";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { cn } from "@/utils/cn";
import PATHS from "@/utils/path";
import { ChevronDown, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { IEventDetailsType } from "../../interface/event.interface";

const HeroSection = ({ data }: { data: IEventDetailsType }) => {
  return (
    <div className="bg-primary-50 u-padding-x">
      <BreadCrumb data={data} />
    </div>
  );
};

const BreadCrumb = ({ data }: { data: IEventDetailsType }) => {
  return (
    <div className="pt-5 flex flex-col items-center justify-center">
      <CustomBreadcrumb
        items={[
          { name: "Home", isHome: true, link: PATHS.home },
          { name: "Event", link: PATHS.event },
        ]}
      />
      <div className="w-full">
        <p className="capitalize mt-2.5 text-secondary-500 text-center font-urbanist text-[2.5rem] font-extrabold leading-[150%] tracking-[-0.78px]">
          {data.title}
        </p>
        <p className="mx-auto text-[#828282] text-center font-urbanist font-medium leading-[150%] tracking-[-0.28px]">
          {data.description}
        </p>
        <div className="w-full">
          <p className=" capitalize mt-10 text-left text-text-500 font-urbanist text-[1.25rem] font-semibold leading-7.5">
            {data.title}
          </p>
          <div className="h-[1px] w-full bg-[#cecece]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
