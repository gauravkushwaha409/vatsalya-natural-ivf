import PATHS from "@/utils/path";
import Image from "next/image";
import Link from "next/link";
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
    <div className="gap-6 grid grid-cols-1 lg:grid-cols-3 bg-primary-50 pb-4 h-fit u-padding-x">
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
    <div className="py-8">
      <NoEvents />
    </div>
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
    <div className="relative rounded-3xl w-full h-[248px] overflow-hidden cursor-pointer">
      <Image alt={alt} src={src} fill className="w-full h-full object-cover" />

      <div className="bottom-0 absolute flex flex-col gap-y-2 bg-linear-to-t from-black to-transparent p-3 w-full text-white">
        <span className="flex items-center gap-x-1 typo-mid-bd-md">
          <CallenderIcon /> {timeAgo(date)}
        </span>
        <p className="capitalize typo-sub-h3-bold">{title}</p>
        <div className="flex justify-between items-center w-full">
          <Link
            href={PATHS.eventDetails.replace(":id", slug)}
            className="flex items-center gap-x-1"
          >
            View All <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
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
    <div className="flex flex-col justify-center items-center bg-white shadow-md mx-auto p-6 rounded-2xl w-full max-w-md">
      <div className="bg-[#ffe6e6] mb-4 p-4 rounded-full">
        <CalendarX className="w-12 h-12 text-[#ff4d4f]" />
      </div>
      <h2 className="mb-2 font-semibold text-gray-800 text-xl">
        No Events Here
      </h2>
      <p className="mb-4 text-gray-500 text-center">
        You currently have no events scheduled. Check back later or create a new
        event to get started.
      </p>
    </div>
  );
};
export default Gallery;
