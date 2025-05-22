"use client";
import buterflysvg from "@/assests/icons/butterflyExpertise.svg";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import RequestCallModal from "@/components/modals/RequestCallModal";
import Image from "next/image";
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import {
  IProfileData,
  IProfileService,
} from "../../interface/profile.interface";

interface ProfileProps {
  data: IProfileData;
}
const Profile: React.FC<ProfileProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedCenter, setSelectedCenter] = useState<string>("");
  const [openCallModal, setOpenCallModal] = useState<boolean>(false);
  return (
    <section className="bg-background-100 py-5 padding">
      <div className="flex lg:flex-row flex-col gap-10 lg:jusbe">
        <div className="flex justify-center w-full lg:w-1/3">
          <div
            className="relative rounded-lg w-full min-w-[320px] aspect-[320/318] overflow-hidden"
            style={{
              background: "linear-gradient(to right, #EBC0DB 0%, #FFD2CE 100%)",
            }}
          >
            <Image
              src={data?.image}
              alt="heropic"
              width={1920}
              height={1080}
              className="z-10 absolute w-full h-full object-contain"
            />
            <div className="top-10 right-2 z-0 absolute h-36">
              <Image
                src={buterflysvg}
                alt="heropic"
                width={1920}
                height={1080}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        {/* profile */}
        <div className="flex flex-col justify-center gap-3.5">
          <div className="flex items-center gap-3">
            <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
              Doctor Profile
            </span>
            <div className="bg-primary-400 w-21 h-px"></div>
          </div>
          <h1 className="font-bold text-secondary-500 typography-h3">
            {data?.name}
          </h1>
          <h2 className="font-semibold text-text-500 typography-paragraph-large">
            {data?.position}
          </h2>

          <div className="flex items-center gap-2">
            <div>
              <MdLocationPin size={20} className="text-secondary-500" />
            </div>
            <span className="text-text-500 typography-paragraph-regular">
              {data?.center?.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <IoMdBriefcase size={20} className="text-secondary-500" />
            </div>
            <span className="text-text-500 typography-paragraph-regular">
              {data?.experience}+ years
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <FaGraduationCap size={20} className="text-secondary-500" />
            </div>
            <span className="text-text-500 typography-paragraph-regular">
              {data?.education}
            </span>
          </div>
          <p
            className="text-text-500 typography-paragraph-regular"
            dangerouslySetInnerHTML={{ __html: data?.description || "" }}
          />
        </div>
      </div>

      <div className="py-5">
        {data?.service.length > 0 && (
          <h5 className="py-5 font-semibold text-text-500 typography-h4">
            Services Offered
          </h5>
        )}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
          {data?.service?.map((items: IProfileService, index: number) => (
            <>
              <div
                key={index}
                className="flex items-center gap-5 bg-primary-50/20 shadow-sm backdrop-blur-2xl p-5 border border-text-50 rounded-lg"
              >
                <div className="w-13 shrink-0">
                  <Image
                    src={items?.icon}
                    alt={items?.name}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div>
                  <h2 className="font-semibold text-text-500 typography-paragraph-large">
                    {items?.name}
                  </h2>
                  <p
                    className="pt-2 font-normal text-text-400 overline-clamp-4 line-clamp-3 text-wrap typography-paragraph-regular"
                    dangerouslySetInnerHTML={{ __html: items?.description }}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={() => {
            setOpenModal(true);
            setSelectedDoctor(data?.id);
            setSelectedCenter(data?.center?.id);
          }}
          className="bg-secondary-500 hover:bg-secondary-600 px-6 py-3 rounded-full font-medium text-white transition-colors cursor-pointer typography-paragraph-regular"
        >
          Consult Now
        </button>
        <button
          onClick={() => setOpenCallModal(true)}
          className="px-6 py-3 border border-secondary-200 rounded-full font-medium text-secondary-500 cursor-pointer typography-paragraph-regular"
        >
          Call Back Request
        </button>
      </div>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        selectDoctor={selectedDoctor}
        selectedCenter={selectedCenter}
      />
      <RequestCallModal
        isOpen={openCallModal}
        onClose={() => setOpenCallModal(false)}
        setIsOpen={setOpenCallModal}
      />
    </section>
  );
};

export default Profile;
