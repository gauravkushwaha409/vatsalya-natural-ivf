"use client";

import Image from "next/image";
import Faq from "../../../components/Faqs";
import pic1 from "./../../../assests/contact/pic3.png";
import pic2 from "./../../../assests/contact/pic4.png";
import { IFAQCategory, IHomeFaq } from "../interface/home.interface";
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
      <div className="flex gap-10 px-5 md:px-20 pb-6 sm:pb-10">
        <div className="hidden md:flex justify-start items-start w-full md:w-1/2">
          <div className="relative rounded-lg w-10/12 aspect-[16/16]">
            <Image
              src={pic1}
              alt="approval"
              width={1920}
              height={1920}
              className="w-full h-full"
            />
            <div className="-right-10 -bottom-10 absolute bg-white pt-[0.1rem] pl-[0.1rem] rounded-t-none rounded-l-3xl w-[50%] aspect-[271/252]">
              <div className="flex flex-col justify-center items-center rounded-xl w-full h-full">
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
            <span className="font-bold text-primary-500 uppercase tracking-widest typography-paragraph-regular">
              FAQs
            </span>
            <div className="border border-primary-400 border-t w-21"></div>
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
        className="flex items-center gap-3 bg-secondary-500 mx-auto my-14 px-8 py-4 border border-secondary-200 rounded-full font-extrabold text-white cursor-pointer typography-paragraph-regular"
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
  const [selectedFaq, setSelectedFaq] = useState<string>("All"); // store category id or "All"

  return (
    <>
      <FaqCategory
        data={data}
        selectedFaq={selectedFaq}
        setSelectedFaq={setSelectedFaq}
      />
      <Faq
        faq={
          selectedFaq === "All"
            ? data
            : data.filter((item) => item.category?.id === selectedFaq)
        }
      />
    </>
  );
};

// FaqCategory
const FaqCategory = ({
  data,
  selectedFaq,
  setSelectedFaq,
}: {
  data: IHomeFaq[];
  selectedFaq: string;
  setSelectedFaq: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const categories: IFAQCategory[] = Object.values(
    data
      .map((item) => item.category)
      .filter((cat): cat is IFAQCategory => !!cat)
      .reduce((acc, cat) => {
        if (!acc[cat.id] || (cat.name && !acc[cat.id].name)) {
          acc[cat.id] = cat;
        }
        return acc;
      }, {} as Record<string, IFAQCategory>)
  );
  console.log(categories, "Categories");
  return (
    <div
      className="flex items-center gap-x-6 px-3 py-2 overflow-x-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <button
        onClick={() => setSelectedFaq("All")}
        className={`typo-mid-bd-semi-bold rounded-3xl px-4 py-1.5 min-w-fit ${
          selectedFaq === "All"
            ? "bg-primary-500 text-white"
            : "text-[#A03879] border border-[#A03879]"
        }`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setSelectedFaq(cat.id)}
          className={`typo-mid-bd-semi-bold rounded-3xl px-4 py-1.5 min-w-fit ${
            selectedFaq === cat.id
              ? "bg-primary-500 text-white"
              : "text-[#A03879] border border-[#A03879]"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};
export default FaqHome;
