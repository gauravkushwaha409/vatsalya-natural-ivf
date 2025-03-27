import Breadcrumb from "@/components/Breadcumb";
import Link from "next/link";
import React from "react";

const Headings = () => {
  return (
    <header className="flex items-center flex-col pt-5 pb-10 bg-gradient-to-b from-[#FFF1EF] to-[#FDFCFB]">
      <div className="flex mx-auto w-max typography-caption text-text-400">
        <Link href="/" className="flex justify-center items-center ">
          {"Home"}
        </Link>
        <span className="inline-block px-1">{">"}</span>
        <span> Services</span>
        <span className="inline-block px-1">{">"}</span>

        <span> Fertility Treatment</span>
      </div>
      <h1 className="typography-h3 font-bold text-secondary-500 mt-[10px]">
        Fertility Treatment
      </h1>
      <p className="typography-paragraph-large text-primary-500 mt-5">
        “Infertility treatment that puts an end to infertility”
      </p>
    </header>
  );
};

export default Headings;
