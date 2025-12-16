import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  image1: string;
  image2: string;
  image3: string;
}

const InsideClinic = ({ title, image1, image2, image3 }: IProps) => {
  return (
    <div className="u-padding-x u-padding-y space-y-11 bg-primary-50">
      <Heading title={title} />
      <Gallery image1={image1} image2={image2} image3={image3} />
    </div>
  );
};

const Heading = ({ title }: { title: string }) => {
  return (
    <p className="text-secondary-500 font-urbanist text-[39px] font-extrabold leading-[125%] tracking-[-0.78px]">
      Inside our Biratnagar clinic
    </p>
  );
};

const Gallery = ({
  image1,
  image2,
  image3,
}: {
  image1: string;
  image2: string;
  image3: string;
}) => {
  return (
    <div className="h-100 w-full grid grid-cols-2 gap-x-6">
      <ImageSection className="w-full" src={image1} />
      <div className="grid grid-rows-2 gap-y-6">
        <ImageSection className="" src={image2} />
        <ImageSection className="" src={image3} />
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
