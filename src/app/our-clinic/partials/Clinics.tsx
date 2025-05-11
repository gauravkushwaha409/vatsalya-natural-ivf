import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import BookAnAppointment from "@/components/BookAnAppointment";
import { ICenter, ICenterRoot } from "@/interface/center";
import PATHS from "@/utils/path";
import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoArrowForwardOutline, IoMailOpenOutline } from "react-icons/io5";
import { PiPhonePauseThin } from "react-icons/pi";

const Clinics = async () => {
  const { data } = await getData<ICenterRoot>(endpoints.center);
  return (
    <section className="py-20 padding">
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-4 w-full">
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>

          <h2 className="font-bold text-primary-500 text-sm md:text-base uppercase leading-[24px] tracking-widest">
            Clinics
          </h2>
          {/* line  */}
          <div className="flex-1 bg-primary-400 max-w-[148px] h-px"></div>
        </div>
        <p className="pt-4 font-semibold text-text-500 typography-h3">
          Serving All Across Nepal
        </p>
      </div>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {data?.records?.map((center: ICenter, index: number) => (
          <>
            <div
              key={index}
              className="flex flex-col gap-3 bg-white shadow-md px-8 py-6 rounded-xl"
            >
              <div className="flex items-center gap-2.5 w-full">
                <div className="flex justify-center items-center bg-secondary-50 rounded-full w-8 aspect-square">
                  <FaLocationDot className="text-secondary-400" />
                </div>
                <h3 className="font-semibold text-text-600 line-clamp-1 typography-paragraph-regular">
                  {center.name}
                </h3>
                <Link
                  href={`${PATHS.clinic}/${center?.slug}`}
                  className="ml-auto"
                >
                  <button className="flex items-center text-primary-500 cursor-pointer typography-paragraph-small">
                    view{" "}
                    <IoArrowForwardOutline
                      size={18}
                      className="text-primary-500 -rotate-40"
                    />
                  </button>
                </Link>
              </div>
              <p
                className="text-text-500 line-clamp-3 typography-paragraph-small prose"
                dangerouslySetInnerHTML={{ __html: center.description || "" }}
              />

              <div className="flex items-center gap-2">
                <IoMailOpenOutline className="text-secondary-400" />
                <span className="font-medium text-text-500 typography-paragraph-small">
                  {center.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PiPhonePauseThin className="text-secondary-400" />
                <span className="font-medium text-text-500 typography-paragraph-small">
                  {center.phone}
                </span>
              </div>
              <BookAnAppointment center={center.id} />
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Clinics;
