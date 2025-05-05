import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";
import BookAnAppointment from "@/components/BookAnAppointment";
import { ICenter, ICenterRoot } from "@/interface/center";
import PATHS from "@/utils/path";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoArrowForwardOutline, IoMailOpenOutline } from "react-icons/io5";
import { PiPhonePauseThin } from "react-icons/pi";

const Clinics = async () => {
  const { data } = await getData<ICenterRoot>(endpoints.center);
  return (
    <section className="py-20 padding">
      <div className="flex flex-col items-center ">
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
          We are across the country{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {data?.records?.map((center: ICenter, index: number) => (
          <>
            <div
              key={index}
              className=" px-8 py-6 rounded-xl  bg-white shadow-md flex flex-col gap-3"
            >
              <div className="flex items-center gap-2.5 w-full">
                <div className="flex  w-8  justify-center items-center aspect-square rounded-full bg-secondary-50">
                  <FaLocationDot className="text-secondary-400" />
                </div>
                <h3 className="typography-paragraph-regular text-text-600  font-semibold line-clamp-1">
                  {center.name}
                </h3>
                <Link
                  href={`${PATHS.clinic}/${center?.slug}`}
                  className="ml-auto"
                >
                  <button className="text-primary-500 cursor-pointer typography-paragraph-small   flex items-center  ">
                    view{" "}
                    <IoArrowForwardOutline
                      size={18}
                      className="text-primary-500 -rotate-40"
                    />
                  </button>
                </Link>
              </div>
              <p
                className="typography-paragraph-small text-text-500 prose line-clamp-3 "
                dangerouslySetInnerHTML={{ __html: center.description || "" }}
              />

              <div className="flex items-center gap-2">
                <IoMailOpenOutline className="text-secondary-400" />
                <span className="typography-paragraph-small font-medium text-text-500">
                  {center.email}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PiPhonePauseThin className="text-secondary-400" />
                <span className="typography-paragraph-small font-medium text-text-500">
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
