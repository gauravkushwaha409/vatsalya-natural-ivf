"use client";
import CustomBreadcrumb from "@/components/CustomBreadcrumb";
import { cn } from "@/utils/cn";
import PATHS from "@/utils/path";
import { ChevronDown, Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  return (
    <div className="bg-primary-50 u-padding-x">
      <BreadCrumb />
    </div>
  );
};

const BreadCrumb = () => {
  return (
    <div className="pt-5 flex flex-col items-center justify-center">
      <CustomBreadcrumb
        items={[
          { name: "Home", isHome: true, link: PATHS.home },
          { name: "Event" },
        ]}
      />
      <p className="mt-2.5 text-secondary-500 text-center font-urbanist text-[2.5rem] font-extrabold leading-[150%] tracking-[-0.78px]">
        Media
      </p>
      <p className="w-2xl mx-auto text-[#828282] text-center font-urbanist font-medium leading-[150%] tracking-[-0.28px]">
        Browse and manage photos from company events, conferences, and team
        activities. View albums, download media, and share moments .
      </p>
      <div className="w-full">
        <p className="mt-10 text-left text-text-500 font-urbanist text-[1.25rem] font-semibold leading-7.5">
          Event Name
        </p>
        <div className="h-[1px] w-full bg-[#cecece]" />
      </div>
    </div>
  );
};

export default HeroSection;
