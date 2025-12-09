import PATHS from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IEventHeaderType } from "../interface/event.interface";
import { CalendarX } from "lucide-react";

function timeAgo(dateString: string | Date): string {
  const date = new Date(dateString);
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return `${diffDays} days ago`;
}

const Gallery = ({ data }: { data: IEventHeaderType }) => {
  return data?.events?.length > 0 ? (
    <div className="bg-primary-50 u-padding-x h-fit  grid grid-cols-1 lg:grid-cols-3 gap-6">
      {data?.events?.map((item, index) => (
        <ImageSection
          key={"gallery" + index}
          alt={item?.title}
          src={item?.image}
          title={item?.title}
          date={item?.date}
          slug={item?.slug}
        />
      ))}
    </div>
  ) : (
    <NoEvents />
  );
};

const ImageSection = ({
  alt,
  src,
  title,
  date,
  slug,
}: {
  src: string;
  alt: string;
  title: string;
  date: string;
  slug: string;
}) => {
  return (
    <div className="relative w-full h-[248px] rounded-3xl overflow-hidden cursor-pointer">
      <Image alt={alt} src={src} fill className="object-cover h-full w-full" />

      <div className="w-full absolute bottom-0 p-3 text-white flex flex-col gap-y-2 bg-linear-to-t from-black to-transparent">
        <span className="typo-mid-bd-md flex items-center gap-x-1">
          <CallenderIcon /> {timeAgo(date)}
        </span>
        <p className="typo-sub-h3-bold capitalize">{title}</p>
        <div className="w-full flex items-center justify-between">
          <Link
            href={PATHS.eventDetails.replace(":id", slug)}
            className="flex items-center gap-x-1"
          >
            View All <ArrowRight />
          </Link>
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

const NoEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 p-6 bg-white rounded-2xl shadow-md w-full max-w-md mx-auto">
      <div className="p-4 bg-[#ffe6e6] rounded-full mb-4">
        <CalendarX className="text-[#ff4d4f] w-12 h-12" />
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        No Events Here
      </h2>
      <p className="text-gray-500 text-center mb-4">
        You currently have no events scheduled. Check back later or create a new
        event to get started.
      </p>
    </div>
  );
};
export default Gallery;
