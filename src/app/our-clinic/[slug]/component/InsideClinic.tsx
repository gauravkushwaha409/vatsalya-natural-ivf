import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const InsideClinic = () => {
  return (
    <div className="u-padding-x u-padding-y space-y-11 bg-primary-50">
      <Heading />
      <Gallery />
    </div>
  );
};

const Heading = () => {
  return (
    <p className="text-secondary-500 font-urbanist text-[39px] font-extrabold leading-[125%] tracking-[-0.78px]">
      Inside our Biratnagar clinic
    </p>
  );
};

const Gallery = () => {
  return (
    <div className="h-100 w-full grid grid-cols-2 gap-x-6">
      <ImageSection
        className="w-full"
        src="/clinic-detail/inside-clinic/image-1.jpg"
      />
      <div className="grid grid-rows-2 gap-y-6">
        <ImageSection
          className=""
          src="/clinic-detail/inside-clinic/image-2.jpg"
        />
        <ImageSection
          className=""
          src="/clinic-detail/inside-clinic/image-3.jpg"
        />
      </div>
    </div>
  );
};

const ImageSection = ({
  className,
  src,
}: {
  className: string;
  src: string;
}) => {
  return (
    <div className={cn`relative h-full ${className}`}>
      <Image alt="" src={src} fill className="object-cover rounded-2xl" />
    </div>
  );
};

export default InsideClinic;
