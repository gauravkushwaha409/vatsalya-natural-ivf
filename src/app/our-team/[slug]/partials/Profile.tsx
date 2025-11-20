"use client";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import RequestCallModal from "@/components/modals/RequestCallModal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
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
      <div className="flex lg:flex-row flex-col gap-10  ">
        {/* image section  */}
        <div className="flex justify-center items-end rounded-[58px] w-full bg-[#FFD2CE38] lg:h-[604px] max-w-[412px] ">
          <Image
            src={data?.image}
            alt="heropic"
            width={1920}
            height={1080}
            className="w-full h-[466px] object-cover "
          />
        </div>

        {/* description section */}
        <div className="flex flex-col justify-center gap-2">
          <div className="flex items-center gap-3 mb-1">
            <p className="font-semibold text-primary-500 uppercase leading-[150%] tracking-[18%] text-[16px]">
              Doctor Profile
            </p>
            <div className="bg-primary-400 w-21 h-px"></div>
          </div>

          <p className="text-[#373737] text-[13px] leading-[150%] font-normal">
            {data?.position}
          </p>

          <h1 className="font-bold text-secondary-500 text-[33px] leading-[150%]">
            {data?.name}
          </h1>
          {data?.description && (
            <p
              className="text-text-500 text-[16px] leading-[160%] font-normal mb-3"
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            />
          )}

          <div className="flex items-center gap-3">
            <div>
              <MdLocationPin size={20} className="text-secondary-500" />
            </div>
            <span className="text-text-500 typography-paragraph-regular">
              {data?.center?.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <IoMdBriefcase size={20} className="text-secondary-500" />
            </div>
            <span className="text-text-500 typography-paragraph-regular">
              {data?.experience}+ years
            </span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <div>
              <FaGraduationCap size={20} className="text-secondary-500" />
            </div>
            <span className="text-text-500 typography-paragraph-regular">
              {data?.education}
            </span>
          </div>

          {data?.service.length > 0 && (
            <div>
              <h2 className="text-text-500 text-[20px] leading-[150%] tracking-[-2%] font-semibold mb-3">
                Services Offered
              </h2>
              <div className="flex flex-wrap  items-center gap-5">
                {data?.service.map(
                  (service: IProfileService, index: number) => (
                    <React.Fragment key={index}>
                      <div>
                        <Image
                          src={service?.icon}
                          alt={service?.name}
                          width={400}
                          height={400}
                          className="w-[60px] h-[60px] object-cover shrink-0"
                        />

                        <Link
                          href={`/services/${service?.slug}`}
                          className="mt-1 text-[#1E1E1E] inline-flex items-center gap-4 text-[16px] leading-[31px] hover:text-primary-500 hover:underline duration-300 transition-colors tracking-[-2%] font-medium"
                        >
                          {service?.name}

                          <IoArrowForwardOutline
                            size={24}
                            className="w-fit -rotate-40"
                          />
                        </Link>
                      </div>

                      {index < data?.service.length - 1 && (
                        <div className="w-[0.5px]  h-16 bg-[#FFDCD9]"></div>
                      )}
                    </React.Fragment>
                  )
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 mt-8">
            <button
              onClick={() => {
                setOpenModal(true);
                setSelectedDoctor(data?.id);
                setSelectedCenter(data?.center?.id);
              }}
              className="bg-secondary-500 hover:bg-secondary-600 px-6 py-3 rounded-full font-semibold text-white transition-colors typography-paragraph-regular w-full lg:w-[238px]"
            >
              Consult Now
            </button>
            <button
              onClick={() => setOpenCallModal(true)}
              className="px-6 py-3 border border-secondary-200 rounded-full font-medium text-secondary-500  typography-paragraph-regular w-full lg:w-[238px] hover:bg-secondary-50 transition-colors"
            >
              Call Back Request
            </button>
          </div>
        </div>
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
