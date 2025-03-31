"use client";
import Image from "next/image";
import React from "react";
import icon1 from "@/assests/icons/services/infertility.svg";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";

const ServiceCards = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/services/details");
  };
  return (
    <section className=" px-20">
      <div className="flex flex-col items-center ">
        <div className="flex items-center gap-3 pb-5 ">
          <div className="border border-primary-500/80 border-t-1 w-20"></div>

          <span className="text-primary-500 typography-paragraph-regular font-bold uppercase tracking-widest">
            Meet Our Specialists
          </span>
          <div className="border border-primary-500/80 border-t-1 w-20"></div>
        </div>
        <p className="typography-h4 font-semibold text-text-500">
          {` Services We’re Providing`}
        </p>
      </div>
      <div className="py-10 pb-20 grid lg:grid-cols-3 xl:grid-col-4  gap-10">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            className="aspect-[400/340] relative rounded-tl-[50px] rounded-br-[50px] overflow-hidden bg-primary-50 hover:bg-primary-100 justify-center flex flex-col p-10 duration-300 transition-colors group"
            key={index}
          >
            <div className="h-28 w-28">
              <Image src={icon1} alt="icons1" className="w-full h-full" />
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center justify-between">
                <h5 className="typography-h5 font-bold">
                  Infertility Diagnosis
                </h5>{" "}
                <button onClick={handleClick} className="cursor-pointer">
                  <IoArrowForwardOutline
                    size={24}
                    className="-rotate-40 text-primary-500"
                  />
                </button>
              </div>
              <span className="typography-paragraph-regular font-medium text-text-400 pt-1.5">
                Identify the causes of infertility with expert diagnostics for a
                personalized treatment plan.
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
