"use client";
import butterfly from "@/assests/success-story/butterflyVector.png";
import Image from "next/image";
import React, { useState } from "react";

import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import { IJourneyRoot } from "../interface/journey.interface";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

type Props = {
  data: IJourneyRoot;
};

const YourJourney: React.FC<Props> = ({ data }) => {
  const journeyData = data?.data;

  console.log(journeyData, "journeryyyy");

  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="padding mt-10 mb-20">
      <div className="rounded-[24px] bg-gradient-to-r from-[#EBC0DB] to-primary-100">
        <div className="p-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-40">
          {/* Text Section */}
          <div>
            <h1 className="typography-h4 lg:typography-h2 font-bold leading-[150%] text-secondary-500 max-w-[525px]">
              {journeyData?.title}
            </h1>
            <p className="typography-paragraph-regular lg:typography-paragraph-large text-text-400 font-medium max-w-[613px] py-4">
              {journeyData?.description}
            </p>
            <button
              onClick={() => setOpenModal(true)}
              className="bg-secondary-500 cursor-pointer py-4 px-6 mt-2 rounded-[6.25rem] font-manrope font-bold text-white typography-paragraph-regular"
            >
              Book an Appointment
            </button>
          </div>

          {/* Trusted By Section */}
          <div>
            <div className="relative rounded-[24px] opacity-80 bg-[rgba(255,240,244,0.39)] backdrop-blur-[7.35px] p-10 flex flex-col items-center justify-center text-center space-y-2">
              <p className="typography-paragraph-regular font-semibold text-black">
                Trusted by
              </p>
              <h1 className="typography-h2 font-bold text-black leading-[150%]">
                {journeyData?.clientNumber}
              </h1>
              <p className="typography-paragraph-regular font-semibold text-black">
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
                <ul className="text-primary font-normal leading-[16px] text-xs py-2.5">
                  <li className="flex items-center">
                    {Array.from(
                      { length: journeyData?.rating || 0 },
                      (_, index) => {
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
                      }
                    )}
                    {journeyData?.review?.length > 0 && (
                      <span className="mt-2 ml-2 typography-paragraph-regular text-text-500">
                        ({journeyData?.review})
                      </span>
                    )}
                  </li>
                </ul>
              </div>

              {/* butterfly  */}
              <div className=" absolute top-0 right-0 w-20 h-20 lg:w-32 lg:h-32  overflow-hidden">
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
