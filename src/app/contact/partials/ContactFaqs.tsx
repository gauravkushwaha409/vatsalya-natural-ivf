"use client";
import Image from "next/image";
import React from "react";
import pic1 from "./../../../assests/contact/pic3.png";
import pic2 from "./../../../assests/contact/pic4.png";
import Faq from "../../../components/Faqs";
// import faqData from "@/data/faqsData";
import { useContactForm } from "@/hooks/contact/useContact";
const ContactFaqs = () => {
  const { settingData } = useContactForm();
  const setting = settingData?.data;
  return (
    <section className="flex lg:flex-row flex-col gap-10 py-20">
      <div className="flex w-full md:w-1/2 justify-start items-center">
        <div className="  aspect-[16/16] relative rounded-lg  w-10/12 ">
          <Image
            src={pic1}
            alt="approval"
            width={1920}
            height={1920}
            unoptimized
            className="w-full h-full"
          />
          <div className="bg-white   aspect-[271/252] w-[50%] absolute -bottom-10 -right-10 pt-[0.1rem] pl-[0.1rem] rounded-l-3xl rounded-t-none  ">
            <div className="rounded-xl flex items-center justify-center flex-col  h-full w-full">
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
        <div className="flex items-center gap-3 py-5 ">
          <span className="text-primary-500 typography-paragraph-regular font-bold uppercase tracking-widest">
            FAQs
          </span>
          <div className="border border-primary-400 border-t w-21"></div>
        </div>
        <h1 className="typography-h4 lg:typography-h2 font-semibold pb-4">
          Answers to Your Fertility Questions
        </h1>
        <Faq faq={setting?.Faq} />
      </div>
    </section>
  );
};

export default ContactFaqs;
