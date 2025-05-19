"use client";
import butterfly from "@/assests/success-story/butterflyVector.png";
import Image from "next/image";
import React, { useState } from "react";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import Link from "next/link";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { IJourneyRoot } from "../interface/journey.interface";

type Props = {
  data: IJourneyRoot;
};

const YourJourney: React.FC<Props> = ({ data }) => {
  const journeyData = data?.data;

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="mt-10 mb-20 padding">
      <div className="bg-gradient-to-r from-[#EBC0DB] to-primary-100 rounded-[24px]">
        <div className="items-center gap-4 lg:gap-40 grid grid-cols-1 lg:grid-cols-2 p-10">
          {/* Text Section */}
          <div>
            <h2 className="max-w-[525px] font-bold text-secondary-500 leading-[150%] typography-h4 lg:typography-h2">
              {journeyData?.title}
            </h2>
            <p
              className="py-4 max-w-[613px] font-medium text-text-400 typography-paragraph-regular lg:typography-paragraph-large"
              dangerouslySetInnerHTML={{
                __html: journeyData?.description || "",
              }}
            />
            <button
              onClick={() => setOpenModal(true)}
              className="bg-secondary-500 mt-2 px-6 py-4 rounded-[6.25rem] font-manrope font-bold text-white cursor-pointer typography-paragraph-regular"
            >
              Book an Appointment
            </button>
          </div>

          {/* Trusted By Section */}
          <div>
            <div className="relative flex flex-col justify-center items-center space-y-2 bg-[rgba(255,240,244,0.39)] opacity-80 backdrop-blur-[7.35px] p-10 rounded-[24px] text-center">
              <p className="font-semibold text-black typography-paragraph-regular">
                Trusted by
              </p>
              <p className="font-bold text-black leading-[150%] typography-h2">
                {journeyData?.clientNumber}+
              </p>
              <p className="font-semibold text-black typography-paragraph-regular">
                Happy Families
              </p>

              {/* Avatar Images */}
              <div className="flex items-center">
                {journeyData?.clientImages.map((user, index) => (
                  <div
                    key={index}
                    className={`w-14 h-14 rounded-full border-2 border-white overflow-hidden ${
                      index !== 0 ? "-ml-3" : ""
                    }`}
                  >
                    <Image
                      src={user}
                      alt={`user-${index}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Star Ratings */}
              <div>
                <ul className="py-2.5 font-normal text-primary text-xs leading-[16px]">
                  <li className="flex items-center">
                    {Array.from({ length: 5 }, (_, index) => {
                      const ratingValue = journeyData?.rating || 0;

                      if (ratingValue >= index + 1) {
                        return (
                          <IoStar
                            key={index}
                            size={24}
                            className="ml-0.5 text-primary-500"
                          />
                        );
                      } else if (
                        ratingValue > index &&
                        ratingValue < index + 1
                      ) {
                        return (
                          <IoStarHalf
                            key={index}
                            size={24}
                            className="ml-0.5 text-primary-500"
                          />
                        );
                      } else {
                        return (
                          <IoStarOutline
                            key={index}
                            size={24}
                            className="ml-0.5 text-primary-500"
                          />
                        );
                      }
                    })}

                    {journeyData?.review?.length > 0 && (
                      <Link
                        href={
                          "https://www.google.com/maps/place/Vatsalya+Natural+IVF/@27.7154875,85.3253132,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb190f958b950b:0x6882ae078bfd75ac!8m2!3d27.7154875!4d85.3253132!16s%2Fg%2F11fxzmfm1j?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
                        }
                        target="_blank"
                        className="mt-2 ml-2 text-text-500 typography-paragraph-regular"
                      >
                        ({journeyData?.review})
                      </Link>
                    )}
                  </li>
                </ul>
              </div>

              {/* butterfly  */}
              <div className="top-0 right-0 absolute w-20 lg:w-32 h-20 lg:h-32 overflow-hidden">
                <Image
                  src={butterfly}
                  alt={`butterfly`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default YourJourney;
