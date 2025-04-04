"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ivfTeamData } from "@/data/expertise";
import buterflysvg from "@/assests/icons/butterflyExpertise.svg";
import { MdLocationPin } from "react-icons/md";
import { IoMdBriefcase } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import icon from "@/assests/icons/experts/ivf.svg";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import RequestCallModal from "@/components/modals/RequestCallModal";

const Profile = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openCallModal, setOpenCallModal] = useState<boolean>(false);
  return (
    <section className="py-5 bg-background-100 padding">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/3 flex justify-center">
          <div
            className=" w-[320px] h-[318px] aspect-[320/318]  overflow-hidden  rounded-lg  relative  "
            style={{
              background: "linear-gradient(to right, #EBC0DB 0%, #FFD2CE 100%)",
            }}
          >
            <Image
              src={ivfTeamData[3]?.image}
              alt="heropic"
              width={1920}
              height={1080}
              className="w-full h-full contain absolute z-10 "
            />
            <div className="h-36 absolute right-2 rotate-240 top-10 z-0">
              <Image
                src={buterflysvg}
                alt="heropic"
                width={1920}
                height={1080}
                className="w-full h-full  "
              />
            </div>
          </div>
        </div>
        {/* profile */}
        <div className="flex flex-col gap-3.5 justify-center">
          <div className="flex items-center gap-3  ">
            <span className="text-primary-500 typography-paragraph-regular font-bold uppercase tracking-widest">
              Doctor Profile
            </span>
            <div className="h-px bg-primary-400 w-21"></div>
          </div>
          <h1 className="typography-h3 font-bold text-secondary-500">
            {ivfTeamData[0]?.name}
          </h1>
          <span className="typography-paragraph-large text-text-500 font-semibold ">
            Senior Fertility Specialist{" "}
          </span>

          <div className="flex items-center gap-2 ">
            <div>
              <MdLocationPin size={20} className="text-secondary-500" />
            </div>
            <span className="typography-paragraph-regular text-text-500 ">
              Vatsalya Fertility Center, Kathmandu
            </span>
          </div>

          <div className="flex items-center gap-2 ">
            <div>
              <IoMdBriefcase size={20} className="text-secondary-500" />
            </div>
            <span className="typography-paragraph-regular text-text-500 ">
              {ivfTeamData[0]?.experience}
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <div>
              <FaGraduationCap size={20} className="text-secondary-500" />
            </div>
            <span className="typography-paragraph-regular text-text-500 ">
              MD in Obstetrics & Gynecology, IVF Specialist
            </span>
          </div>
          <p className="text-text-500 typography-paragraph-regular ">
            Dr. Pratikshya Pandey is a leading fertility specialist with over 15
            years of experience in treating infertility and reproductive health
            conditions. She specializes in IVF, IUI, egg freezing, and advanced
            fertility treatments, helping countless couples achieve their dream
            of parenthood.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h5 className="typography-h4 font-semibold text-text-500 py-5">
          Services Offered
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ivfTeamData[0]?.servicesOffered?.map((items) => (
            <>
              <div className="bg-primary-50/20 rounded-lg p-5 border border-text-50 flex items-center gap-5 shadow-sm backdrop-blur-2xl">
                <div className="h-8 w-8">
                  <Image
                    src={icon}
                    alt="icon1"
                    width={1920}
                    height={1080}
                    className="w-full h-full contain  "
                  />
                </div>
                <div>
                  <p className="typography-paragraph-large font-semibold text-text-500">
                    {items?.title}
                  </p>
                  <span className="typography-paragraph-regular text-text-400 font-normal pt-2">
                    {items?.description}
                  </span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="flex  items-center gap-5">
        <button
          onClick={() => setOpenModal(true)}
          className="bg-secondary-500 cursor-pointer hover:bg-secondary-600 text-white py-2 lg:py-4 px-6 lg:px-10  rounded-full typography-paragraph-regular"
        >
          Consult Now
        </button>
        <button
          onClick={() => setOpenCallModal(true)}
          className=" typography-paragraph-regular cursor-pointer font-semibold  text-secondary-500 border border-secondary-100 rounded-full p-2 lg:p-4 px-5"
        >
          Call Back Request
        </button>
      </div>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
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
