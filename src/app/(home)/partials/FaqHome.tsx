"use client";

import Image from "next/image";
import Faq from "../../../components/Faqs";
import pic1 from "./../../../assests/contact/pic3.png";
import pic2 from "./../../../assests/contact/pic4.png";
import { IHomeFaq } from "../interface/home.interface";
import RequestAppoimentModal from "@/components/modals/RequestAppoimentModal";
import React, { useState } from "react";

type HomeFaqProps = {
  data: IHomeFaq[];
};
const FaqHome: React.FC<HomeFaqProps> = ({ data }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAppointmentClick = () => {
    setOpenModal(true);
  };

  return (
    <section>
      <div className="flex gap-10 px-5 pb-6 md:px-20 sm:pb-10">
        <div className="items-start justify-start hidden w-full md:flex md:w-1/2">
          <div className="relative rounded-lg w-10/12 aspect-[16/16]">
            <Image
              src={pic1}
              alt="approval"
              width={1920}
              height={1920}
              className="w-full h-full"
            />
            <div className="-right-10 -bottom-10 absolute bg-white pt-[0.1rem] pl-[0.1rem] rounded-t-none rounded-l-3xl w-[50%] aspect-[271/252]">
              <div className="flex flex-col items-center justify-center w-full h-full rounded-xl">
                <Image
                  src={pic2}
                  alt="approval"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-3 py-5">
            <span className="font-bold tracking-widest uppercase text-primary-500 typography-paragraph-regular">
              FAQs
            </span>
            <div className="border border-t border-primary-400 w-21"></div>
          </div>
          <h2 className="pb-4 font-semibold typography-h2">
            Answers to Your Fertility Questions
          </h2>
          <FaqWrapper data={data} />
        </div>
      </div>
      <button
        type="button"
        onClick={() => handleAppointmentClick()}
        className="flex items-center gap-3 px-8 py-4 mx-auto font-extrabold text-white border rounded-full cursor-pointer bg-secondary-500 border-secondary-200 typography-paragraph-regular my-14"
      >
        Book your Appointment
      </button>
      <RequestAppoimentModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
};

const FaqWrapper = ({ data }: { data: IHomeFaq[] }) => {
  const [selectedFaq, setSelectedFaq] = useState<string | null>(null);
  return (
    <React.Fragment>
      <FaqCategory
        selectedFaq={selectedFaq}
        setSelectedFaq={setSelectedFaq}
        data={data}
      />
      <Faq
        faq={
          selectedFaq === "All"
            ? data
            : data?.filter((item) => item.category === selectedFaq)
        }
      />
    </React.Fragment>
  );
};

const FaqCategory = ({
  data,
  selectedFaq,
  setSelectedFaq,
}: {
  data: IHomeFaq[];
  selectedFaq: string | null;
  setSelectedFaq: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const category: string[] = Array.from(
    new Set(
      data
        ?.map((item) => item?.category)
        .filter((category): category is string => Boolean(category))
    )
  );

  return (
    <div
      style={{
        scrollbarWidth: "none",
      }}
      className="px-3 py-2 flex items-center gap-x-6 overflow-x-auto"
    >
      {category?.map((item, index) => (
        <button
          key={item + index}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setSelectedFaq(item);
          }}
          className={`typo-mid-bd-semi-bold rounded-3xl px-4 py-1.5 min-w-fit ${
            selectedFaq === item
              ? "bg-primary-500 text-white"
              : "text-[#A03879] border border-[#A03879]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
export default FaqHome;
