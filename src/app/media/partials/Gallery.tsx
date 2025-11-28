import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="bg-primary-50 u-padding-x h-fit flex flex-wrap gap-6">
      {Array.from({ length: 10 }).map((item, index) => (
        <ImageSection
          key={"gallery" + index}
          alt=""
          src="/home/when-to-visit/card-image-1.jpeg"
        />
      ))}
    </div>
  );
};

const ImageSection = ({ alt, src }: { src: string; alt: string }) => {
  return (
    <div className="relative w-103 h-62 rounded-3xl overflow-hidden">
      <Image alt={alt} src={src} fill className="object-cover" />

      <div className="w-full absolute bottom-0 p-3 text-white flex flex-col gap-y-2 bg-linear-to-t from-black to-transparent">
        <span className="typo-mid-bd-md flex items-center gap-x-1">
          <CallenderIcon /> 18 days ago
        </span>
        <p className="typo-sub-h3-bold">Event Name</p>
        <div className="w-full flex items-center justify-between">
          <span className="flex items-center gap-x-1">
            View All <ArrowRight />
          </span>
          <span className="typo-sm-bd-reg flex items-center gap-x-1">
            <PhotoIcon />
            254
          </span>
        </div>
      </div>
    </div>
  );
};

const PhotoIcon = () => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.95801 5.83337C5.44126 5.83337 5.83301 5.44162 5.83301 4.95837C5.83301 4.47512 5.44126 4.08337 4.95801 4.08337C4.47476 4.08337 4.08301 4.47512 4.08301 4.95837C4.08301 5.44162 4.47476 5.83337 4.95801 5.83337Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2503 8.75004L9.33366 5.83337L2.91699 12.25"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ArrowRight = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 6H9.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 2.5L9.5 6L6 9.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CallenderIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 3.33337H4.16667C3.24619 3.33337 2.5 4.07957 2.5 5.00004V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V5.00004C17.5 4.07957 16.7538 3.33337 15.8333 3.33337Z"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 1.66663V4.99996"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66699 1.66663V4.99996"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 8.33337H17.5"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Gallery;
