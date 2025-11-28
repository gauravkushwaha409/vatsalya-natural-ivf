import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  const image = [
    "/event/image-1.jpg",
    "/event/image-1.jpg",
    "/event/image-2.jpg",
    "/event/image-3.jpg",
    "/event/image-4.jpg",
    "/event/image-4.jpg",
    "/event/image-4.jpg",
    "/event/image-4.jpg",
    "/event/image-5.jpg",
    "/event/image-4.jpg",
    "/event/image-4.jpg",
    "/event/image-5.jpg",
    "/event/image-6.jpg",
    "/event/image-6.jpg",
    "/event/image-6.jpg",
  ];
  return (
    <div className="u-padding-x grid grid-cols-4 gap-6">
      {image.map((item, index) => (
        <ImageSection
          key={item + index}
          src={item}
          className={index % 2 === 0 ? "row-span-2 h-102" : "h-52"}
        />
      ))}
    </div>
  );
};

const ImageSection = ({
  src,
  className,
}: {
  src: string;
  className: string;
}) => {
  return (
    <div className={cn(`relative w-80`, className)}>
      <Image alt="" fill src={src} className="object-cover rounded-3xl" />
    </div>
  );
};

export default Gallery;
